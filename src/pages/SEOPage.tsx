import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Globe, Smartphone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

export default function SEOPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Map SEO slugs to products
  const seoMap: Record<string, string> = {
    'websites-for-architects': 'architect-portfolio',
    'websites-for-pest-control': 'pest-intelligence',
    'ecommerce-for-clothing-brands': 'vastra-ecommerce'
  };

  const productSlug = slug ? seoMap[slug] : null;
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-8 border border-black/5 dark:border-white/10"
          >
            <Sparkles size={16} className="text-black dark:text-white" />
            <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Industry Specialized Solutions</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-black dark:text-white mb-10 leading-[0.85]">
            The Best {product.category} for <br /> <span className="text-black/40 dark:text-white/40 italic serif">{product.name.split(' ').slice(-2).join(' ')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed">
            Looking for a professional digital solution? Our {product.name} is specifically engineered to help businesses in your industry scale faster and reach more customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to={`/products/${product.slug}`} className="bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 shadow-2xl shadow-black/10 dark:shadow-white/10">
              <span>View Full Details</span>
              <ArrowRight size={24} />
            </Link>
            <a href={product.demoLink} target="_blank" rel="noreferrer" className="bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95">
              Live Demo
            </a>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-10 leading-[1.1]">Engineered for Your Growth</h3>
            <div className="space-y-8">
              {[
                { icon: <Zap />, title: 'Industry-Specific Design', desc: 'Every pixel is crafted with your specific business needs in mind.' },
                { icon: <Shield />, title: 'Conversion Optimized', desc: 'Built to turn visitors into paying customers with strategic CTAs.' },
                { icon: <Globe />, title: 'SEO Ready', desc: 'Rank higher on Google with our pre-optimized page structures.' },
                { icon: <Smartphone />, title: 'Mobile First', desc: 'Ensures a flawless experience on all devices, from phones to desktops.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-black/60 dark:text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-black/20 dark:shadow-white/5 border border-black/5 dark:border-white/10 group">
              <img 
                src={product.screenshot} 
                alt={product.name} 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 rounded-[3rem] p-16 md:p-24 text-center shadow-inner">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight">Ready to launch your <br /> <span className="text-black/40 dark:text-white/40">{product.name}?</span></h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the digital revolution. Request a setup today and get your business online in record time with our premium industry solutions.
          </p>
          <div className="max-w-2xl mx-auto">
            <InquiryForm productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
