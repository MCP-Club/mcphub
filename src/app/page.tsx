'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ServerCard } from '@/components/ServerCard/Hub';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { HubNavbar } from '@/components/NavBar/Hub';
import { useMCPServers } from '@/hooks/useMCPServers';
import { CategoryList } from '@/components/Categories';

export default function HubPage() {
  const { servers, error, loading, notFound, handleSearch, fetchServers } = useMCPServers();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoriesMap = servers.reduce<Map<string, number>>((acc, server) => {
    server.categories?.forEach(category => {
      acc.set(category, (acc.get(category) || 0) + 1);
    });
    return acc;
  }, new Map<string, number>());

  const filteredServers = servers.filter(server => 
    !selectedCategory || server.categories?.includes(selectedCategory)
  );

  useEffect(() => {
    fetchServers();
  }, [fetchServers]);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
    if (query.trim()) {
      handleSearch(query);
    } else {
      fetchServers();
    }
  }, [searchParams]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HubNavbar 
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      
      <main className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Category Sidebar */}
          {!notFound && (
            <CategoryList 
              selectedCategory={selectedCategory} 
              handleCategoryClick={handleCategoryClick} 
              categoriesMap={categoriesMap} 
            />
          )}
          
          {/* Server Grid or Empty State */}
          <div className="flex-1">
            {!notFound ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServers.map((server, index) => (
                  <ServerCard key={server.id} server={server} index={index} />
                ))}
              </div>
            ) : (
              <div className="h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow p-8">
                <svg className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  We couldn&apos;t find any servers matching your search. Try adjusting your search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}