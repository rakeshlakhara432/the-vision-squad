import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, Clock, MessageSquare } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Get in <span className="text-brand-green">Touch</span></h1>
          <p className="text-gray-600 text-lg">
            Have questions about our services? Our team of experts is ready to assist you with your financial and taxation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-accent p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-8 text-brand-dark">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl text-brand-green shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Call Us</div>
                    <div className="font-bold text-brand-dark">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl text-brand-green shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Email Us</div>
                    <div className="font-bold text-brand-dark">contact@thevisionsquad.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl text-brand-green shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Visit Us</div>
                    <div className="font-bold text-brand-dark">123, Financial Hub, New Delhi, India</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl text-brand-green shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Working Hours</div>
                    <div className="font-bold text-brand-dark">Mon - Sat: 10:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark p-8 rounded-3xl text-white">
              <MessageSquare className="text-brand-green mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Live Chat</h4>
              <p className="text-gray-400 text-sm mb-6">Need immediate assistance? Chat with our experts on WhatsApp.</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-green w-full text-center block"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-brand-green/10 w-20 h-20 rounded-full flex items-center justify-center text-brand-green mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-brand-dark">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="btn-green px-8"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 00000 00000"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-dark">Subject</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors"
                      >
                        <option>General Inquiry</option>
                        <option>Audit Services</option>
                        <option>GST Compliance</option>
                        <option>Loan Advisory</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help you?"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="btn-green w-full py-4 text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 font-bold">Google Maps Integration Placeholder</div>
        </div>
      </section>
    </div>
  );
}
