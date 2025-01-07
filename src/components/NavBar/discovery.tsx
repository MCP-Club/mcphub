import Link from "next/link"
import Image from "next/image"
import mcpDark from "@/assets/mcp-dark.svg"

interface HubNavbarProps {
  className?: string
}

const DiscoveryNavbar = ({ className }: HubNavbarProps) => (
  <nav className={`bg-beige-background shadow-md z-50 fixed w-full ${className}`}>
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={mcpDark}
              alt="MCP HUB Logo"
              className="h-10 w-10 rounded-lg"
              width={56}
              height={56}
            />
            <span className="ml-4 text-xl font-bold text-beige-text-heading">MCP HUB</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/registry"
            className="text-beige-text-secondary hover:text-orange-500 px-3 py-2 text-sm font-medium"
          >
            All servers
          </Link>
          <a
            href="https://modelcontextprotocol.io/quickstart"
            className="text-beige-text-secondary hover:text-orange-500 px-3 py-2 text-sm font-medium"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default DiscoveryNavbar
