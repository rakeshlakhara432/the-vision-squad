import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Audit() {
  const auditTypes = [
    { title: 'Statutory Audit', desc: 'Ensuring compliance with legal requirements and accounting standards.' },
    { title: 'Internal Audit', desc: 'Evaluating internal controls and operational efficiency.' },
    { title: 'Tax Audit', desc: 'Verification of tax-related compliance and reporting.' },
    { title: 'Stock Audit', desc: 'Physical verification and valuation of inventory.' }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              Business <span className="text-brand-green">Audit</span> Services
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our audit services go beyond mere compliance. We provide valuable insights into your business operations, helping you identify risks and improve efficiency while ensuring full regulatory adherence.
            </p>
            <Link to="/inquiry" className="btn-green inline-flex items-center space-x-2">
              <span>Get Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800" 
              alt="Audit" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {auditTypes.map((type, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Shield className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-gray-500 text-sm">{type.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-accent rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Audit Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Planning', desc: 'Understanding your business and defining the audit scope.' },
              { step: '02', title: 'Execution', desc: 'Fieldwork, data collection, and verification of records.' },
              { step: '03', title: 'Reporting', desc: 'Finalizing findings and providing a comprehensive report.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-brand-green/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
