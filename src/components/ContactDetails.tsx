import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Globe } from 'lucide-react';

export default function ContactDetails() {
  const details = [
    {
      icon: <Mail className="text-emerald-500" />,
      label: 'Email',
      value: 'info@wingsforshare.com',
      link: 'mailto:info@wingsforshare.com'
    },
    {
      icon: <Phone className="text-emerald-500" />,
      label: 'Phone',
      value: '+91 86187 64541',
      link: 'tel:+918618764541'
    },
    {
      icon: <MessageSquare className="text-emerald-500" />,
      label: 'WhatsApp',
      value: '+91 86187 64541',
      link: 'https://wa.me/918618764541'
    },
    {
      icon: <MapPin className="text-emerald-500" />,
      label: 'Address',
      value: '15, A.K Max Layout, Kuduregere, Bangalore - 562162',
      link: 'https://maps.google.com/?q=15,A.K+Max+Layout,Kuduregere,Bangalore'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-[#030303]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6 border border-emerald-500/20"
              >
                <Globe size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Global Presence</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">VISIT OUR <br /> <span className="text-emerald-500">HEADQUARTERS.</span></h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                We're located in the heart of Bangalore's tech hub. Come by for a coffee and let's discuss your next big project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {details.map((detail, i) => (
                <motion.a
                  key={i}
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center transition-all group-hover:bg-emerald-500 group-hover:text-white">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{detail.label}</p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight leading-relaxed">{detail.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.679313204917!2d77.4819!3d13.1193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23456789abcd%3A0x1234567890abcdef!2sKuduregere%2C%20Bangalore%2C%20Karnataka%20562162!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white dark:border-[#030303] rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
