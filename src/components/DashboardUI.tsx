import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, ArrowUpRight } from 'lucide-react';

export default function DashboardUI() {
  return (
    <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card rounded-[2.5rem] p-8 relative z-10 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">Revenue Growth</h4>
            <p className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white">$124,500.00</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <TrendingUp size={24} />
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="h-48 flex items-end gap-2 mb-8">
          {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
              className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500 rounded-t-lg"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <Users size={16} className="text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">New Leads</span>
            </div>
            <p className="text-xl font-bold text-zinc-900 dark:text-white">+1,240</p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign size={16} className="text-purple-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Conversion</span>
            </div>
            <p className="text-xl font-bold text-zinc-900 dark:text-white">12.5%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl z-20 shadow-2xl hidden md:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <ArrowUpRight size={16} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">ROI Growth</p>
            <p className="text-sm font-bold text-emerald-500">+320%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl z-20 shadow-2xl hidden md:block"
      >
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="User" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Active Clients</p>
        </div>
      </motion.div>

      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[120px] -z-10 rounded-full" />
    </div>
  );
}
