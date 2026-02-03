import { motion, type Easing } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';
import ClassCard from '@/components/ui/ClassCard';
import { scrollToSection } from '@/lib/smoothScroll';

import classVinyasa from '@/assets/class-vinyasa.webp';
import classYin from '@/assets/class-yin.webp';
import classMeditation from '@/assets/class-meditation.webp';
import classPrenatal from '@/assets/class-prenatal.webp';
import classRestorative from '@/assets/class-restorative.webp';
import classBreathwork from '@/assets/class-breathwork.webp';

const classImages: Record<string, string> = {
  'class-vinyasa.webp': classVinyasa,
  'class-yin.webp': classYin,
  'class-meditation.webp': classMeditation,
  'class-prenatal.webp': classPrenatal,
  'class-restorative.webp': classRestorative,
  'class-breathwork.webp': classBreathwork,
};

import classesData from '@/data/classes.json';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Classes = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="classes" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Decorative Divider */}
        <div className="section-divider mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <SectionHeading
            tag="Our classes"
            title="Find the practice that speaks to you"
            subtitle="From energizing flows to peaceful restorative sessions, discover the practice that nurtures your unique journey."
          />
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {classesData.map((yogaClass) => (
            <motion.div key={yogaClass.name} variants={itemVariants}>
              <ClassCard
                name={yogaClass.name}
                description={yogaClass.description}
                duration={yogaClass.duration}
                level={yogaClass.level}
                image={classImages[yogaClass.image]}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View Schedule Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection('#schedule')}
            className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 inline-flex items-center gap-2 group"
          >
            View full schedule
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;
