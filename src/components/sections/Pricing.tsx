import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';
import PricingCard from '@/components/ui/PricingCard';
import pricingData from '@/data/pricing.json';

const Pricing = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="pricing" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionHeading
            tag="Membership Options"
            title="Invest in Your Wellbeing"
            subtitle="Choose the plan that fits your practice and budget. All memberships include access to our beautiful studio space."
          />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              <PricingCard {...plan} />
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
            New to yoga? Try your{' '}
            <span className="text-primary font-medium">first class free</span>!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
