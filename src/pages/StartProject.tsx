import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import IntakeForm from '../components/IntakeForm';
import SEO from '../components/SEO';

export default function StartProject() {
  return (
    <div className="pt-20 pb-12">
      <SEO 
        title="Start Your Project – Custom Software Development & Digital Solutions"
        description="Ready to scale your business? Start your project with WingsForShare. Fill out our intake form for custom software development, business automation, or SEO services."
        keywords="start project, custom software development, business automation, SEO services, digital solutions, WingsForShare"
        canonical="https://wingsforshare.com/start-project"
      />
      {/* Hero Section */}
      <section className="relative py-8 md:py-32 overflow-hidden hero-text">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-8 border border-emerald-500/20"
            >
              <Rocket size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Let's Build Something Great</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="tracking-tighter mb-8"
            >
              Start Your <br />
              <span className="text-black/40 dark:text-white/40">Digital Journey</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-black/60 dark:text-white/60 mx-auto font-medium"
            >
              Fill out our comprehensive project intake form to help us understand your vision. 
              Our experts will provide a tailored strategy and quote within 24 hours.
            </motion.p>
          </div>

          <IntakeForm />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="tracking-tight">Confidentiality First</h3>
              <p className="text-black/60 dark:text-white/60">
                Your ideas are safe with us. We sign NDAs and maintain strict data privacy protocols for all project inquiries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="tracking-tight">Rapid Response</h3>
              <p className="text-black/60 dark:text-white/60">
                Time is money. We guarantee a detailed project brief and initial consultation within one business day.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="tracking-tight">Global Expertise</h3>
              <p className="text-black/60 dark:text-white/60">
                From local startups to global enterprises, we've delivered successful digital solutions across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
