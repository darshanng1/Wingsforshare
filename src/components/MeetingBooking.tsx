import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, addMinutes } from 'date-fns';

export function MeetingBooking() {
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

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBooked(false)}
          className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-xl font-bold hover:opacity-80 transition-all"
        >
          Book Another Slot
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-premium p-8 md:p-12 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold uppercase tracking-widest text-accent mb-4">
          <Video size={16} />
          <span>1-on-1 Strategy Call</span>
        </div>
        <h3 className="text-[32px] md:text-[40px] font-bold text-text-primary mb-4 tracking-tight leading-tight">Book a Project <br /> Strategy Session</h3>
        <p className="text-text-secondary text-[16px] leading-relaxed max-w-md">
          Select a time that works for you. We'll discuss your project requirements and provide a technical roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-secondary ml-4">Select Date & Time</label>
            <div className="relative">
              <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary opacity-50 z-10" size={18} />
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                className="w-full bg-white/5 border border-white/10 focus:border-accent/50 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all text-text-primary font-medium"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-text-secondary">
              <Clock size={16} className="text-accent" />
              <span className="text-sm font-medium">Duration: 30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary">
              <Video size={16} className="text-accent" />
              <span className="text-sm font-medium">Platform: Google Meet</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <button 
            onClick={handleBooking}
            className="btn-primary w-full justify-center"
          >
            <span>Confirm Meeting</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-center mt-4 text-[10px] text-text-secondary/50 font-bold uppercase tracking-widest">
            Instant Confirmation & Link Generation
          </p>
        </div>
      </div>
    </motion.div>
  );
}
