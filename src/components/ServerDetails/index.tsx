import { ServerInfo as ServerInfoType } from '@/types/server';
import { ServerHeader } from './ServerHeader';
import { TagList } from './TagList';
import { ServerInfo } from './ServerInfo';

interface ServerDetailsViewProps {
  server: ServerInfoType;
}

export const ServerDetailsView = ({ server }: ServerDetailsViewProps) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 h-full">
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
