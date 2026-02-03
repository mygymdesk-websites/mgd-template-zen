import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding gradient-cream" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="zen-divider mb-8" />
            
            <p className="font-heading text-3xl md:text-4xl text-foreground leading-relaxed mb-8">
              "Yoga is the journey of the self, through the self, to the self."
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Serenity Yoga, we believe in the transformative power of mindful practice. 
              Our studio is more than a place to exercise—it's a sanctuary where you can 
              reconnect with your inner self, find balance, and nurture your wellbeing.
            </p>

            <span className="font-heading text-2xl text-primary italic">Namaste</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
