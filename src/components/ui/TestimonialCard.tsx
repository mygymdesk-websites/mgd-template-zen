interface TestimonialCardProps {
  quote: string;
  name: string;
  duration: string;
  avatar: string;
}

const TestimonialCard = ({ quote, name, duration, avatar }: TestimonialCardProps) => {
  return (
    <div className="text-center">
      <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
        "{quote}"
      </p>

      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium mb-3">
          {avatar}
        </div>
        <h4 className="font-medium text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
