import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Hello! I am VisionAI, your financial assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are VisionAI, a helpful assistant for 'The Vision Squad', a premium Chartered Accountant firm. You provide general information about financial services like GST, Income Tax, Audits, and Company Registration. Always be professional, polite, and encourage users to contact the firm for specific advice. Keep responses concise."
        }
      });

      const botMsg = response.text || "I'm sorry, I couldn't process that. Please contact our experts.";
      setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl z-50 flex flex-col shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="bg-brand-orange p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-brand-orange" />
                </div>
                <span className="font-bold text-white">AryaAI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-orange text-white rounded-tr-none' 
                      : 'bg-white/10 text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="animate-spin text-brand-orange" size={18} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-brand-dark/50">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-orange hover:scale-110 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
