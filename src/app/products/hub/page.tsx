'use client';

import { useEffect, useState } from 'react';
import { ServerCard } from '@/components/ServerCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { PageHeader } from '@/components/PageHeader';
import type { ServerInfo } from '@/types/server';

export default function HubPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim() || searching) {
      return;
    }
    
    setSearching(true);
    setError(null);
    
    try {
      const response = await fetch(`https://registry.mcphub.io/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        setError('Failed to search servers');
        return;
      }
      const data = await response.json();
      setServers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search servers');
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch('https://registry.mcphub.io/registry');

        if (!response.ok) {
          setError('Failed to fetch servers');
          return;
        }
        const data = await response.json();
        setServers(data);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load servers');
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  if (loading || searching) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-16 relative min-h-screen">
      <PageHeader 
        title="MCP Hub"
        description="Discover and connect with powerful MCP servers"
      />
      
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
            placeholder="Search servers..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            onClick={() => handleSearch(searchQuery)}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map((server, index) => (
          <ServerCard key={server.id} server={server} index={index} />
        ))}
      </div>
    </div>
  );
}