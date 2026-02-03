import { motion, useScroll, useTransform, type Easing } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import heroImage from '@/assets/hero-yoga.jpg';
import { scrollToSection } from '@/lib/smoothScroll';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect with 0.3 ratio (disabled on mobile for performance)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '0%' : '30%']);

  const animationDuration = isMobile ? 0.4 : 0.8;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: animationDuration, ease: easeOut },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 will-change-transform" 
        style={{ y: imageY }}
      >
        <img
          src={heroImage}
          alt="Yoga practice in peaceful studio"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="section-tag block mb-6"
          >
            Welcome to Serenity
          </motion.span>

          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight font-light"
          >
            Find your
            <br />
            <span className="text-primary">inner peace</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Discover balance, strength, and serenity through mindful movement in our
            peaceful sanctuary.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => scrollToSection('#classes')}
              className="btn-zen-primary"
            >
              Begin your journey
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Lotus Element - CSS animation only */}
      <div className="absolute bottom-10 right-10 md:right-20 opacity-15 animate-float">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="text-primary"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M50 10c-5 15-15 25-25 30 10 5 20 15 25 30 5-15 15-25 25-30-10-5-20-15-25-30z"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Scroll Indicator - CSS animation only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
