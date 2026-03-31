import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MessageSquare, Mail, MapPin, 
  Rocket, ShieldCheck, Zap, TrendingUp,
  ArrowRight, Globe, Cpu, BarChart3,
  CheckCircle2, Sparkles, Send, Plus, Minus,
  Search, MessageCircle, Clock, Award,
  ChevronRight, Layout, Smartphone
} from 'lucide-react';
import SEO from '../components/SEO';
import ProjectIntakeForm from '../components/ProjectIntakeForm';

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 dark:border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold tracking-tight group-hover:text-emerald-500 transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-emerald-500" />,
      title: 'Direct Consultation',
      value: '+91 86187 64541',
      desc: 'Mon-Sat, 9am - 7pm IST',
      link: 'tel:+918618764541',
      badge: 'Fastest Response',
      color: 'emerald'
    },
    {
      icon: <MessageSquare className="text-[#25D366]" />,
      title: 'WhatsApp Support',
      value: '+91 86187 64541',
      desc: 'Instant chat for quick queries',
      link: 'https://wa.me/918618764541',
      badge: '24/7 Available',
      color: 'green'
    },
    {
      icon: <Mail className="text-blue-500" />,
      title: 'Email Inquiry',
      value: 'info@wingsforshare.com',
      desc: 'Proposals & detailed quotes',
      link: 'mailto:info@wingsforshare.com',
      badge: 'Official Channel',
      color: 'blue'
    },
    {
      icon: <MapPin className="text-purple-500" />,
      title: 'Our Headquarters',
      value: 'Bangalore, India',
      desc: '15, A.K Max Layout, Kuduregere',
      link: '#',
      badge: 'Visit Us',
      color: 'purple'
    }
  ];

  const journeySteps = [
    {
      icon: <MessageCircle size={24} />,
      title: 'Discovery Call',
      desc: 'We discuss your vision, goals, and technical requirements in detail.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Strategy & Roadmap',
      desc: 'Our architects design a custom solution and a clear execution plan.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Development Phase',
      desc: 'Agile development with weekly updates and transparent progress tracking.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Launch & Scale',
      desc: 'Seamless deployment followed by continuous optimization and growth support.'
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A high-performance website typically takes 4-6 weeks, while complex mobile apps or BI systems can take 3-6 months. We provide a detailed timeline after our discovery call."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide comprehensive maintenance and support packages. We don't just launch and leave; we partner with you to ensure your digital systems continue to scale and perform optimally."
    },
    {
      question: "Can you help with SEO for my existing site?",
      answer: "Absolutely. We offer specialized SEO audits and growth strategies for existing platforms. We focus on technical SEO, content optimization, and high-quality backlink strategies to boost your rankings."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We are experts in React, Next.js, Node.js, React Native, and Flutter. For BI tools, we specialize in custom dashboard development, data warehousing, and advanced analytics integration."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden">
      <SEO 
        title="Contact Wings Technology – Custom Software & Growth Agency"
        description="Get in touch with Wings Technology for custom software development, high-performance web apps, and data-driven growth strategies. Let's scale your business together."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-10 border border-emerald-500/20"
              >
                <Sparkles size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Let's Build Something Extraordinary</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12"
              >
                LET'S <br />
                <span className="text-zinc-300 dark:text-zinc-800 italic serif">TALK.</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md lg:mb-12"
            >
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                Ready to transform your business with high-performance digital systems? Choose your preferred way to connect with our experts.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#030303] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=contact${i}`} alt="Team" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Experts Online Now</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
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
                    whileHover={{ y: -10 }}
                    className="group relative p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-all shadow-sm hover:shadow-2xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="inline-block px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[8px] font-bold uppercase tracking-widest mb-4">
                        {item.badge}
                      </span>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">{item.title}</h4>
                      <p className="text-lg font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">{item.value}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Why Partner With Us */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-zinc-900 dark:bg-zinc-900/50 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/20 transition-colors" />
                
                <h3 className="text-3xl font-bold mb-8 tracking-tight text-white">Why Partner With <br /> <span className="text-emerald-500">Wings Technology?</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { icon: <ShieldCheck className="text-emerald-500" />, title: 'Secure Scoping', desc: 'Confidential project analysis' },
                    { icon: <Zap className="text-emerald-500" />, title: 'Rapid Response', desc: 'Feedback within 24 hours' },
                    { icon: <TrendingUp className="text-emerald-500" />, title: 'Growth Focus', desc: 'Data-driven technical roadmap' },
                    { icon: <Globe className="text-emerald-500" />, title: 'Global Support', desc: 'Scaling businesses worldwide' }
                  ].map((badge, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="mt-1">{badge.icon}</div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">{badge.title}</h5>
                        <p className="text-xs text-zinc-400">{badge.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Project Intake Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50" />
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] p-10 shadow-2xl">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Start Your Project</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Fill out our premium intake form to give us a clear picture of your vision. Our technical team will review and get back to you with a tailored roadmap.
                  </p>
                </div>
                <ProjectIntakeForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Journey Section */}
      <section className="section-padding bg-white dark:bg-[#030303]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">YOUR PROJECT <br /> <span className="text-emerald-500">JOURNEY.</span></h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              From the first hello to a global launch, here is how we bring your vision to life with technical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 bg-zinc-50 dark:bg-zinc-900/30 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 group"
              >
                {idx < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-zinc-200 dark:bg-zinc-800 z-10" />
                )}
                <div className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <div className="absolute top-10 right-10 text-4xl font-black text-zinc-100 dark:text-zinc-800/50 -z-10">0{idx + 1}</div>
                <h4 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-zinc-50 dark:bg-[#050505]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">COMMON <br /> <span className="text-emerald-500">QUESTIONS.</span></h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-12">
                Everything you need to know about our process, technology, and how we help businesses scale.
              </p>
              <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Still have questions?</h4>
                    <p className="text-xs text-zinc-500">We're here to help you.</p>
                  </div>
                </div>
                <a href="mailto:info@wingsforshare.com" className="btn-primary w-full py-4 text-center">
                  Email Our Team
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-zinc-900/50 rounded-[3rem] p-10 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                {faqs.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-zinc-50 dark:bg-[#030303] border-t border-zinc-100 dark:border-zinc-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">READY TO <br /> <span className="text-emerald-500">LEVEL UP?</span></h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                Join 500+ successful businesses that scaled their operations using our custom digital systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <a href="tel:+918618764541" className="btn-primary px-10 py-5 text-center">
                Call Our Experts
              </a>
              <a href="https://wa.me/918618764541" target="_blank" rel="noopener noreferrer" className="btn-outline px-10 py-5 text-center flex items-center justify-center gap-2">
                <MessageSquare size={20} />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
