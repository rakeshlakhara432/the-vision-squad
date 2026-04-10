import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Shield, FileText, Landmark, Briefcase, UserPlus, TrendingUp } from 'lucide-react';
import { auth, signInWithGoogle, logout } from '../firebase';

export default function Navbar({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Announcement', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Business Audit', path: '/services/audit', icon: Shield },
    { name: 'GST Services', path: '/services/gst', icon: FileText },
    { name: 'Loan & Finance', path: '/services/loan', icon: Landmark },
    { name: 'Company Registration', path: '/services', icon: UserPlus },
    { name: 'Tax Filing', path: '/services', icon: Briefcase },
    { name: 'Financial Advisory', path: '/services', icon: TrendingUp },
  ];

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Login error:', error);
      if (error.code === 'auth/popup-blocked') {
        alert('The login popup was blocked by your browser. Please allow popups for this site and try again.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.warn('Popup request cancelled');
      } else if (error.code === 'auth/popup-closed-by-user') {
        // User closed the popup
      } else {
        alert('An error occurred during login. Please try again.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="flex flex-col items-center">
            <div className="border-2 border-brand-dark px-2 py-1 leading-none group-hover:border-brand-green transition-colors">
              <span className="text-xl font-black tracking-tighter text-brand-dark group-hover:text-brand-green transition-colors">ARYA</span>
            </div>
            <span className="text-[10px] font-bold text-brand-dark mt-0.5">FINTECH</span>
          </div>
          <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block" />
          <div className="hidden sm:block">
            <div className="text-[10px] font-bold text-brand-dark leading-tight uppercase">The Vision Squad</div>
            <div className="text-[10px] font-medium text-gray-500 leading-tight">Banking Partner</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-semibold transition-colors hover:text-brand-green ${location.pathname === '/' ? 'text-brand-green' : 'text-gray-600'}`}>Home</Link>
          <Link to="/about" className={`text-sm font-semibold transition-colors hover:text-brand-green ${location.pathname === '/about' ? 'text-brand-green' : 'text-gray-600'}`}>About Us</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center space-x-1 text-sm font-semibold transition-colors hover:text-brand-green ${location.pathname.startsWith('/services') ? 'text-brand-green' : 'text-gray-600'}`}>
              <span>Services</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-4 w-64 pt-4"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-brand-accent transition-colors group/item"
                      >
                        <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white transition-colors">
                          <link.icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-brand-green">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" className={`text-sm font-semibold transition-colors hover:text-brand-green ${location.pathname === '/blog' ? 'text-brand-green' : 'text-gray-600'}`}>Announcement</Link>
          <Link to="/contact" className={`text-sm font-semibold transition-colors hover:text-brand-green ${location.pathname === '/contact' ? 'text-brand-green' : 'text-gray-600'}`}>Contact</Link>
          
          <div className="flex items-center space-x-4 ml-4">
            {user ? (
              <Link to="/dashboard" className="btn-green text-xs">Dashboard</Link>
            ) : (
              <button 
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="btn-green text-xs disabled:opacity-50"
              >
                {isLoggingIn ? 'Connecting...' : 'Get Consultation'}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-brand-green"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Our Services</p>
                <div className="grid grid-cols-1 gap-3">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-sm font-medium text-gray-600"
                    >
                      <link.icon size={16} className="text-brand-green" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {!user && (
                <button 
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="btn-green w-full disabled:opacity-50 mt-4"
                >
                  {isLoggingIn ? 'Connecting...' : 'Get Consultation'}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
