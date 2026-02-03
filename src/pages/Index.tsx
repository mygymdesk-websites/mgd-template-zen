import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Schedule from '@/components/Schedule';
import Teachers from '@/components/Teachers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Classes />
        <Schedule />
        <Teachers />
        <Testimonials />
        <Pricing />
        <Gallery />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
