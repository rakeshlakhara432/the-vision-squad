import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-brand-dark">
              Your Trusted <span className="text-brand-green">Financial</span> Partner Since 2010
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              THE VISION SQUAD is a premier Chartered Accountant firm dedicated to providing top-notch financial, tax, and audit services. We believe in building long-term relationships based on trust, integrity, and professional excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="text-3xl font-bold text-brand-green mb-1">500+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Clients Served</div>
              </div>
              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="text-3xl font-bold text-brand-green mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Years Experience</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses and individuals with expert financial guidance, ensuring compliance and fostering sustainable growth through innovative and ethical accounting practices.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and sought-after financial consultancy firm, recognized for our commitment to excellence, client success, and contribution to the financial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Our Values</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-brand-dark">Built on Trust & Integrity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Professionalism', desc: 'We maintain the highest standards of professional conduct in all our dealings.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for excellence in every audit, filing, and consultation we perform.' },
              { icon: Users, title: 'Client Success', desc: 'Your success is our success. We are committed to helping you achieve your goals.' }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-brand-green mb-6">
                  <value.icon size={48} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-dark">{value.title}</h4>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
