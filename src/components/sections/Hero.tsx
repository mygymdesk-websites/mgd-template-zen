import { motion, useScroll, useTransform, type Easing } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-yoga.jpg';
import { scrollToSection } from '@/lib/smoothScroll';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect with 0.3 ratio
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Yoga practice in peaceful studio"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="section-tag block mb-6"
          >
            Welcome to Serenity
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight font-light"
          >
            Find your
            <br />
            <span className="text-primary">inner peace</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Discover balance, strength, and serenity through mindful movement in our
            peaceful sanctuary.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              onClick={() => scrollToSection('#classes')}
              className="btn-zen-primary"
            >
              Begin your journey
            </button>
          </motion.div>
        </motion.div>
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
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
