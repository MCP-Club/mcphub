import { ServerInfo as ServerInfoType } from '@/types/server';
import { ServerHeader } from './ServerHeader';
import { TagList } from './TagList';
import { ServerInfo } from './ServerInfo';

interface ServerDetailsViewProps {
  server: ServerInfoType;
}

export const ServerDetailsView = ({ server }: ServerDetailsViewProps) => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
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
  </div>
);
