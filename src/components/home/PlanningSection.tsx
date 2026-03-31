import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import ConsultationForm from '../ConsultationForm';
import MeetingBooking from '../MeetingBooking';

export const PlanningSection = () => {
  return (
    <section id="planning" className="section-padding bg-black/[0.01] dark:bg-white/[0.01] relative overflow-hidden border-y border-black/5 dark:border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 md:mb-4">Project Planning</h2>
          <h3 className="mb-2 md:mb-4 text-gray-900 dark:text-white">Start Your <span className="text-gray-400 dark:text-gray-600">Digital Transformation</span></h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Choose the best way to start your project. Fill out our inquiry form for a quick quote or book a direct strategy session.
          </p>
          <Link
            to="/start-project"
            className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
          >
            <Rocket size={20} />
            <span>Use Universal Intake Form</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          <ConsultationForm />
          <MeetingBooking />
        </div>
      </div>
    </section>
  );
};
