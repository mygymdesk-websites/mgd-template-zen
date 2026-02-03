import ScrollReveal from '@/components/shared/ScrollReveal';
import Divider from '@/components/shared/Divider';

const Welcome = () => {
  return (
    <section className="section-padding gradient-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Divider className="mb-8" />

            <p className="font-heading text-3xl md:text-4xl text-foreground leading-relaxed mb-8">
              "Yoga is the journey of the self, through the self, to the self."
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Serenity Yoga, we believe in the transformative power of mindful
              practice. Our studio is more than a place to exercise—it's a sanctuary
              where you can reconnect with your inner self, find balance, and nurture
              your wellbeing.
            </p>

            <span className="font-heading text-2xl text-primary italic">Namaste</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
