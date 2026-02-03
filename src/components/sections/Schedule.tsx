import { motion, type Easing } from 'framer-motion';
import { Download } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '6:30 AM', name: 'Morning Vinyasa' },
      { time: '10:00 AM', name: 'Gentle Flow' },
      { time: '6:00 PM', name: 'Power Yoga' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '7:00 AM', name: 'Breathwork' },
      { time: '12:00 PM', name: 'Lunch Yoga' },
      { time: '7:00 PM', name: 'Yin Yoga' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '6:30 AM', name: 'Morning Vinyasa' },
      { time: '10:00 AM', name: 'Prenatal Yoga' },
      { time: '6:00 PM', name: 'Meditation' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '7:00 AM', name: 'Sunrise Flow' },
      { time: '12:00 PM', name: 'Lunch Yoga' },
      { time: '7:00 PM', name: 'Restorative' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '6:30 AM', name: 'Morning Vinyasa' },
      { time: '10:00 AM', name: 'Gentle Flow' },
      { time: '5:00 PM', name: 'Weekend Prep Flow' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '8:00 AM', name: 'Community Class' },
      { time: '10:00 AM', name: 'Power Yoga' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { time: '9:00 AM', name: 'Slow Flow' },
      { time: '11:00 AM', name: 'Yin & Meditation' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Schedule = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="schedule" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Decorative Divider */}
        <div className="section-divider mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <SectionHeading tag="Weekly schedule" title="Find your perfect time" />
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {schedule.map((day) => (
            <motion.div
              key={day.day}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="bg-background rounded-2xl p-4 border border-border hover:shadow-soft transition-shadow duration-500"
            >
              <h4 className="font-heading text-lg text-foreground mb-4 pb-2 border-b border-border font-normal">
                {day.day}
              </h4>
              <div className="space-y-3">
                {day.classes.map((c, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="text-primary font-medium block">{c.time}</span>
                    <span className="text-muted-foreground">{c.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
          className="text-center mt-10"
        >
          <button className="btn-zen-outline inline-flex items-center gap-2">
            <Download size={18} />
            Download full schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
