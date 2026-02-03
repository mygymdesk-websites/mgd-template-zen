import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-dark/30 text-primary-foreground/90 mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Special Offer</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4">
            Begin Your Journey Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Your first class is on us. Experience the peace and transformation 
            that awaits you at Serenity Yoga.
          </p>
          
          <button onClick={scrollToContact} className="btn-zen-white">
            Claim Your Free Class
          </button>
        </motion.div>
      </div>

      {/* Decorative Lotus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-10 bottom-10 md:right-20"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-primary-foreground"
        >
          <path
            fill="currentColor"
            d="M50 10c-5 15-15 25-25 30 10 5 20 15 25 30 5-15 15-25 25-30-10-5-20-15-25-30z"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
};

export default CTABanner;
