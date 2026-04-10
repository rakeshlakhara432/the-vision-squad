import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, CheckCircle2, ArrowRight, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoanFinance() {
  const loanTypes = [
    { title: 'Business Loans', desc: 'Working capital and term loans for business expansion.' },
    { title: 'Project Financing', desc: 'Funding for new industrial projects and infrastructure.' },
    { title: 'MSME Loans', desc: 'Specialized schemes and subsidies for small businesses.' },
    { title: 'Home & Personal', desc: 'Competitive rates for individual financial needs.' }
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
              Loan & <span className="text-brand-green">Financial</span> Advisory
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Secure the funding your business needs to grow. We specialize in loan file preparation, financial modeling, and syndication with leading banks to ensure you get the best terms possible.
            </p>
            <Link to="/inquiry" className="btn-green inline-flex items-center space-x-2">
              <span>Check Loan Eligibility</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800" 
              alt="Finance" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {loanTypes.map((loan, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Landmark className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">{loan.title}</h3>
              <p className="text-gray-500 text-sm">{loan.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-accent rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Preparation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Documentation', desc: 'Gathering all necessary financial records and KYC.' },
              { title: 'CMA Report', desc: 'Preparing detailed Credit Monitoring Arrangement reports.' },
              { title: 'Bank Liaison', desc: 'Coordinating with banks for smooth processing.' },
              { title: 'Disbursement', desc: 'Ensuring timely release of funds after approval.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                  <h4 className="text-lg font-bold mb-2 text-brand-green">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-gray-300" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
