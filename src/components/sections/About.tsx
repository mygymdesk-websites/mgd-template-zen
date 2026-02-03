import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import aboutImage from '@/assets/about-studio.webp';

const values = [
  { icon: Leaf, title: 'Mindful Practice', description: 'Every movement with intention' },
  { icon: Heart, title: 'Experienced Teachers', description: '500+ hours certified' },
  { icon: Users, title: 'Welcoming Community', description: 'All levels welcome' },
  { icon: Sparkles, title: 'Holistic Approach', description: 'Mind, body, and spirit' },
];

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="section-tag">Our Story</span>
            <h2 className="section-heading">A Sanctuary for Mind & Body</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2015, Serenity Yoga was born from a simple belief: that
              everyone deserves a peaceful space to explore their practice. What
              started as a small studio has grown into a thriving community of
              practitioners united by their love for yoga.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our experienced teachers bring diverse backgrounds and specializations,
              ensuring that whether you're stepping onto the mat for the first time or
              deepening a lifelong practice, you'll find guidance that meets you
              exactly where you are.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Our peaceful yoga studio"
                width={600}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
