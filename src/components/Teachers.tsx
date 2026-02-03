import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook } from 'lucide-react';

import teacher1 from '@/assets/teacher-1.jpg';
import teacher2 from '@/assets/teacher-2.jpg';
import teacher3 from '@/assets/teacher-3.jpg';
import teacher4 from '@/assets/teacher-4.jpg';

const teachers = [
  {
    name: 'Sarah Mitchell',
    title: 'Founder & Lead Teacher',
    specialization: 'Vinyasa, Meditation',
    bio: '15+ years of practice, trained in India. Sarah brings warmth and wisdom to every class.',
    certifications: ['E-RYT 500', 'YACEP'],
    image: teacher1,
  },
  {
    name: 'David Chen',
    title: 'Senior Instructor',
    specialization: 'Power Yoga, Breathwork',
    bio: "Former athlete turned yogi. David's classes blend strength with mindfulness.",
    certifications: ['RYT 500', 'Pranayama'],
    image: teacher2,
  },
  {
    name: 'Elena Rodriguez',
    title: 'Restorative Specialist',
    specialization: 'Yin, Restorative, Therapy',
    bio: '20 years of teaching experience with a focus on healing and restoration.',
    certifications: ['E-RYT 500', 'Yoga Therapy'],
    image: teacher3,
  },
  {
    name: 'Maya Patel',
    title: 'Community Teacher',
    specialization: 'Prenatal, Gentle Flow',
    bio: 'Passionate about making yoga accessible to everyone, especially new mothers.',
    certifications: ['RYT 200', 'Prenatal'],
    image: teacher4,
  },
];

const Teachers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="teachers" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">Meet Our Teachers</span>
          <h2 className="section-heading">Guided by Experience, Inspired by Tradition</h2>
          <p className="section-subheading">
            Our dedicated team brings diverse expertise and genuine passion 
            to support your yoga journey.
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className="group"
            >
              <div className="zen-card p-6 text-center h-full flex flex-col">
                {/* Photo */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <h3 className="font-heading text-2xl text-foreground mb-1">
                  {teacher.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {teacher.title}
                </p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {teacher.bio}
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {teacher.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${teacher.name} on Instagram`}
                  >
                    <Instagram size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${teacher.name} on Facebook`}
                  >
                    <Facebook size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
