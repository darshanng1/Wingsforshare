import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, User, ArrowRight, Lock, Mail, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function Login() {
  const [loginType, setLoginType] = useState<'admin' | 'client'>('client');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Map username to email for Firebase Auth
    const email = username.includes('@') ? username : `${username}@wingsforshare.com`;

    try {
      // Attempt Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check role in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        if (role !== loginType) {
          throw new Error(`Unauthorized: This account is not registered as an ${loginType}.`);
        }
      }

      navigate('/dashboard');
    } catch (err: any) {
      console.error("Login error:", err);
      
      // Special case: Seed the specific admin account if it doesn't exist
      if (username === 'wings@1' && password === 'Googlepehai1@' && err.code === 'auth/user-not-found') {
        try {
          const newUser = await createUserWithEmailAndPassword(auth, email, password);
          await setDoc(doc(db, 'users', newUser.user.uid), {
            uid: newUser.user.uid,
            username: 'wings@1',
            email: email,
            role: 'admin',
            createdAt: new Date().toISOString()
          });
          navigate('/dashboard');
          return;
        } catch (seedErr: any) {
          setError('Failed to initialize admin account.');
        }
      } else {
        setError(err.message || 'Invalid credentials. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

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
              onClick={() => setLoginType('client')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all ${
                loginType === 'client' 
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg' 
                  : 'text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'
              }`}
            >
              <User size={16} />
              <span>Client Login</span>
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

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center space-x-3 text-red-500 text-sm font-bold">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 ml-4">Username or Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20 dark:text-white/20" size={18} />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="wings@1"
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-black dark:text-white font-medium"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold text-lg hover:opacity-80 transition-all flex items-center justify-center space-x-2 shadow-xl disabled:opacity-50"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white dark:border-black"></div>
              ) : (
                <>
                  <span>Login as {loginType === 'admin' ? 'Admin' : 'Client'}</span>
                  <ArrowRight size={20} />
                </>
              )}
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
