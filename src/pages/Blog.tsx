import { motion } from 'framer-motion';
import { Calendar, User, Tag, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'New GST Regulations for 2026: What You Need to Know',
    excerpt: 'The government has introduced several changes to GST filing procedures. Here is a summary of the key updates...',
    author: 'CA Rajesh Sharma',
    date: 'April 05, 2026',
    category: 'Tax Updates',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Strategic Tax Planning for High-Net-Worth Individuals',
    excerpt: 'Wealth management requires more than just saving. Discover strategic tax planning techniques to preserve your assets...',
    author: 'CA Priya Mehta',
    date: 'March 28, 2026',
    category: 'Wealth Management',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Starting a Startup in India: A Complete Compliance Guide',
    excerpt: 'From ROC registration to tax exemptions, here is everything a founder needs to know about legal compliance...',
    author: 'CA Amit Verma',
    date: 'March 15, 2026',
    category: 'Business Guide',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial <span className="text-brand-orange">Insights</span></h1>
            <p className="text-gray-400 text-lg">Stay updated with the latest subsidy laws, business guides, and financial strategies from our experts.</p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-12 focus:outline-none focus:border-brand-orange transition-colors"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 rounded-[32px] overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-2 text-brand-orange font-bold text-sm">
              <span>Read Full Article</span>
              <ChevronRight size={16} />
            </div>
          </motion.article>
        ))}
      </section>

      {/* Newsletter */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to our Newsletter</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Get monthly subsidy updates and financial tips delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button className="btn-orange px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
