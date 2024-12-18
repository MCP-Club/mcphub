import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Calendar, User } from 'lucide-react';
import { ServerInfo } from '@/types/server';

interface ServerCardProps {
  server: ServerInfo;
  index: number;
}

export function ServerCard({ server, index }: ServerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6 z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 relative">
            <Image
              src={server.logoUrl}
              alt={`${server.title} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {server.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <User className="w-4 h-4" />
              <span className="text-sm">{server.creator}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {server.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {server.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{server.rating}/5</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(server.publishDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
        <code className="text-sm font-mono text-gray-600 dark:text-gray-300">
          {`${server.commandInfo.command} ${server.commandInfo.args.join(' ')}`}
        </code>
      </div>
    </motion.div>
  );
}
