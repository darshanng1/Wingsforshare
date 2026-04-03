import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, query, where, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { 
  LayoutDashboard, Users, Settings, LogOut, ShieldCheck, Zap, 
  BarChart3, Globe, Clock, CheckCircle2, AlertCircle, 
  CreditCard, MessageSquare, Plus, Send, Activity, Rocket,
  Search, Gauge, TrendingUp
} from 'lucide-react';

// --- Client Dashboard Components ---

const ClientDashboard = ({ user, profile }: { user: any, profile: any }) => {
  const [performance, setPerformance] = useState<any>(null);
  const [project, setProject] = useState<any>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [newRequest, setNewRequest] = useState({ type: 'Website Change', subject: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch Performance Data
    const perfQuery = query(collection(db, 'performance'), where('clientId', '==', user.uid));
    const unsubPerf = onSnapshot(perfQuery, (snapshot) => {
      if (!snapshot.empty) setPerformance(snapshot.docs[0].data());
    });

    // Fetch Project Data
    const projQuery = query(collection(db, 'projects'), where('clientId', '==', user.uid));
    const unsubProj = onSnapshot(projQuery, (snapshot) => {
      if (!snapshot.empty) setProject(snapshot.docs[0].data());
    });

    // Fetch Requests
    const reqQuery = query(collection(db, 'requests'), where('clientId', '==', user.uid));
    const unsubReq = onSnapshot(reqQuery, (snapshot) => {
      setRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch Payments
    const payQuery = query(collection(db, 'payments'), where('clientId', '==', user.uid));
    const unsubPay = onSnapshot(payQuery, (snapshot) => {
      setPayments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubPerf(); unsubProj(); unsubReq(); unsubPay(); };
  }, [user.uid]);

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'requests'), {
        ...newRequest,
        clientId: user.uid,
        status: 'Open',
        createdAt: serverTimestamp()
      });
      setNewRequest({ type: 'Website Change', subject: '', description: '' });
    } catch (err) {
      console.error("Error submitting request:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white mb-2">
            Welcome, <span className="text-black/40 dark:text-white/40">{profile?.companyName || user.email?.split('@')[0]}</span>
          </h1>
          <p className="text-black/60 dark:text-white/60 font-medium">Monitoring your digital growth systems.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
            <Activity size={14} />
            <span>Systems Active</span>
          </div>
        </div>
      </header>

      {/* Grid 1: Performance & Marketing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Website Performance */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
              <Globe size={20} className="text-blue-500" />
              Website Performance
            </h2>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              performance?.websiteStatus === 'Live' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
            }`}>
              {performance?.websiteStatus || 'Live'}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Page Speed</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-black dark:text-white">{performance?.pageSpeed || 98}</span>
                <span className="text-xs text-emerald-500 font-bold">ms</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Monthly Visitors</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-black dark:text-white">{performance?.monthlyVisitors?.toLocaleString() || '1.2k'}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">SEO Health</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-black dark:text-white">{performance?.seoHealth || 94}</span>
                <span className="text-xs text-emerald-500 font-bold">%</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Leads Generated</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-black dark:text-white">{performance?.leadsGenerated || 42}</span>
                <TrendingUp size={14} className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Stats */}
        <div className="bg-black dark:bg-white p-8 rounded-[2.5rem] text-white dark:text-black shadow-2xl">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp size={20} />
            <h2 className="text-xl font-bold">Marketing Growth</h2>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Traffic Growth</p>
              <p className="text-4xl font-bold tracking-tighter">{performance?.trafficGrowth || '+24.8%'}</p>
            </div>
            <div className="pt-6 border-t border-white/10 dark:border-black/10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-3">Top Keywords</p>
              <div className="flex flex-wrap gap-2">
                {['Business Tech', 'Growth Systems', 'Automation'].map(kw => (
                  <span key={kw} className="px-3 py-1 bg-white/10 dark:bg-black/10 rounded-lg text-[10px] font-bold">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid 2: Project Progress & Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Progress */}
        <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
              <Rocket size={20} className="text-blue-500" />
              Project Progress
            </h2>
            <div className="flex items-center gap-2 text-xs font-bold text-black/40 dark:text-white/40">
              <Clock size={14} />
              <span>Est. Launch: {project?.deploymentTimeline || 'April 2026'}</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-black dark:text-white">Design Phase</span>
                <span className="text-black/40 dark:text-white/40">{project?.designStatus || 85}%</span>
              </div>
              <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${project?.designStatus || 85}%` }}
                  className="h-full bg-black dark:bg-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-black dark:text-white">Development</span>
                <span className="text-black/40 dark:text-white/40">{project?.devStatus || 40}%</span>
              </div>
              <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${project?.devStatus || 40}%` }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-black/5 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-black dark:text-white">Current Stage</p>
                  <p className="text-xs text-black/40 dark:text-white/40">{project?.stage || 'Frontend Implementation'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Requests */}
        <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl">
          <h2 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-2">
            <MessageSquare size={20} className="text-purple-500" />
            Support & Requests
          </h2>
          <form onSubmit={handleSubmitRequest} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <select 
                value={newRequest.type}
                onChange={(e) => setNewRequest({...newRequest, type: e.target.value})}
                className="bg-black/5 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-bold text-black dark:text-white outline-none"
              >
                <option>Website Change</option>
                <option>Marketing</option>
                <option>Feature</option>
                <option>Bug</option>
              </select>
              <input 
                type="text"
                placeholder="Subject"
                value={newRequest.subject}
                onChange={(e) => setNewRequest({...newRequest, subject: e.target.value})}
                required
                className="bg-black/5 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-bold text-black dark:text-white outline-none"
              />
            </div>
            <textarea 
              placeholder="Describe your request..."
              value={newRequest.description}
              onChange={(e) => setNewRequest({...newRequest, description: e.target.value})}
              required
              rows={3}
              className="w-full bg-black/5 dark:bg-white/5 border-0 rounded-xl px-4 py-3 text-sm font-bold text-black dark:text-white outline-none resize-none"
            />
            <button 
              disabled={isSubmitting}
              className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:opacity-80 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <span>Submit Request</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Billing & Payments */}
      <div className="bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-black/5 dark:border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <CreditCard size={20} className="text-emerald-500" />
            Billing & Payments
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Status</p>
              <p className="text-sm font-bold text-emerald-500">Active Subscription</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/5 dark:border-white/10">
                  <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Invoice</th>
                  <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Date</th>
                  <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Amount</th>
                  <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/10">
                {payments.length > 0 ? payments.map((pay) => (
                  <tr key={pay.id}>
                    <td className="py-4 text-sm font-bold text-black dark:text-white">{pay.description}</td>
                    <td className="py-4 text-sm text-black/40 dark:text-white/40">{pay.date}</td>
                    <td className="py-4 text-sm font-bold text-black dark:text-white">₹{pay.amount?.toLocaleString()}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                        pay.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {pay.status}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td className="py-8 text-sm text-black/40 dark:text-white/40" colSpan={4}>No payment history found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Admin Dashboard Components ---

const AdminDashboard = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [allRequests, setAllRequests] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'clients' | 'requests'>('clients');

  useEffect(() => {
    const unsubClients = onSnapshot(query(collection(db, 'users'), where('role', '==', 'client')), (snapshot) => {
      setClients(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const unsubReq = onSnapshot(collection(db, 'requests'), (snapshot) => {
      setAllRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubClients(); unsubReq(); };
  }, []);

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white mb-2">Agency <span className="text-black/40 dark:text-white/40">Command Center</span></h1>
          <p className="text-black/60 dark:text-white/60 font-medium">Managing WingsForShare digital growth operations.</p>
        </div>
        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-xl">
          <Plus size={18} />
          <span>Add New Client</span>
        </button>
      </header>

      {/* Admin Tabs */}
      <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-2xl w-fit">
        <button 
          onClick={() => setActiveTab('clients')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'clients' ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg' : 'text-black/40 dark:text-white/40'}`}
        >
          Clients
        </button>
        <button 
          onClick={() => setActiveTab('requests')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'requests' ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg' : 'text-black/40 dark:text-white/40'}`}
        >
          Requests ({allRequests.filter(r => r.status === 'Open').length})
        </button>
      </div>

      {activeTab === 'clients' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="bg-white dark:bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl group hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-black dark:text-white font-bold text-xl">
                  {client.companyName?.[0] || client.username?.[0]}
                </div>
                <button className="text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors">
                  <Settings size={20} />
                </button>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">{client.companyName || client.username}</h3>
              <p className="text-sm text-black/40 dark:text-white/40 mb-6">{client.email}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/10">
                <button className="flex-1 py-3 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                  View Systems
                </button>
                <button className="flex-1 py-3 bg-black/5 dark:bg-white/5 rounded-xl text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                  Update Progress
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              {allRequests.map((req) => (
                <div key={req.id} className="flex items-center justify-between py-6 border-b border-black/5 dark:border-white/10 last:border-0">
                  <div className="flex items-center space-x-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      req.status === 'Open' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{req.type}</span>
                        <span className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
                        <span className="text-xs font-bold text-blue-500">Client ID: {req.clientId?.slice(0, 6)}</span>
                      </div>
                      <p className="text-lg font-bold text-black dark:text-white">{req.subject}</p>
                      <p className="text-sm text-black/60 dark:text-white/60">{req.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-xs shadow-lg">
                      Respond
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Dashboard Layout ---

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#050505] flex transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-[#0a0a0a] border-r border-black/5 dark:border-white/10 flex flex-col p-8 fixed h-full z-20">
        <div className="mb-12">
          <Logo />
          <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mt-2 block">Command Center</span>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold shadow-lg">
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </button>
          {profile?.role === 'admin' ? (
            <>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
                <Users size={20} />
                <span>Clients</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
                <BarChart3 size={20} />
                <span>Reports</span>
              </button>
            </>
          ) : (
            <>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
                <Globe size={20} />
                <span>My Systems</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
                <CreditCard size={20} />
                <span>Billing</span>
              </button>
            </>
          )}
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/10">
          <div className="flex items-center space-x-3 mb-6 px-2">
            <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-black dark:text-white font-bold">
              {auth.currentUser?.email?.[0].toUpperCase()}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-black dark:text-white truncate">{auth.currentUser?.email}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{profile?.role}</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/5 font-bold transition-all"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={profile?.role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {profile?.role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <ClientDashboard user={auth.currentUser} profile={profile} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
