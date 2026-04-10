import { motion } from 'framer-motion';

const banks = [
  { name: "City Union Bank", type: "Public" },
  { name: "Bank of India", type: "Public" },
  { name: "Central Bank of India", type: "Public" },
  { name: "HDFC Bank", type: "Private" },
  { name: "Kotak Mahindra Bank", type: "Private" },
  { name: "Axis Bank", type: "Private" },
  { name: "ICICI Bank", type: "Private" },
  { name: "IDFC FIRST Bank", type: "Private" },
  { name: "Ujjivan Bank", type: "Private" },
  { name: "AU Small Finance Bank", type: "Private" },
];

export default function Associates() {
  // Triple the list for seamless infinite loop
  const scrollerBanks = [...banks, ...banks, ...banks];

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs mb-3"
            >
              Our Professional Network
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-brand-dark italic"
            >
              Associates Bank
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-sm font-medium"
          >
            Strategically partnered with India's top leading financial institutions to provide comprehensive financial solutions.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative flex overflow-x-hidden py-12 bg-gray-50/50">
        <motion.div 
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
          className="flex whitespace-nowrap space-x-12 px-6"
        >
          {scrollerBanks.map((bank, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[250px] p-8 bg-white rounded-2xl shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100">
                {bank.type === 'Private' ? 'Private Sector' : 'Public/Scheduled'}
              </div>
              <span className="text-lg font-black text-brand-dark tracking-tight">
                {bank.name.toUpperCase()}
              </span>
              <div className="mt-4 w-8 h-1 bg-brand-green/20 group-hover:w-16 group-hover:bg-brand-green transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-transparent pointer-events-none z-10" />
          <img 
            src="bank.png" 
            alt="Bank Associates Landscape" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-white/50">
              <span className="text-brand-dark font-black italic block">Certified Partners</span>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Network coverage across India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
