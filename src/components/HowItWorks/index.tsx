import { motion } from 'framer-motion';
import { LogIn, Upload, Users } from 'lucide-react';

const steps = [
  {
    title: 'Sign Up & Log In',
    description: 'Create a secure account and log in to start uploading and exploring MCPs.',
    icon: LogIn,
  },
  {
    title: 'Upload Your MCP',
    description: 'Easily upload your Model Context Protocol files through our intuitive drag-and-drop interface.',
    icon: Upload,
  },
  {
    title: 'Explore & Collaborate',
    description: 'Browse, search, and filter through uploaded MCPs. Collaborate with others and gain insights into diverse contexts for your AI projects.',
    icon: Users,
  },
];

export function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-white to-sky-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative p-6 bg-white rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-xl mb-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}