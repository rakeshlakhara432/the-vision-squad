import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Calendar, User, Mail, Phone, Briefcase } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Audit',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'Business Audit', message: '', preferredDate: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'inquiries');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-brand-accent/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Book a <span className="text-brand-green">Consultation</span></h1>
          <p className="text-gray-600 text-lg">
            Take the first step towards financial excellence. Fill out the form below and our experts will get in touch with you.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="bg-brand-green/10 w-24 h-24 rounded-full flex items-center justify-center text-brand-green mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-brand-dark">Inquiry Received!</h3>
              <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
                Thank you for choosing THE VISION SQUAD. One of our senior consultants will contact you shortly to confirm your appointment.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="btn-green px-10 py-4 text-lg"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-brand-dark flex items-center space-x-2">
                    <User size={16} className="text-brand-green" />
                    <span>Full Name</span>
                  </label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-brand-dark flex items-center space-x-2">
                    <Mail size={16} className="text-brand-green" />
                    <span>Email Address</span>
                  </label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-brand-dark flex items-center space-x-2">
                    <Phone size={16} className="text-brand-green" />
                    <span>Phone Number</span>
                  </label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-brand-dark flex items-center space-x-2">
                    <Briefcase size={16} className="text-brand-green" />
                    <span>Service Interested In</span>
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors appearance-none"
                  >
                    <option>Business Audit</option>
                    <option>GST Compliance</option>
                    <option>Loan & Finance</option>
                    <option>Income Tax Filing</option>
                    <option>Company Registration</option>
                    <option>Financial Advisory</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-brand-dark flex items-center space-x-2">
                  <Calendar size={16} className="text-brand-green" />
                  <span>Preferred Date for Consultation</span>
                </label>
                <input 
                  required
                  type="date" 
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-brand-dark">Additional Details (Optional)</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us more about your requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className="btn-green w-full py-5 text-xl flex items-center justify-center space-x-3 disabled:opacity-50 shadow-lg shadow-brand-green/20"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={24} />}
                <span>{isSubmitting ? 'Submitting...' : 'Book My Consultation'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
