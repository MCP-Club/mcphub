'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import waveSvg from '@/assets/waveIcon.svg';

interface HubNavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function HubNavbar({ onSearch, searchQuery, setSearchQuery }: HubNavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={waveSvg}
                alt="Wave Logo"
                className="h-8 w-8"
                width={32}
                height={32}
              />
              <span className="ml-2 text-xl font-medium text-gray-900 dark:text-white">Wave</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && onSearch(searchQuery)}
                placeholder="Search for servers..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center">
            <a
              href="https://docs.mcphub.io"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}