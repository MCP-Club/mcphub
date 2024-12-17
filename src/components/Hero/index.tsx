'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import waveImage from '@/assets/wave.png';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
              src={waveImage}
              alt="Wave"
              className="h-36 w-36"
            />
          </motion.div>
          
          <motion.h1 
            className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to MCP Hub
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Upload, Share, and Explore Model Context Protocols (MCPs) Across AI Systems
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#" className="rounded-md bg-sky-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200">
              Get Started
            </a>
            <a href="#" className="text-lg font-semibold leading-6 text-gray-900 hover:text-sky-600 transition-colors duration-200">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}