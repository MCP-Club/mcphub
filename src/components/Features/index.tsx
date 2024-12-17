import { motion } from 'framer-motion';
import { Upload, Search, Shield, Users } from 'lucide-react';

const features = [
  {
    name: 'Easy Uploads',
    description: 'Upload your MCPs quickly and securely. Support for various file formats.',
    icon: Upload,
  },
  {
    name: 'Search & Filter',
    description: 'Find the MCPs that matter to you, with advanced search options and metadata filtering.',
    icon: Search,
  },
  {
    name: 'Secure Access',
    description: 'Protect your data with secure logins and customizable access permissions.',
    icon: Shield,
  },
  {
    name: 'Collaboration',
    description: 'Share your MCPs and work together with researchers and developers on shared AI projects.',
    icon: Users,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}