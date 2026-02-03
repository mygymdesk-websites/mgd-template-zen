import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';

const LazyMap = lazy(() => import('./LazyMap'));

const Contact = () => {
  const { ref, isInView } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionHeading
            tag="Contact Us"
            title="Start Your Practice Today"
            subtitle="Have questions? We are here to help. Reach out and let us guide you on your yoga journey."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="zen-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  Namaste!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for reaching out. We'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary hover:text-primary-dark transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Web3Forms fields */}
                <input type="hidden" name="access_key" value="9b465673-dae8-4d21-abb9-59f43fc95565" />
                <input type="hidden" name="subject" value="New Enquiry from Serenity Yoga" />
                <input type="hidden" name="from_name" value="Serenity Yoga Website" />
                
                {/* Honeypot spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="zen-input-styled"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="zen-input-styled"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="zen-input-styled"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    I am interested in...
                  </label>
                  <select id="interest" name="interest" className="zen-input-styled" defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Classes">Classes</option>
                    <option value="Membership">Membership</option>
                    <option value="Teacher Training">Teacher Training</option>
                    <option value="Private Sessions">Private Sessions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="zen-input-styled resize-none"
                    placeholder="Tell us about your yoga experience and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-zen-primary w-full inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="zen-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Studio Address</h4>
                  <p className="text-muted-foreground">
                    123 Tranquil Lane, Koramangala
                    <br />
                    Bangalore, Karnataka 560034
                  </p>
                </div>
              </div>
            </div>

            <div className="zen-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 80 1234 5678</p>
                </div>
              </div>
            </div>

            <div className="zen-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">namaste@serenityyoga.in</p>
                </div>
              </div>
            </div>

            <div className="zen-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Studio Hours</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                    <p>Saturday: 7:00 AM - 6:00 PM</p>
                    <p>Sunday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Lazy loaded */}
            <Suspense fallback={<div className="rounded-2xl h-64 bg-secondary/30 animate-pulse" />}>
              <LazyMap />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
