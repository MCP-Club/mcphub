import { FC } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  isReversed?: boolean;
  index: number;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  isReversed = false,
  index,
}) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
  >
    <div className={`flex flex-col lg:flex-row gap-12 items-center ${
      isReversed ? 'lg:flex-row-reverse' : ''
    }`}>
      <div className="w-full px-12 lg:w-1/2 lg:px-0">
        <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-indigo-400/30" />
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-lg leading-8 text-gray-600 text-justify">
          {description}
        </p>
        <motion.div 
          className="mt-8"
          whileHover={{ x: 5 }}
        >
          <a
            href="#"
            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500"
          >
            Learn more
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  </motion.div>
);