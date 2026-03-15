import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, addMinutes } from 'date-fns';

export default function MeetingBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isBooked, setIsBooked] = useState(false);
  const [meetingLink, setMeetingLink] = useState('');

  const handleBooking = () => {
    if (!selectedDate) return;
    
    // Simulate Google Meet link generation
    const randomId = Math.random().toString(36).substring(7);
    const link = `https://meet.google.com/abc-${randomId}-xyz`;
    setMeetingLink(link);
    setIsBooked(true);
    
    // In a real app, you'd call a backend to create the event and send notifications
    console.log('Meeting booked for:', format(selectedDate, 'PPP p'));
  };

  if (isBooked) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black dark:bg-white text-white dark:text-black p-12 rounded-[3rem] text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">Meeting Confirmed!</h3>
        <p className="opacity-60 mb-8 max-w-md mx-auto">
          Your 1-on-1 consultation is scheduled for <br />
          <span className="font-bold text-lg">{format(selectedDate!, 'PPP p')}</span>
        </p>
        
        <div className="bg-white/10 dark:bg-black/10 p-6 rounded-3xl mb-10 backdrop-blur-sm border border-white/5 dark:border-black/5">
          <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Your Google Meet Link</p>
          <a 
            href={meetingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold underline hover:opacity-80 transition-opacity break-all"
          >
            {meetingLink}
          </a>
        </div>

        <button 
          onClick={() => setIsBooked(false)}
          className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-xl font-bold hover:opacity-80 transition-all"
        >
          Book Another Slot
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black dark:bg-white text-white dark:text-black p-5 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.05)] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/30 transition-colors" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="mb-4 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 px-4 py-2 rounded-full mb-6 border border-white/5 dark:border-black/5">
          <Video size={16} className="text-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">1-on-1 Strategy Call</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 leading-tight">Book a Project <br /> Strategy Session</h3>
        <p className="opacity-60 max-w-md leading-relaxed font-medium">
          Select a time that works for you. We'll discuss your project requirements and provide a technical roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-40 ml-4">Select Date & Time</label>
            <div className="relative">
              <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 z-10" size={18} />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                className="w-full bg-white/5 dark:bg-black/5 border border-transparent focus:border-white/10 dark:focus:border-black/10 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 opacity-60">
              <Clock size={16} />
              <span className="text-sm font-medium">Duration: 30 Minutes</span>
            </div>
            <div className="flex items-center space-x-3 opacity-60">
              <Video size={16} />
              <span className="text-sm font-medium">Platform: Google Meet</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <button 
            onClick={handleBooking}
            className="w-full bg-emerald-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-emerald-500/20"
          >
            <span>Confirm Meeting</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-center mt-4 text-xs opacity-40 font-medium uppercase tracking-widest">
            Instant Confirmation & Link Generation
          </p>
        </div>
      </div>
    </motion.div>
  );
}
