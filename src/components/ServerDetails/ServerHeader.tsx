import { ServerInfo } from '@/types/server';
import Image from 'next/image';

interface ServerHeaderProps {
  server: ServerInfo;
}

export const ServerHeader = ({ server }: ServerHeaderProps) => (
  <div className="flex items-center space-x-4 mb-6">
    {server.logoUrl && (
      <Image 
        src={server.logoUrl} 
        alt={server.title} 
        width={64}
        height={64}
        className="object-contain rounded"
      />
    )}
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {server.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Created by {server.creator}
      </p>
    </div>
  </div>
);
