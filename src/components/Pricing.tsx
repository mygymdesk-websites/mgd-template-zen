import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Drop-In',
    price: '₹500',
    period: 'per class',
    description: 'Perfect for occasional visits',
    features: [
      'Access to any single class',
      'Yoga mat included',
      'Complimentary tea after class',
      'Valid for 30 days',
    ],
    highlighted: false,
    cta: 'Book a Class',
  },
  {
    name: 'Monthly',
    price: '₹3,999',
    period: 'per month',
    description: 'Unlimited classes for dedicated practitioners',
    features: [
      'Unlimited classes',
      'Priority booking',
      'Free mat storage',
      '10% off workshops',
      'Guest passes (2/month)',
      'Cancel anytime',
    ],
    highlighted: true,
    cta: 'Start Monthly',
    badge: 'Most Popular',
  },
  {
    name: 'Annual',
    price: '₹39,999',
    period: 'per year',
    description: 'Best value for committed yogis',
    features: [
      'Everything in Monthly',
      'Save 2 months',
      '20% off workshops',
      'Free merchandise',
      'Private session (1/year)',
      'Early access to events',
    ],
    highlighted: false,
    cta: 'Go Annual',
    savings: 'Save ₹7,989',
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag">Membership Options</span>
          <h2 className="section-heading">Invest in Your Wellbeing</h2>
          <p className="section-subheading">
            Choose the plan that fits your practice and budget. 
            All memberships include access to our beautiful studio space.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-background border border-border'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gold text-foreground text-sm font-medium">
                    <Star size={14} fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {plan.savings}
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className={`font-heading text-2xl mb-2 ${
                  plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`font-heading text-4xl ${
                    plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-card text-foreground hover:bg-secondary'
                  : 'btn-zen-primary'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            New to yoga? Try your <span className="text-primary font-medium">first class free</span>!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
