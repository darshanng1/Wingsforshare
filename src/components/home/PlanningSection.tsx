import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import ConsultationForm from '../ConsultationForm';
import MeetingBooking from '../MeetingBooking';

export const PlanningSection = () => {
  return (
    <section id="planning" className="section-padding bg-bg relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-bold uppercase tracking-widest text-accent mb-6"
          >
            <span>Project Planning</span>
          </motion.div>
          <h2 className="mb-6">
            Start Your <span className="text-text-secondary">Digital Transformation.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-[16px] md:text-[18px] leading-relaxed">
            Choose the best way to start your project. Fill out our inquiry form for a quick quote or book a direct strategy session.
          </p>
          <Link
            to="/start-project"
            className="btn-primary"
          >
            <Rocket size={20} />
            <span>Use Universal Intake Form</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ConsultationForm />
          <MeetingBooking />
        </div>
      </div>
    </section>
  );
};
