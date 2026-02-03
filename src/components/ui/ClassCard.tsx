import { Clock, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClassCardProps {
  name: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const ClassCard = ({ name, description, duration, level, image }: ClassCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group zen-card overflow-hidden cursor-pointer hover:shadow-card"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          width={400}
          height={224}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl text-foreground mb-2 font-normal">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock size={14} />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
            <BarChart2 size={14} />
            {level}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassCard;
