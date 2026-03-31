import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // User should replace this
          ...data,
          subject: `New Contact Form Submission from ${data.name}`,
          from_name: 'WingsForShare Website',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        reset();
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-8">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black tracking-tighter mb-4 text-zinc-900 dark:text-white">Message Received!</h3>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-10">
          Our team is reviewing your request and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="John Doe"
            className={`w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border ${
              errors.name ? 'border-red-500' : 'border-zinc-100 dark:border-zinc-800'
            } rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white`}
          />
          {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="john@example.com"
            className={`w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border ${
              errors.email ? 'border-red-500' : 'border-zinc-100 dark:border-zinc-800'
            } rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white`}
          />
          {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Phone Number</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            placeholder="+91 86187 64541"
            className={`w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border ${
              errors.phone ? 'border-red-500' : 'border-zinc-100 dark:border-zinc-800'
            } rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white`}
          />
          {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Service Required</label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border ${
              errors.service ? 'border-red-500' : 'border-zinc-100 dark:border-zinc-800'
            } rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white appearance-none`}
          >
            <option value="">Select a service</option>
            <option value="software-development">Software Development</option>
            <option value="app-development">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="saas-products">SaaS Products</option>
            <option value="other">Other Inquiry</option>
          </select>
          {errors.service && <p className="text-xs text-red-500 ml-1">{errors.service.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Your Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Tell us about your project or inquiry..."
          rows={5}
          className={`w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border ${
            errors.message ? 'border-red-500' : 'border-zinc-100 dark:border-zinc-800'
          } rounded-3xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <>
            Send Message
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
