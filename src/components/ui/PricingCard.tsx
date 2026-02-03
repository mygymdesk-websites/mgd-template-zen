import { Check, Star } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
  savings?: string;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  highlighted,
  cta,
  badge,
  savings,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-3xl p-8 ${
        highlighted
          ? 'bg-primary text-primary-foreground shadow-glow'
          : 'bg-background border border-border'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gold text-foreground text-sm font-medium">
            <Star size={14} fill="currentColor" />
            {badge}
          </span>
        </div>
      )}

      {/* Savings Badge */}
      {savings && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            {savings}
          </span>
        </div>
      )}

      {/* Plan Info */}
      <div className="text-center mb-8">
        <h3
          className={`font-heading text-2xl mb-2 ${
            highlighted ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          {name}
        </h3>
        <div className="mb-2">
          <span
            className={`font-heading text-4xl ${
              highlighted ? 'text-primary-foreground' : 'text-foreground'
            }`}
          >
            {price}
          </span>
          <span
            className={`text-sm ${
              highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}
          >
            /{period}
          </span>
        </div>
        <p
          className={`text-sm ${
            highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              className={`flex-shrink-0 mt-0.5 ${
                highlighted ? 'text-primary-foreground' : 'text-primary'
              }`}
            />
            <span
              className={`text-sm ${
                highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
          highlighted
            ? 'bg-card text-foreground hover:bg-secondary'
            : 'btn-zen-primary'
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

export default PricingCard;
