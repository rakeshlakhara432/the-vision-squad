import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MessageSquare, Shield, TrendingUp, FileText, Users, ChevronRight, Globe, Award, Briefcase, BarChart } from 'lucide-react';
import { auth, onAuthStateChanged } from './firebase';

// Pages (will be implemented in separate files or as components here for now)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Audit from './pages/Audit';
import GSTServices from './pages/GSTServices';
import LoanFinance from './pages/LoanFinance';
import Inquiry from './pages/Inquiry';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  if (!isAuthReady) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-brand-dark">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <div className="border-4 border-white px-4 py-2 leading-none mb-2">
            <span className="text-4xl font-black text-white">ARYA</span>
          </div>
          <span className="text-xl font-bold text-white tracking-widest uppercase">Fintech</span>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-brand-green selection:text-white">
        <Navbar user={user} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/audit" element={<Audit />} />
              <Route path="/services/gst" element={<GSTServices />} />
              <Route path="/services/loan" element={<LoanFinance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/dashboard" element={<Dashboard user={user} />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AIChat />
        
        {/* WhatsApp Float */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <MessageSquare className="text-white w-6 h-6" />
        </a>
      </div>
    </Router>
  );
}

