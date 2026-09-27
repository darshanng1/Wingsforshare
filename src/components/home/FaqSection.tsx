import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What does WingsForShare do?',
    a: 'WingsForShare is a global digital agency. We deliver web development, SEO, social media marketing (SMM), mobile app development and business analytics — everything you need to grow online, under one roof.'
  },
  {
    q: 'Do you work with clients worldwide?',
    a: 'Yes. We work with businesses across the US, UK, Europe, Australia, the Middle East and India, and we optimise for global as well as local search rankings.'
  },
  {
    q: 'How long does a website or app take to build?',
    a: 'A marketing website typically ships in 2–4 weeks, web apps and ecommerce in 4–10 weeks, and mobile apps or SaaS MVPs in 6–12 weeks. You get a fixed timeline before we start.'
  },
  {
    q: 'How long until I see SEO results?',
    a: 'Technical and on-page wins often move within weeks; competitive keyword rankings build over 3–6 months. We report progress monthly and only target buyer-intent keywords.'
  },
  {
    q: 'Can you run social media marketing and paid ads?',
    a: 'Yes. We handle social strategy, content, community management and paid campaigns across Instagram, LinkedIn, Facebook, YouTube and X, measured against real leads and revenue.'
  },
  {
    q: 'How do we get started?',
    a: 'Send us your goals via the contact or start-project form. We reply with a tailored plan, timeline and quote — no obligation.'
  }
];

export const FaqSection = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <section id="faq" className="section-padding bg-bg relative overflow-hidden">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-black uppercase tracking-[0.2em] mb-8">
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary leading-[0.95] tracking-tighter mb-6">
            Questions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic font-light">answered.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-text-secondary/70 leading-relaxed">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.05 }}
              className="group bg-card-bg border border-card-border rounded-2xl p-5 open:border-accent/40"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-bold text-text-primary pr-4">{faq.q}</span>
                <ChevronDown size={18} className="text-text-secondary shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-text-secondary leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
