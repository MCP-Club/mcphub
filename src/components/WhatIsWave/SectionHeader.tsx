import { FC } from 'react';
import { motion } from 'framer-motion';

export const SectionHeader: FC = () => (
  <motion.div 
    className="mx-auto max-w-2xl text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
      What is Wave?
    </h2>
    <p className="text-xl leading-8 text-gray-600 text-justify">
      Introducing Wave – your all-in-one MCP tools manager. With Wave, users can 
      effortlessly discover and install the latest MCP tools from the market, eliminating 
      the need for manual configuration or environment setup. Streamline your workflow and 
      get the tools you need with just a few clicks—no hassle, no complexity.
    </p>
  </motion.div>
);