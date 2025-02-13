'use client';

import { Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import mcpDark from '@/assets/mcp-dark.svg'
import { ModeToggle } from '@/components/ModeToggle';

interface HubNavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function HubNavbar({ onSearch, searchQuery }: HubNavbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
    onSearch(query);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue !== searchQuery) {
        handleSearch(inputValue);
      }
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/registry" className="flex items-center">
              <Image
                src={mcpDark}
                alt="MCP HUB Logo"
                className="h-10 w-10 rounded-lg"
                width={56}
                height={56}
              />
              <span className="ml-4 text-xl font-bold text-gray-900 dark:text-white">MCP HUB</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleSearch(inputValue)}
                placeholder="Search for servers..."
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
              />
              {inputValue && (
                <button
                  onClick={() => {
                    setInputValue('');
                    handleSearch('');
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Discovery
            </Link>
            <a
              href="https://modelcontextprotocol.io/quickstart"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Documentation
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}