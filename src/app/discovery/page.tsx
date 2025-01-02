"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Search, Terminal, Bird } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useMCPServers } from '@/hooks/useMCPServers'
import { ServerCard } from '@/components/server-card'
import { Switch } from "@/components/ui/switch"

type RecentSearch = {
  id: number
  description: string
}

const RECENT_SEARCHES: RecentSearch[] = [
  { id: 1, description: 'Post tweets and search for tweets by query' },
  { id: 2, description: 'Manage Airtable bases' },
  { id: 3, description: 'Retrieve information from the AWS Knowledge Base' }
]

const SearchHeader = () => (
  <div className="mb-8 text-left">
    <h1 className="text-5xl font-serif mb-2 flex items-center justify-start text-beige-text-heading">
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
  loading,
  aiPrompt,
  onAiPromptChange,
}: {
  searchQuery: string
  onSearchChange: (value: string) => void
  onSubmit: () => void
  loading: boolean
  aiPrompt: boolean
  onAiPromptChange: (checked: boolean) => void
}) => (
  <div className="relative flex w-full mb-8">
    <textarea
      placeholder={`Enter your search description
        \neg: I need to look up flight information`}
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          onSubmit();
        }
      }}
      className="text-sm w-full h-48 min-h-14 bg-white border-orange-500 border-2 text-beige-text-primary placeholder-beige-input-placeholder rounded-none focus:outline-none px-4 py-2 resize-y"
    />
    <div className="absolute left-4 bottom-2 flex items-center space-x-2">
      <Switch
        checked={aiPrompt}
        onCheckedChange={onAiPromptChange}
        className="data-[state=checked]:bg-orange-500 h-4 w-8"
        disabled={true}
      />
      <label className="text-sm font-medium leading-none text-beige-text-secondary">
        AI Prompt
      </label>
    </div>
    <Button 
      onClick={onSubmit}
      className="absolute right-2 bottom-2 bg-orange-500 hover:bg-orange-600 text-white font-mono text-md rounded-none px-4 py-2 flex items-center gap-3"
      disabled={loading}
    >
      <Search className="!size-5" />
      SEARCH
    </Button>
  </div>
)

const PopularSearches = ({ searches, handleSearchClick }: { searches: RecentSearch[], handleSearchClick: (description: string) => void }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">$ Popular searches</span>
    </div>
    <div className="flex flex-wrap gap-3">
      {searches.map(search => (
        <button
          key={search.id}
          onClick={() => handleSearchClick(search.description)}
          className="px-2 py-1 text-xs text-left border border-black hover:bg-accent/50 transition-colors whitespace-nowrap"
        >
          {search.description}
        </button>
      ))}
    </div>
  </div>
)

const Footer = () => (
  <div className="mt-8 text-xs text-beige-text-secondary text-center">
    <p>Mcp Compass v1.0.0 | Powered by React & Next.js</p>
    <p>{new Date().getFullYear()} Mcp Club by Weight Wave</p>
  </div>
)

export default function DiscoveryPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('description') || '')
  const [aiPrompt, setAiPrompt] = useState(true)
  const { servers, error, loading, notFound, handleSearch: performSearch, reset } = useMCPServers()

  // Update search description and perform search when URL changes
  useEffect(() => {
    const description = searchParams.get('description')
    const ai = searchParams.get('ai')
    if (description !== null) {
      setSearchQuery(description)
      setAiPrompt(ai === 'true')
      performSearch(description)
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
      params.set('description', searchQuery)
      params.set('ai', aiPrompt.toString())
    } else {
      reset() // Reset the servers state when there's no description
    }
    router.push(`/discovery?${params.toString()}`)
  }

  const handleSearchClick = (description: string) => {
    setSearchQuery(description)
    handleSearch()
  }

  return (
    <main className="min-h-screen bg-beige-background text-beige-text-primary font-mono p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <SearchHeader />
        <SearchForm 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSubmit={handleSearch}
          loading={loading}
          aiPrompt={aiPrompt}
          onAiPromptChange={setAiPrompt}
        />
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        {notFound && (
          <div className="flex justify-center items-center gap-4">

            <Bird className="w-10 h-10 text-beige-text-secondary stroke-orange-500 stroke-[1.5]" />

            <div className="text-center text-beige-text-secondary">
              No servers found for your search
            </div>
          </div>
        )}
        {servers.length > 0 && (
          <div className="mt-8 space-y-4">
            {servers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        )}
        {!searchQuery && <PopularSearches searches={RECENT_SEARCHES} handleSearchClick={handleSearchClick} />}
        <Footer />
      </div>
    </main>
  )
}
