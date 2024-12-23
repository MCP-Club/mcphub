'use client'

import { useEffect } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { useMCPServers } from '@/hooks/useMCPServers';
import { ServerDetailsView } from '@/components/ServerDetails';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { HubNavbar } from '@/components/NavBar/Hub';
import { GitHubReadme } from '@/components/GitHubReadme';
import { ServerInfo } from '@/types/server';

const ServerDetails = () => {
  const params = useParams();
  const serverId = params?.id as string;
  const { servers, error, loading, handleSearch } = useMCPServers();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  useEffect(() => {
    if (serverId) {
      handleSearch(serverId);
    }
  }, [serverId]);

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);


  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  const server = servers[0]
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HubNavbar 
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {server ? (
          <>
            <ServerDetailsView server={server} />
            {server.sources?.github && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  README from GitHub
                </h2>
                <GitHubReadme githubUrl={server.sources.github} />
              </div>
            )}
          </>
        ) : null}
      </main>
    </div>
  );
}

export default ServerDetails;
