'use client';

import { useEffect, useState } from 'react';
import { ServerCard } from '@/components/ServerCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { PageHeader } from '@/components/PageHeader';
import { mockServers } from './mockData';
import type { ServerInfo } from '@/types/server';

export default function HubPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API fetch with mock data
    const fetchServers = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setServers(mockServers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load servers');
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="container mx-auto px-4 py-16 relative min-h-screen">
      <PageHeader 
        title="MCP Server Hub"
        description="Discover and connect with powerful MCP servers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map((server, index) => (
          <ServerCard key={server.id} server={server} index={index} />
        ))}
      </div>
    </div>
  );
}