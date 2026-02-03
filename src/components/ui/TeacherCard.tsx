import { Instagram, Facebook } from 'lucide-react';

interface TeacherCardProps {
  name: string;
  title: string;
  bio: string;
  certifications: string[];
  image: string;
}

const TeacherCard = ({ name, title, bio, certifications, image }: TeacherCardProps) => {
  return (
    <div className="group">
      <div className="zen-card p-6 text-center h-full flex flex-col">
        {/* Photo */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <h3 className="font-heading text-2xl text-foreground mb-1">{name}</h3>
        <p className="text-primary text-sm font-medium mb-2">{title}</p>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{bio}</p>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {certifications.map((cert) => (
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
            aria-label={`${name} on Instagram`}
          >
            <Instagram size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`${name} on Facebook`}
          >
            <Facebook size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
