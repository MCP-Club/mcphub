import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-700 mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}
