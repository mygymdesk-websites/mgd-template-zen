import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Serenity Yoga has completely transformed my life. The peaceful atmosphere and caring teachers have helped me find balance I never knew was possible.",
    name: 'Priya Sharma',
    duration: '3 years practicing',
    avatar: 'PS',
  },
  {
    quote: "As someone who was intimidated by yoga, I can't believe how welcoming this studio is. The instructors meet you exactly where you are.",
    name: 'Michael Torres',
    duration: '1 year practicing',
    avatar: 'MT',
  },
  {
    quote: "The prenatal classes were a blessing during my pregnancy. Maya's guidance and the supportive community made all the difference.",
    name: 'Ananya Desai',
    duration: '2 years practicing',
    avatar: 'AD',
  },
  {
    quote: "I've tried many studios over the years, but Serenity truly lives up to its name. Every class leaves me feeling renewed and at peace.",
    name: 'Robert Kim',
    duration: '4 years practicing',
    avatar: 'RK',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      className="section-padding gradient-sage" 
      ref={ref}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-heading">Words from Our Community</h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Quote size={48} className="text-primary/20" />
          </div>

          {/* Testimonial Content */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mb-3">
                  {testimonials[currentIndex].avatar}
                </div>
                <h4 className="font-medium text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].duration}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-primary'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
