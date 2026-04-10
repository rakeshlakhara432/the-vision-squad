import { motion } from 'framer-motion';

export default function Associates() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Our Network</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark italic">Associates Bank</h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4"
        >
          <img 
            src="/associates-bank.jpeg" 
            alt="Associates Bank Partners" 
            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          Professional associates with top leading financial institutions and banks.
        </div>
      </div>
    </section>
  );
}
