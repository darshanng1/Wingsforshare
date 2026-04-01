import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

// Import slick-carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "PestControl India",
    role: "Operations Director",
    content: "Wings Technology transformed our manual tracking into a high-performance BI system. Our operational efficiency increased by 300% within the first quarter. Their technical precision is unmatched.",
    image: "https://i.pravatar.cc/150?u=rajesh",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    company: "Global Logistics Co.",
    role: "CTO",
    content: "The mobile app developed by Wings has become the backbone of our field operations. The geo-fencing and real-time tracking features are flawless. A truly professional team.",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Shah",
    company: "TechScale Solutions",
    role: "Founder",
    content: "Their SEO growth strategy took us from page 10 to the top 3 results for our most competitive keywords. The ROI we've seen is incredible. Highly recommended for any scaling business.",
    image: "https://i.pravatar.cc/150?u=amit",
    rating: 5
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    company: "EcoSmart Systems",
    role: "Product Manager",
    content: "Working with Wings was a seamless experience. They understood our complex data requirements and built a dashboard that even our non-technical staff loves to use.",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  }
];

export function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots: React.ReactNode) => (
      <div className="!static mt-8">
        <ul className="flex gap-1 justify-start m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="h-1 w-2 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-all duration-500 hover:bg-emerald-500/50" />
    )
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[12px] font-bold uppercase tracking-widest text-accent mb-8"
            >
              <Star size={14} />
              <span>Client Success Stories</span>
            </motion.div>
            
            <h2 className="mb-8 leading-tight">
              What Our <br />
              <span className="text-accent">Partners</span> Say.
            </h2>
            
            <p className="text-[16px] md:text-[18px] text-text-secondary max-w-md mb-12 leading-relaxed">
              We don't just build software; we build long-term partnerships. Here's how we've helped businesses across the globe scale their operations.
            </p>

            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all group"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-10 -left-10 text-accent/5">
              <Quote size={200} />
            </div>
            
            <div className="relative z-10 testimonial-slider">
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="outline-none px-2 py-4">
                    <div className="card-premium p-10 md:p-16">
                      <div className="flex items-center gap-1 mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                      </div>

                      <p className="text-[20px] md:text-[24px] font-medium tracking-tight leading-relaxed mb-12 italic text-text-primary opacity-90">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="text-[20px] font-bold tracking-tight text-text-primary">{testimonial.name}</h4>
                          <p className="text-[12px] text-accent font-bold uppercase tracking-widest">{testimonial.role}</p>
                          <p className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Decorative Background Card */}
            <div className="absolute top-4 left-4 w-full h-full bg-accent/5 rounded-[32px] -z-10" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }
        .testimonial-slider .slick-dots li.slick-active div {
          width: 2rem;
          background-color: #00FF9D; /* accent */
        }
        .testimonial-slider .slick-list {
          overflow: visible;
        }
        .testimonial-slider .slick-track {
          display: flex !important;
        }
        .testimonial-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
          justify-content: center;
        }
        .testimonial-slider .slick-slide > div {
          width: 100%;
        }
      `}} />
    </section>
  );
}
