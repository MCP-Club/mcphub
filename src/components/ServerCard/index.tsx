import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, User } from 'lucide-react';
import { ServerInfo } from '@/types/server';

interface ServerCardProps {
  server: ServerInfo;
  index: number;
}

export function ServerCard({ server }: ServerCardProps) {

  return (
    <Link 
      href={`/servers/${encodeURIComponent(server.id)}`}
      className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex-grow">
          <div className="flex items-center gap-3 mb-3">
            {server.logoUrl && (
              <div className="w-10 h-10 relative">
                <Image
                  src={server.logoUrl}
                  alt={`${server.title} logo`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {server.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <User className="w-4 h-4" />
                <span className="text-sm">{server.creator}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
            {server.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {server.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(server.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : index < server.rating
                      ? 'text-yellow-400 fill-yellow-400 opacity-50'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(server.publishDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto px-4 py-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
          <code className="text-sm font-mono text-gray-600 dark:text-gray-300">
            {`npx @mcpm/cli install ${server.id}`}
          </code>
        </div>
      </div>
    </Link>
  );
}
