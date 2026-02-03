import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';

const schedule = [
  { day: 'Monday', classes: [
    { time: '6:30 AM', name: 'Morning Vinyasa' },
    { time: '10:00 AM', name: 'Gentle Flow' },
    { time: '6:00 PM', name: 'Power Yoga' },
  ]},
  { day: 'Tuesday', classes: [
    { time: '7:00 AM', name: 'Breathwork' },
    { time: '12:00 PM', name: 'Lunch Yoga' },
    { time: '7:00 PM', name: 'Yin Yoga' },
  ]},
  { day: 'Wednesday', classes: [
    { time: '6:30 AM', name: 'Morning Vinyasa' },
    { time: '10:00 AM', name: 'Prenatal Yoga' },
    { time: '6:00 PM', name: 'Meditation' },
  ]},
  { day: 'Thursday', classes: [
    { time: '7:00 AM', name: 'Sunrise Flow' },
    { time: '12:00 PM', name: 'Lunch Yoga' },
    { time: '7:00 PM', name: 'Restorative' },
  ]},
  { day: 'Friday', classes: [
    { time: '6:30 AM', name: 'Morning Vinyasa' },
    { time: '10:00 AM', name: 'Gentle Flow' },
    { time: '5:00 PM', name: 'Weekend Prep Flow' },
  ]},
  { day: 'Saturday', classes: [
    { time: '8:00 AM', name: 'Community Class' },
    { time: '10:00 AM', name: 'Power Yoga' },
  ]},
  { day: 'Sunday', classes: [
    { time: '9:00 AM', name: 'Slow Flow' },
    { time: '11:00 AM', name: 'Yin & Meditation' },
  ]},
];

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="section-tag">Weekly Schedule</span>
          <h2 className="section-heading">Find Your Perfect Time</h2>
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {schedule.map((day) => (
            <div
              key={day.day}
              className="bg-background rounded-2xl p-4 border border-border"
            >
              <h4 className="font-heading text-lg text-foreground mb-4 pb-2 border-b border-border">
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
            </div>
          ))}
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-center mt-10"
        >
          <button className="btn-zen-outline inline-flex items-center gap-2">
            <Download size={18} />
            Download Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
