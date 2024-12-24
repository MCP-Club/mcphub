import { ServerInfo as ServerInfoType } from '@/types/server';
import { ServerHeader } from './ServerHeader';
import { TagList } from './TagList';
import { ServerInfo } from './ServerInfo';
import { cn } from '@/lib/utils';

interface ServerDetailsViewProps {
  className?: string;
  server: ServerInfoType;
}

export const ServerDetailsView = ({ className, server }: ServerDetailsViewProps) => (
  <div className={cn('bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 h-auto', className)}>
    <ServerHeader server={server} />
    
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
