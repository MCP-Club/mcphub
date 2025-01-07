import { useState, useCallback } from 'react';
import type { ServerInfo, SearchResult } from '@/types/server';
import { fetchServerById } from '@/lib/api';

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


  const loadServers = useCallback(async () => {
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
      const servers = await response.json();
      setServers(await processServers(servers));
      if (servers.length === 0) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search servers');
    } finally {
      setLoading(false);
    }
  }, [loading]);


  const fetchServers = useCallback(async (searchResults: SearchResult[]): Promise<ServerInfo[]> => {
    try {
      const serverPromises = searchResults.map(result => fetchServerById(encodeURIComponent(result.id)));
      const servers = await Promise.all(serverPromises);
      return servers;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to fetch servers');
    }
  }, [fetchServerById, processServers]);

  const handleRecommendV2 = useCallback(async (query: string) => {
    if (!query.trim() || loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const response = await fetch(`https://registry.mcphub.io/recommend/v2?description=${encodeURIComponent(query)}`);
      if (!response.ok) {
        setError('Failed to get recommendations');
        return;
      }
      
      const searchResults = await response.json();
      const servers = await fetchServers(searchResults);

      setServers(await processServers(servers));
      if (servers.length === 0) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get recommendations');
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
      const server = await fetchServerById(id);
      setServers(await processServers([server]));
      if (!server) {
        setNotFound(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search servers');
    } finally {
      setLoading(false);
    }
  }, [fetchServerById, loading]);


  const reset = useCallback(() => {
    setServers([]);
    setError(null);
    setLoading(false);
    setNotFound(false);
  }, []);

  return {
    servers,
    error,
    loading,
    notFound,
    handleSearch,
    loadServers,
    handleSearchByID,
    handleRecommendV2,
    reset
  };
}
