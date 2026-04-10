import { motion } from 'framer-motion';
import { Shield, FileText, Landmark, Briefcase, UserPlus, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const allServices = [
    { 
      icon: Shield, 
      title: 'Business Audit', 
      desc: 'Statutory, internal, and tax audits to ensure compliance and operational integrity.',
      path: '/services/audit',
      benefits: ['Legal compliance', 'Risk identification', 'Process improvement']
    },
    { 
      icon: FileText, 
      title: 'GST Services', 
      desc: 'End-to-end GST management from registration to monthly return filing and reconciliation.',
      path: '/services/gst',
      benefits: ['Timely filings', 'ITC optimization', 'Notice handling']
    },
    { 
      icon: Landmark, 
      title: 'Loan Preparation', 
      desc: 'Expert preparation of loan files, CMA reports, and financial modeling for business funding.',
      path: '/services/loan',
      benefits: ['High approval rates', 'Bank coordination', 'Optimal terms']
    },
    { 
      icon: Briefcase, 
      title: 'Income Tax Filing', 
      desc: 'Strategic tax planning and accurate filing for individuals, firms, and companies.',
      path: '/services',
      benefits: ['Tax savings', 'Compliance', 'Audit support']
    },
    { 
      icon: UserPlus, 
      title: 'Company Registration', 
      desc: 'Seamless incorporation of Private Limited, LLP, and OPC entities with full compliance.',
      path: '/services',
      benefits: ['Fast processing', 'Legal structure', 'Startup benefits']
    },
    { 
      icon: TrendingUp, 
      title: 'Financial Advisory', 
      desc: 'Strategic financial planning and investment advisory to grow your wealth and business.',
      path: '/services',
      benefits: ['Growth strategy', 'Wealth management', 'Expert insights']
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Our <span className="text-brand-green">Professional</span> Services</h1>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive suite of financial and accounting services designed to help you navigate the complexities of modern business and taxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="bg-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{service.desc}</p>
              
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center space-x-2 text-xs font-medium text-gray-600">
                    <CheckCircle2 size={14} className="text-brand-green" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to={service.path} className="btn-green w-full text-center text-sm flex items-center justify-center space-x-2">
                <span>View Details</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We start with a deep understanding of your requirements.' },
              { step: '02', title: 'Strategy', desc: 'Developing a tailored plan for your specific financial needs.' },
              { step: '03', title: 'Execution', desc: 'Professional handling of audits, filings, or registrations.' },
              { step: '04', title: 'Support', desc: 'Ongoing guidance and support for your continued growth.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-brand-green/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
