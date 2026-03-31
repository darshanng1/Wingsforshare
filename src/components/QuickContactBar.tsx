import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Mail, ArrowRight } from 'lucide-react';

export default function QuickContactBar() {
  const contacts = [
    {
      icon: <Phone size={20} />,
      label: 'Call Us',
      value: '+91 86187 64541',
      link: 'tel:+918618764541',
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: <MessageSquare size={20} />,
      label: 'WhatsApp',
      value: '+91 86187 64541',
      link: 'https://wa.me/918618764541',
      color: 'bg-[#25D366]/10 text-[#25D366]'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'info@wingsforshare.com',
      link: 'mailto:info@wingsforshare.com',
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <div className="w-full bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 lg:gap-16">
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${contact.color}`}>
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{contact.label}</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-4"
          >
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Response Time</p>
              <p className="text-sm font-bold text-emerald-500 tracking-tight">Under 15 Minutes</p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
