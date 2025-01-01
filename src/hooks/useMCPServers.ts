import { useState, useCallback } from 'react';
import type { ServerInfo } from '@/types/server';

export function useMCPServers() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const processServers = async (data: ServerInfo[]): Promise<ServerInfo[]> => {
    return data.map(server => ({
      ...server,
      tags: server.tags.map(tag => tag.toLowerCase())
    }));
  };

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim() || loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await fetch(`https://registry.mcphub.io/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        setError('Failed to search servers');
        return;
      }
      const data = await response.json();
      setServers(await processServers(data));
      if (data.length === 0) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search servers');
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const handleSearchByID = useCallback(async (id: string) => {
    if (!id.trim() || loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await fetch(`https://registry.mcphub.io/registry/${id}`);
      if (!response.ok) {
        setError('Failed to search servers');
        return;
      }
      const data = await response.json();
      setServers(await processServers([data]));
      if (data.length === 0) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search servers');
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const fetchServers = useCallback(async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await fetch('https://registry.mcphub.io/registry');
      if (!response.ok) {
        setError('Failed to fetch servers');
        return;
      }
      const data = await response.json();
      setServers(await processServers(data));
      if (data.length === 0) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load servers');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    servers,
    error,
    loading,
    notFound,
    handleSearch,
    fetchServers,
    handleSearchByID
  };
}
