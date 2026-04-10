import { motion } from 'framer-motion';
import { ChevronRight, Shield, FileText, Landmark, Briefcase, TrendingUp, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Associates from '../components/Associates';

export default function Home() {
  const highlights = [
    { icon: Shield, title: 'Business Audit', desc: 'Comprehensive audit services ensuring regulatory compliance and operational efficiency.', path: '/services/audit' },
    { icon: FileText, title: 'GST Services', desc: 'Expert GST registration, return filing, and legal notice management.', path: '/services/gst' },
    { icon: Landmark, title: 'Loan & Finance', desc: 'Professional loan file preparation and financial syndication services.', path: '/services/loan' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-10 bg-brand-accent/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} />
              <span>Trusted Financial Partners</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-brand-dark">
              Helping Make Your <br />
              <span className="text-brand-green">Financial Dreams</span> <br />
              Come True
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Expert Chartered Accountant services tailored for your growth. We combine traditional trust with modern fintech efficiency to manage your taxes, audits, and finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inquiry" className="btn-green text-lg px-10 py-4 flex items-center justify-center space-x-2">
                <span>Get Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white text-brand-dark border border-gray-200 px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800" 
                alt="Finance Illustration" 
                className="rounded-3xl shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/5 rounded-full -z-10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Premium Financial Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="bg-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-dark">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link to={item.path} className="text-brand-green font-bold text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Why Us</h2>
            <h3 className="text-4xl font-bold mb-8 text-brand-dark">Experience the Difference in Financial Management</h3>
            <div className="space-y-6">
              {[
                { title: 'Expert Guidance', desc: 'Our team of seasoned CAs provides strategic advice for your business.' },
                { title: 'Tech-Driven Approach', desc: 'We use the latest fintech tools for faster and accurate processing.' },
                { title: 'Client-Centric', desc: 'Your growth is our priority. We offer personalized solutions for every client.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              alt="Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <Associates />

      {/* CTA Banner */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-green/10 -z-10" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to streamline your finances?</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses that trust ARYA FINTECH for their accounting and financial needs. Let's build your financial future together.
            </p>
            <Link to="/inquiry" className="btn-green text-xl px-12 py-5 inline-block">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
