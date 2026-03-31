import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, HardHat, ShoppingCart, Cpu, Layout, Users, 
  Target, Search, Bell, TrendingUp, Smartphone, Activity, MessageCircle, Zap 
} from 'lucide-react';

interface IndustriesSectionProps {
  wordIndex: number;
  words: any[];
}

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

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ wordIndex, words }) => {
  return (
    <section id="industries" className="section-padding bg-zinc-50 dark:bg-[#030303] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Building2 size={12} />
              <span>Industry Expertise</span>
            </motion.div>
            <h2 className="mb-8">
              How We Transform <br />
              <span className="text-zinc-400 dark:text-zinc-600">Businesses.</span>
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-12">
              We build systems that help businesses automate operations, analyze data, and grow faster through digital platforms.
            </p>

            <div className="space-y-4">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                      <ind.icon size={24} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <h4 className="text-xl font-bold tracking-tight">{ind.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Dynamic Business Software Visual - Wings Growth Engine */}
            <div className="relative z-10 aspect-square rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* App Header */}
              <div className="h-12 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-gray-50/50 dark:bg-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Cpu size={12} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Wings Growth Engine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-6 bg-black/5 dark:bg-white/5 rounded-full flex items-center px-2">
                    <Search size={10} className="text-gray-300 dark:text-gray-600 mr-2" />
                    <div className="h-1 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20" />
                </div>
              </div>

              <div className="flex-grow flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-12 border-r border-black/5 dark:border-white/5 flex flex-col items-center py-6 space-y-6 bg-gray-50/30 dark:bg-white/[0.02]">
                  <Layout size={14} className="text-emerald-500" />
                  <Users size={14} className="text-gray-300 dark:text-gray-600" />
                  <Target size={14} className="text-gray-300 dark:text-gray-600" />
                  <Search size={14} className="text-gray-300 dark:text-gray-600" />
                  <Cpu size={14} className="text-gray-300 dark:text-gray-600" />
                  <div className="flex-grow" />
                  <Bell size={14} className="text-gray-300 dark:text-gray-600" />
                </div>

                {/* Main Dashboard Area */}
                <div className="flex-grow p-6 overflow-hidden flex flex-col space-y-4">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div 
                      animate={{ 
                        scale: wordIndex === 0 ? 1.05 : 1,
                        borderColor: wordIndex === 0 ? "rgba(16, 185, 129, 0.5)" : "rgba(16, 185, 129, 0.1)"
                      }}
                      className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Web Traffic</span>
                        <TrendingUp size={10} className="text-emerald-500" />
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">+42.5%</p>
                    </motion.div>
                    <motion.div 
                      animate={{ 
                        scale: wordIndex === 1 ? 1.05 : 1,
                        borderColor: wordIndex === 1 ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.1)"
                      }}
                      className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 uppercase">App Installs</span>
                        <Smartphone size={10} className="text-blue-500" />
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">1,284</p>
                    </motion.div>
                    <motion.div 
                      animate={{ 
                        scale: wordIndex === 3 ? 1.05 : 1,
                        borderColor: wordIndex === 3 ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.1)"
                      }}
                      className="p-3 rounded-2xl bg-purple-500/5 border border-purple-500/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8px] font-bold text-purple-600 dark:text-purple-400 uppercase">BI ROI</span>
                        <Activity size={10} className="text-purple-500" />
                      </div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">3.8x</p>
                    </motion.div>
                  </div>

                  {/* Main Chart: Growth Analytics */}
                  <div className="flex-grow p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-900 dark:text-white">
                          {words[wordIndex].label}
                        </span>
                        <span className="text-[8px] text-gray-400 dark:text-gray-500">Performance Metrics</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-[8px] font-bold">7D</div>
                        <div className="px-2 py-1 rounded bg-emerald-500 text-white text-[8px] font-bold">30D</div>
                      </div>
                    </div>
                    <div className="flex-grow flex items-end space-x-1.5 pt-2">
                      {[35, 55, 40, 75, 60, 95, 80, 100, 85, 110, 90, 120].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ 
                            height: `${(h/120)*100}%`,
                            backgroundColor: i === 11 ? (wordIndex === 0 ? "#10b981" : wordIndex === 1 ? "#3b82f6" : wordIndex === 2 ? "#a855f7" : "#f97316") : "rgba(16, 185, 129, 0.2)"
                          }}
                          transition={{ delay: i * 0.05, duration: 0.8 }}
                          className="flex-grow rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: CRM & Automation */}
                  <div className="grid grid-cols-2 gap-4 h-32">
                    {/* CRM List */}
                    <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 overflow-hidden">
                      <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase block mb-3">Recent Leads</span>
                      <div className="space-y-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5" />
                              <div className="h-1.5 w-12 bg-gray-200 dark:bg-white/10 rounded" />
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Automation Workflow */}
                    <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex flex-col">
                      <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase block mb-3">Active Workflows</span>
                      <div className="flex-grow flex flex-col justify-center space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                            <Zap size={10} />
                          </div>
                          <div className="flex-grow h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              animate={{ x: [-50, 100] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="h-full w-1/3 bg-purple-500"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <MessageCircle size={10} />
                          </div>
                          <div className="flex-grow h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              animate={{ x: [-50, 100] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              className="h-full w-1/4 bg-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating SEO Tracker Overlay */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 w-40 p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 z-20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-500">SEO Ranking</span>
                  <Search size={10} className="text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="h-1 w-12 bg-black/10 dark:bg-white/10 rounded" />
                    <span className="text-[10px] font-bold text-emerald-500">#1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-1 w-16 bg-black/10 dark:bg-white/10 rounded" />
                    <span className="text-[10px] font-bold text-emerald-500">#3</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -inset-10 bg-emerald-500/5 blur-[100px] -z-10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-black/[0.03] dark:border-white/[0.03] rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-black/[0.02] dark:border-white/[0.02] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
