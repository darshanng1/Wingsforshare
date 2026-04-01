import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, HardHat, ShoppingCart, Cpu, Layout, Users, 
  Target, Search, Bell, TrendingUp, Smartphone, Activity, MessageCircle, Zap 
} from 'lucide-react';

interface IndustriesSectionProps {}

const industries = [
  {
    icon: HardHat,
    name: 'Pest Control',
    desc: 'Field service automation, route tracking, customer CRM, and reporting dashboards.',
    tech: ['Business Automation', 'CRM System', 'Analytics Dashboard']
  },
  {
    icon: Building2,
    name: 'Real Estate',
    desc: 'Lead management, property portals, automated follow-ups, and virtual tour integrations.',
    tech: ['Lead Generation', 'Property Portal', 'Marketing Automation']
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    desc: 'High-conversion stores, inventory management, multi-channel selling, and customer loyalty.',
    tech: ['E-commerce Platform', 'Inventory Sync', 'Customer Analytics']
  }
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = () => {
  return (
    <section id="industries" className="section-padding bg-bg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-bold uppercase tracking-widest mb-6"
            >
              <Building2 size={14} />
              <span>Industry Expertise</span>
            </motion.div>
            <h2 className="mb-8 text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.2]">
              How We Transform <br />
              <span className="text-text-secondary text-[40px] md:text-[48px]">Businesses.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-text-secondary mb-12 leading-relaxed">
              We build systems that help businesses automate operations, analyze data, and grow faster through digital platforms.
            </p>

            <div className="space-y-6">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-premium group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-bg transition-all duration-500 group-hover:border-accent">
                      <ind.icon size={24} className="group-hover:text-bg transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <h4 className="text-[20px] font-bold tracking-tight text-text-primary">{ind.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary text-[14px] leading-relaxed mb-0">{ind.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            {/* Business Software Visual - Wings Growth Engine */}
            <div className="relative z-10 aspect-square rounded-[32px] bg-bg border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* App Header */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                    <Cpu size={16} className="text-bg" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Wings Growth Engine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 h-8 bg-white/5 rounded-full flex items-center px-3 border border-white/5">
                    <Search size={12} className="text-white/20 mr-2" />
                    <div className="h-1 w-16 bg-white/10 rounded" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30" />
                </div>
              </div>

              <div className="flex-grow flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-14 border-r border-white/5 flex flex-col items-center py-8 space-y-8 bg-white/[0.02]">
                  <Layout size={18} className="text-accent" />
                  <Users size={18} className="text-white/20" />
                  <Target size={18} className="text-white/20" />
                  <Search size={18} className="text-white/20" />
                  <Cpu size={18} className="text-white/20" />
                  <div className="flex-grow" />
                  <Bell size={18} className="text-white/20" />
                </div>

                {/* Main Dashboard Area */}
                <div className="flex-grow p-8 overflow-hidden flex flex-col space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-accent uppercase">Web Traffic</span>
                        <TrendingUp size={12} className="text-accent" />
                      </div>
                      <p className="text-lg font-bold text-text-primary">+42.5%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-blue-400 uppercase">App Installs</span>
                        <Smartphone size={12} className="text-blue-400" />
                      </div>
                      <p className="text-lg font-bold text-text-primary">1,284</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-bold text-purple-400 uppercase">BI ROI</span>
                        <Activity size={12} className="text-purple-400" />
                      </div>
                      <p className="text-lg font-bold text-text-primary">3.8x</p>
                    </div>
                  </div>

                  {/* Main Chart: Growth Analytics */}
                  <div className="flex-grow p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-text-primary">
                          Performance Metrics
                        </span>
                        <span className="text-[10px] text-text-secondary">Real-time Analytics</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-text-secondary">7D</div>
                        <div className="px-3 py-1 rounded-full bg-accent text-bg text-[10px] font-bold">30D</div>
                      </div>
                    </div>
                    <div className="flex-grow flex items-end space-x-2 pt-2">
                      {[35, 55, 40, 75, 60, 95, 80, 100, 85, 110, 90, 120].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ 
                            height: `${(h/120)*100}%`,
                            backgroundColor: i === 11 ? "#00FF9D" : "rgba(255, 255, 255, 0.05)"
                          }}
                          transition={{ delay: i * 0.05, duration: 0.8 }}
                          className="flex-grow rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating SEO Tracker Overlay */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 w-44 p-5 bg-bg border border-white/10 rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">SEO Ranking</span>
                  <Search size={14} className="text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-16 bg-white/5 rounded" />
                    <span className="text-[12px] font-bold text-accent">#1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-1.5 w-20 bg-white/5 rounded" />
                    <span className="text-[12px] font-bold text-accent">#3</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -inset-20 bg-accent/5 blur-[120px] -z-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
