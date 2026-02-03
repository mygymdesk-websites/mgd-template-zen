import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';
import ClassCard from '@/components/ui/ClassCard';

import classVinyasa from '@/assets/class-vinyasa.jpg';
import classYin from '@/assets/class-yin.jpg';
import classMeditation from '@/assets/class-meditation.jpg';
import classPrenatal from '@/assets/class-prenatal.jpg';
import classRestorative from '@/assets/class-restorative.jpg';
import classBreathwork from '@/assets/class-breathwork.jpg';

const classImages: Record<string, string> = {
  'class-vinyasa.jpg': classVinyasa,
  'class-yin.jpg': classYin,
  'class-meditation.jpg': classMeditation,
  'class-prenatal.jpg': classPrenatal,
  'class-restorative.jpg': classRestorative,
  'class-breathwork.jpg': classBreathwork,
};

import classesData from '@/data/classes.json';

const Classes = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="classes" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionHeading
            tag="Our Classes"
            title="Find the Practice That Speaks to You"
            subtitle="From energizing flows to peaceful restorative sessions, discover the practice that nurtures your unique journey."
          />
        </motion.div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <ClassCard
                name={yogaClass.name}
                description={yogaClass.description}
                duration={yogaClass.duration}
                level={yogaClass.level}
                image={classImages[yogaClass.image]}
              />
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
