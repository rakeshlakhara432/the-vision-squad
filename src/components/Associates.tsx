import { motion } from 'framer-motion';

const publicBanks = [
  "City Union Bank",
  "Bank of India",
  "Central Bank of India"
];

const privateBanks = [
  "HDFC Bank",
  "Kotak Mahindra Bank",
  "Axis Bank",
  "ICICI Bank",
  "IDFC FIRST Bank",
  "Ujjivan Bank",
  "AU Small Finance Bank"
];

export default function Associates() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs mb-3"
          >
            Trusted Partnerships
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-dark italic"
          >
            Associates Bank
          </motion.h3>
        </div>

        {/* Dynamic Bank Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Public Banks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h4 className="text-xl font-bold text-brand-dark mb-6 border-b-2 border-brand-green/30 pb-2 inline-block">
              Public & Scheduled Banks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {publicBanks.map((bank, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="font-semibold text-gray-700">{bank}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Private Banks */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-3xl p-8 shadow-2xl shadow-brand-dark/20"
          >
            <h4 className="text-xl font-bold text-white mb-6 border-b-2 border-brand-green pb-2 inline-block">
              Private Sector Banks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privateBanks.map((bank, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="font-semibold text-gray-200">{bank}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Banner with Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none z-10" />
          <img 
            src="/bank-partners.png" 
            alt="Bank Partners Network" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
          />
        </motion.div>
        
        <div className="mt-12 text-center text-gray-400 text-sm font-medium">
          Strategic associates with India's leading financial institutions for seamless service delivery.
        </div>
      </div>
    </section>
  );
}
