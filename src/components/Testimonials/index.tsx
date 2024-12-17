import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "MCP Hub has transformed the way I share and collaborate on AI context data. It's the go-to platform for AI researchers.",
    author: "John Doe",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The ease of uploading and the ability to explore various MCPs has saved me countless hours in my AI projects.",
    author: "Jane Smith",
    role: "AI Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <blockquote className="text-lg leading-8 text-gray-600">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}