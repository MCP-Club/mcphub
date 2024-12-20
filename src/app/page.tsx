'use client';

import { useEffect, useState } from 'react';
import { ServerCard } from '@/components/ServerCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { HubNavbar } from '@/components/NavBar/Hub';
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HubNavbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      
      <main className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server, index) => (
            <ServerCard key={server.id} server={server} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}