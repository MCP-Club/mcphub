import { ServerInfo as ServerInfoType } from '@/types/server';

interface ServerInfoProps {
  server: ServerInfoType;
}

export const ServerInfo = ({ server }: ServerInfoProps) => (
  <div className="border-t dark:border-gray-700 pt-6">
    <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Server Information</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-gray-600 dark:text-gray-400">Rating</p>
        <p className="font-medium text-gray-900 dark:text-white">{server.rating}</p>
      </div>
      <div>
        <p className="text-gray-600 dark:text-gray-400">Published</p>
        <p className="font-medium text-gray-900 dark:text-white">{server.publishDate}</p>
      </div>
    </div>
  </div>
);
