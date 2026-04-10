import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GSTServices() {
  const services = [
    { title: 'GST Registration', desc: 'New registration for individuals and businesses.' },
    { title: 'Monthly Returns', desc: 'Timely filing of GSTR-1, GSTR-3B, and more.' },
    { title: 'GST Annual Return', desc: 'Comprehensive GSTR-9 and GSTR-9C reconciliation.' },
    { title: 'Notice Handling', desc: 'Expert representation for GST notices and audits.' }
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
              GST <span className="text-brand-green">Compliance</span> & Filing
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Navigate the complexities of Goods and Services Tax with our expert guidance. We ensure your business stays compliant while optimizing your tax position and managing all filings seamlessly.
            </p>
            <Link to="/inquiry" className="btn-green inline-flex items-center space-x-2">
              <span>Get GST Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
              alt="GST" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, i) => (
            <div key={i} className="flex items-start space-x-6 p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-brand-green transition-colors">
              <div className="bg-brand-green/10 p-4 rounded-xl text-brand-green">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-dark text-white rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Professional GST Management?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                'Avoid heavy penalties for late filing',
                'Accurate Input Tax Credit (ITC) claims',
                'Seamless reconciliation of data',
                'Expert handling of legal notices',
                'Regular updates on GST law changes',
                'Peace of mind for business owners'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-brand-green" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
