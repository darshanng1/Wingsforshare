import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, User, ArrowRight, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [loginType, setLoginType] = useState<'admin' | 'user'>('user');

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-32 pb-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#111] rounded-[2.5rem] border border-black/5 dark:border-white/10 p-10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white dark:text-black font-bold text-2xl">W</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-white mb-2">Welcome Back</h1>
            <p className="text-black/40 dark:text-white/40 text-sm font-medium uppercase tracking-widest">Access your dashboard</p>
          </div>

          {/* Type Selector */}
          <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-2xl mb-8">
            <button
              onClick={() => setLoginType('user')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all ${
                loginType === 'user' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg' 
                  : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'
              }`}
            >
              <User size={16} />
              <span>User Login</span>
            </button>
            <button
              onClick={() => setLoginType('admin')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all ${
                loginType === 'admin' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg' 
                  : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'
              }`}
            >
              <Shield size={16} />
              <span>Admin Login</span>
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
                />
              </div>
            </div>

            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg hover:opacity-80 transition-all flex items-center justify-center space-x-2 shadow-xl">
              <span>Login as {loginType === 'admin' ? 'Admin' : 'User'}</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-black/40 dark:text-white/40 font-medium">
              Don't have an account? <Link to="/payment" className="text-black dark:text-white font-bold hover:underline">Contact Sales</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
