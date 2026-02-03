import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-yoga.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yoga practice in peaceful studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="section-tag block mb-6">Welcome to Serenity</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
          >
            Find Your
            <br />
            <span className="text-primary">Inner Peace</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Discover balance, strength, and serenity through mindful movement 
            in our peaceful sanctuary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <button onClick={scrollToContact} className="btn-zen-primary">
              Begin Your Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Lotus Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 right-10 md:right-20"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="text-primary animate-float"
        >
          <path
            fill="currentColor"
            d="M50 10c-5 15-15 25-25 30 10 5 20 15 25 30 5-15 15-25 25-30-10-5-20-15-25-30z"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
