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
    <div className="min-h-screen dark:bg-gray-900">
      <HubNavbar 
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {server ? (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Left column - Server Details */}
              <div className="lg:col-span-1">
                <ServerDetailsView server={server} />
              </div>
              
              {/* Right column - GitHub README */}
              <div className="lg:col-span-2">
                {server.sources?.github && (
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      README from GitHub
                    </h2>
                    <GitHubReadme githubUrl={server.sources.github} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default ServerDetails;
