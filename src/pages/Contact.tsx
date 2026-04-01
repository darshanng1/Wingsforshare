import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Star, 
  Zap, 
  Heart, 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ArrowRight, 
  Handshake, 
  MessageSquare, 
  Shield, 
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918618764541";
const PHONE_TEL    = "tel:+918618764541";
const EMAIL_MAILTO = "mailto:info@wingsforshare.com";

const TRUST_ITEMS = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Star,  value: "98%", label: "Satisfaction" },
  { icon: Zap,   value: "Fast", label: "Delivery" },
  { icon: Heart, value: "ROI",  label: "Focused" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 px-4 py-3.5 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 " +
    "shadow-sm transition-all duration-200 " +
    "focus:border-brand-400 focus:bg-white dark:focus:bg-zinc-800 focus:ring-4 focus:ring-brand-50 dark:focus:ring-brand-900/20 focus:outline-none";

  const labelBase = "block text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide mb-1.5";

  return (
    <section className="min-h-screen bg-zinc-50/30 dark:bg-zinc-950/30">
      {/* 1. HERO — Warm Welcome */}
      <div className="relative overflow-hidden bg-brand-50 dark:bg-brand-950 py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        {/* Soft decorative shapes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-brand-700/20 blur-[80px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-warm-500/8 blur-[80px]" 
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-white/10 backdrop-blur-sm border border-brand-200 dark:border-white/10 px-5 py-2 text-xs font-medium uppercase tracking-widest text-brand-700 dark:text-brand-200 mb-8"
          >
            <Handshake className="h-3.5 w-3.5" />
            WingsForShare
          </motion.span>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-brand-950 dark:text-white leading-[1.1] tracking-tight"
          >
            Let's Connect & Build
            <span className="block mt-2 bg-gradient-to-r from-warm-300 via-brand-300 to-warm-400 bg-clip-text text-transparent">
              Something Valuable
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            We're here to understand your business, your goals, and help you build systems that generate real results.
          </motion.p>

          {/* Human Touch Line */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-5 py-2.5"
          >
            <MessageSquare className="h-4 w-4 text-warm-500 dark:text-warm-400" />
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Tell us what you're looking for — we'll guide you step by step.
            </p>
          </motion.div>

          {/* Quick Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Talk on WhatsApp
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={PHONE_TEL}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-white dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/10 px-8 py-4 text-sm font-bold text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={EMAIL_MAILTO}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-white dark:bg-white/10 backdrop-blur-sm border border-zinc-200 dark:border-white/10 px-8 py-4 text-sm font-bold text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-white/15"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </motion.a>
          </motion.div>

          {/* Fast response hint */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xs text-zinc-500 dark:text-zinc-500"
          >
            Prefer quick response? <span className="text-warm-400 font-medium">WhatsApp is fastest</span> ⚡
          </motion.p>
        </div>
      </div>

      {/* 2. TRUST BAR */}
      <div className="border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {TRUST_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white leading-none">{item.value}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FORM + INFO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── FORM ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7" 
            id="form"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 p-8 sm:p-12">
              {/* Heading */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Share Your Requirement
                  </h2>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Fill the form below and our team will contact you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelBase}>
                    Your Name <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={inputBase}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Your Email <span className="text-brand-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Your Phone <span className="text-brand-500">*</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel" required
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className={labelBase}>
                    Select what you need
                  </label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="">Choose a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelBase}>
                    Tell us about your requirement…
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    placeholder="Example: I need a website / app / SEO for my business…"
                    className={inputBase + " resize-y"}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "loading"}
                  className={
                    "w-full flex items-center justify-center gap-3 rounded-2xl " +
                    "bg-brand-600 px-8 py-5 text-white font-bold text-lg " +
                    "shadow-xl shadow-brand-600/20 " +
                    "transition-all duration-200 " +
                    "hover:bg-brand-700 hover:shadow-brand-600/30 " +
                    "disabled:opacity-70 disabled:cursor-not-allowed"
                  }
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Start My Project
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>

                {/* Trust Line */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <Shield className="h-4 w-4 text-zinc-300 dark:text-zinc-700" />
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    No spam. No unnecessary calls. Only relevant communication.
                  </p>
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30 py-4 px-6"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        Request received! We'll reach out within 24 hours.
                      </p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-3 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 py-4 px-6"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                        Something went wrong. Please try again or WhatsApp us directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* ── CONTACT INFO SIDEBAR ── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 p-10">
              <div className="flex items-center gap-3 mb-10">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
                  <Phone className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Reach Us Directly
                </h2>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="group flex items-start gap-5">
                  <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                      Phone
                    </p>
                    <a href={PHONE_TEL} className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-semibold">
                      +91 8618764541
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-5">
                  <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                      Email
                    </p>
                    <a href={EMAIL_MAILTO} className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-semibold">
                      info@wingsforshare.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp — highlighted */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-5 p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 shadow-sm transition-all"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-green-600/20">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
                      WhatsApp
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-lg text-zinc-800 dark:text-zinc-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-bold">
                      Click to chat →
                    </a>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Usually replies within minutes</p>
                  </div>
                </motion.div>

                {/* Address */}
                <div className="group flex items-start gap-5">
                  <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                      Our Office
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                      15, A.K Max Layout, Kuduregere,
                      <br />
                      Bangalore – 562162
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 overflow-hidden h-72">
              <iframe
                title="WingsForShare Office Location"
                src="https://maps.google.com/maps?q=A.K+Max+Layout,+Kuduregere,+Bangalore+562162&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* 4. FINAL CTA — Friendly Close */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden rounded-[2.5rem] bg-brand-900 dark:bg-brand-950 px-8 sm:px-16 py-20 text-center"
        >
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-warm-500/20 dark:bg-warm-500/10 blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-400/20 dark:bg-brand-600/20 blur-[80px]" />

          <div className="relative max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 text-warm-300 dark:text-warm-400 mb-8 mx-auto">
              <MessageSquare className="h-8 w-8" />
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-lg text-brand-100 dark:text-zinc-400 leading-relaxed">
              Just message us — we'll guide you through the process and help you choose the right solution for your business.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-10 py-5 text-base font-bold text-white shadow-xl shadow-green-900/20 transition-all"
              >
                <MessageCircle className="h-6 w-6" />
                Message on WhatsApp
              </motion.a>
              <a href="#form" className="group inline-flex items-center gap-2.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-10 py-5 text-base font-bold text-white transition-all hover:bg-white/15">
                Fill the Form
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
