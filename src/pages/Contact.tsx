import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, MessageSquare, Mail, MapPin, 
  Clock, CheckCircle, Rocket, Globe,
  ShieldCheck, Zap, TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';
import ConsultationForm from '../components/ConsultationForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-emerald-500" />,
      title: 'Call Us Directly',
      value: '+91 86187 64541',
      desc: 'Available Mon-Sat, 9am - 7pm IST',
      link: 'tel:+918618764541'
    },
    {
      icon: <MessageSquare className="text-[#25D366]" />,
      title: 'WhatsApp Support',
      value: '+91 86187 64541',
      desc: 'Instant response for quick queries',
      link: 'https://wa.me/918618764541'
    },
    {
      icon: <Mail className="text-blue-500" />,
      title: 'Email Inquiry',
      value: 'darshanng@gmail.com',
      desc: 'Detailed project proposals & quotes',
      link: 'mailto:darshanng@gmail.com'
    },
    {
      icon: <MapPin className="text-purple-500" />,
      title: 'Our Location',
      value: 'Bangalore, India',
      desc: 'Global delivery & support',
      link: '#'
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <SEO 
        title="Contact WingsForShare – Custom Software & Digital Solutions"
        description="Get in touch with WingsForShare for custom software development, web development, and business intelligence solutions. We're here to help your business grow."
        keywords="contact wingsforshare, software development inquiry, business consulting contact, digital solutions support"
        canonical="https://wingsforshare.com/contact"
      />

      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-6 border border-black/5 dark:border-white/10"
          >
            <Rocket size={16} className="text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Let's Build Your Digital Future</span>
          </motion.div>
          
          <h1 className="mb-6 tracking-tighter">Get in <span className="text-black/40 dark:text-white/40 italic serif">Touch</span></h1>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project or have questions about our services? Choose your preferred way to connect with our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-black/[0.02] dark:bg-white/[0.02] rounded-[2rem] border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">{item.title}</h4>
                  <p className="text-lg font-bold text-black dark:text-white mb-1">{item.value}</p>
                  <p className="text-xs text-black/60 dark:text-white/60">{item.desc}</p>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="p-10 bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Why Partner With Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: <ShieldCheck size={18} />, text: 'Secure & Confidential Project Scoping' },
                  { icon: <Zap size={18} />, text: 'Rapid Response Within 24 Hours' },
                  { icon: <TrendingUp size={18} />, text: 'Growth-Focused Technical Roadmap' },
                  { icon: <Globe size={18} />, text: 'Support for Global Business Scaling' }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="text-emerald-500">{badge.icon}</div>
                    <span className="text-sm font-medium opacity-90">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="mb-4">Send a Message</h3>
              <p className="text-black/60 dark:text-white/60">
                Fill out the form below and our technical team will review your requirements and get back to you with a tailored proposal.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
