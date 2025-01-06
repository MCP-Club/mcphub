import { Terminal } from 'lucide-react'

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      {/* Terminal icon with pulsing animation */}
      <div className="relative">
        <Terminal className="w-12 h-12 text-orange-500" />
        <div className="absolute inset-0 animate-ping bg-orange-500/20 rounded-md" />
      </div>
      
      {/* Loading text with typing animation */}
      <div className="font-mono text-beige-text-secondary text-sm">
        <span className="inline-flex overflow-hidden whitespace-nowrap animate-typing">
          Searching mcp servers...
        </span>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-beige-input-border overflow-hidden rounded-full">
        <div className="w-full h-full bg-orange-500 animate-loading-bar" />
      </div>
    </div>
  )
}
