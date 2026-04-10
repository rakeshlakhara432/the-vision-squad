import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">THE VISION SQUAD</span>
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] mt-1">Your Perfect Banking Partner</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium financial and accounting services for businesses that aim for growth. We combine traditional trust with modern efficiency.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-2 rounded-lg hover:bg-brand-green hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Book Consultation', path: '/inquiry' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-green transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Business Audit', path: '/services/audit' },
                { name: 'GST Compliance', path: '/services/gst' },
                { name: 'Loan & Finance', path: '/services/loan' },
                { name: 'Income Tax Filing', path: '/services' },
                { name: 'Company Registration', path: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-green transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="text-brand-green shrink-0 mt-1" />
                <span className="text-sm">123, Financial Hub, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span className="text-sm">contact@thevisionsquad.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} THE VISION SQUAD. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
