import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';
import TeacherCard from '@/components/ui/TeacherCard';

import teacher1 from '@/assets/teacher-1.webp';
import teacher2 from '@/assets/teacher-2.webp';
import teacher3 from '@/assets/teacher-3.webp';
import teacher4 from '@/assets/teacher-4.webp';

const teacherImages: Record<string, string> = {
  'teacher-1.webp': teacher1,
  'teacher-2.webp': teacher2,
  'teacher-3.webp': teacher3,
  'teacher-4.webp': teacher4,
};

import teachersData from '@/data/teachers.json';

const Teachers = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="teachers" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionHeading
            tag="Meet Our Teachers"
            title="Guided by Experience, Inspired by Tradition"
            subtitle="Our dedicated team brings diverse expertise and genuine passion to support your yoga journey."
          />
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersData.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              <TeacherCard
                name={teacher.name}
                title={teacher.title}
                bio={teacher.bio}
                certifications={teacher.certifications}
                image={teacherImages[teacher.image]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
