import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, BarChart2 } from 'lucide-react';

import classVinyasa from '@/assets/class-vinyasa.jpg';
import classYin from '@/assets/class-yin.jpg';
import classMeditation from '@/assets/class-meditation.jpg';
import classPrenatal from '@/assets/class-prenatal.jpg';
import classRestorative from '@/assets/class-restorative.jpg';
import classBreathwork from '@/assets/class-breathwork.jpg';

const classes = [
  {
    name: 'Vinyasa Flow',
    description: 'Dynamic sequences linking breath with movement for strength and flexibility.',
    duration: '60 min',
    level: 'All Levels',
    image: classVinyasa,
  },
  {
    name: 'Yin Yoga',
    description: 'Deep stretches held for longer periods to target connective tissues.',
    duration: '75 min',
    level: 'Beginner',
    image: classYin,
  },
  {
    name: 'Meditation',
    description: 'Guided sessions to cultivate inner peace and mental clarity.',
    duration: '45 min',
    level: 'All Levels',
    image: classMeditation,
  },
  {
    name: 'Prenatal Yoga',
    description: 'Gentle, supportive practice designed for expecting mothers.',
    duration: '60 min',
    level: 'Beginner',
    image: classPrenatal,
  },
  {
    name: 'Restorative',
    description: 'Deep relaxation using props for complete rest and renewal.',
    duration: '75 min',
    level: 'Beginner',
    image: classRestorative,
  },
  {
    name: 'Breathwork',
    description: 'Pranayama techniques to energize, calm, and balance.',
    duration: '45 min',
    level: 'All Levels',
    image: classBreathwork,
  },
];

const Classes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="classes" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">Our Classes</span>
          <h2 className="section-heading">Find the Practice That Speaks to You</h2>
          <p className="section-subheading">
            From energizing flows to peaceful restorative sessions, discover 
            the practice that nurtures your unique journey.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group zen-card overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  {yogaClass.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {yogaClass.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {yogaClass.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <BarChart2 size={14} />
                    {yogaClass.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Schedule Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            View Full Schedule
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
