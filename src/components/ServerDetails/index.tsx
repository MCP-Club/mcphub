import { ServerInfo as ServerInfoType } from '@/types/server';
import { ServerHeader } from './ServerHeader';
import { TagList } from './TagList';
import { ServerInfo } from './ServerInfo';
import { cn } from '@/lib/utils';
import githubLogo from '@/assets/github.svg';
import Image from 'next/image';

interface ServerDetailsViewProps {
  className?: string;
  server: ServerInfoType;
}

export const ServerDetailsView = ({ className, server }: ServerDetailsViewProps) => (
  <div className={cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 h-auto', className)}>
    <ServerHeader server={server} />
    
    {server.sources?.github && (
      <a
        href={server.sources.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors mb-6"
      >
        <div className="relative w-5 h-5">
          <Image
            src={githubLogo}
            alt="GitHub"
            fill
            className="object-contain dark:invert"
          />
        </div>
        <span>View on GitHub</span>
      </a>
    )}

    <p className="text-gray-700 dark:text-gray-300 mb-6">
      {server.description}
    </p>
    
    <TagList 
      title="Tags" 
      items={server.tags} 
      variant="blue" 
    />
    
    <TagList 
      title="Categories" 
      items={server.categories} 
      variant="green" 
    />
    
    <ServerInfo server={server} />
  </div>
);
