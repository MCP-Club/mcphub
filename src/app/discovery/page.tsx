"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Search, Terminal } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useMCPServers } from '@/hooks/useMCPServers'
import { ServerCard } from '@/components/server-card'

type RecentSearch = {
  id: number
  query: string
}

const RECENT_SEARCHES: RecentSearch[] = [
  { id: 1, query: 'quantum computing' },
  { id: 2, query: 'cybersecurity trends' },
  { id: 3, query: 'neural networks' }
]

const SearchHeader = () => (
  <div className="mb-8 text-left">
    <h1 className="text-4xl font-semibold font-serif mb-2 flex items-center justify-start text-beige-text-heading">
      <Terminal className="mr-2" />
      The mcp server, discovery
    </h1>
    <p className="text-beige-text-secondary">
      Find the right mcp server for your needs
    </p>
  </div>
)

const SearchForm = ({
  searchQuery,
  onSearchChange,
  onSubmit,
  loading
}: {
  searchQuery: string
  onSearchChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
  loading: boolean
}) => (
  <div className="relative flex w-full mb-8">
    <textarea
      placeholder="Enter your search query or describe your needs ..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          onSubmit(e);
        }
      }}
      className="w-full h-48 bg-white border-blue-600 border-2 text-beige-text-primary placeholder-beige-input-placeholder rounded-none focus:outline-none px-4 py-2"
    />
    <Button 
      onClick={onSubmit}
      className="absolute right-2 bottom-2 bg-beige-button-background hover:bg-beige-button-hover text-beige-text-primary rounded-none px-4 py-1"
      disabled={loading}
    >
      <Search className="mr-1 h-4 w-4" />
      Search
    </Button>
  </div>
)

const RecentSearches = ({ searches }: { searches: RecentSearch[] }) => (
  <div className="text-sm">
    <p className="mb-2 text-beige-text-secondary">$ Recent searches:</p>
    <ul className="list-disc list-inside text-beige-text-primary">
      {searches.map(search => (
        <li key={search.id}>{search.query}</li>
      ))}
    </ul>
  </div>
)

const Footer = () => (
  <div className="mt-8 text-xs text-beige-text-secondary text-center">
    <p>Mcphub v1.0.0 | Powered by React & Next.js</p>
    <p>{new Date().getFullYear()} Cyberdyne Systems</p>
  </div>
)

export default function DiscoveryPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '')
  const { servers, error, loading, notFound, handleSearch: performSearch, reset } = useMCPServers()

  // Update search query and perform search when URL changes
  useEffect(() => {
    const query = searchParams.get('query')
    if (query !== null) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [searchParams])

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch()
    }, 800);

    return () => clearTimeout(timeoutId);

  }, [searchQuery]);

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) {
      params.set('query', searchQuery)
    } else {
      reset() // Reset the servers state when there's no query
    }
    router.push(`/discovery?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-beige-background text-beige-text-primary font-mono p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <SearchHeader />
        <SearchForm 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSubmit={handleSearch}
          loading={loading}
        />
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        {notFound && (
          <div className="mt-4 text-center text-beige-text-secondary">
            No servers found for your search.
          </div>
        )}
        {servers.length > 0 && (
          <div className="mt-8 space-y-4">
            {servers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        )}
        {!searchQuery && <RecentSearches searches={RECENT_SEARCHES} />}
        <Footer />
      </div>
    </div>
  )
}
