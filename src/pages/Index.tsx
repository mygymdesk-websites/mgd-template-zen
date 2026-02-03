import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Welcome from '@/components/sections/Welcome';
import About from '@/components/sections/About';
import Classes from '@/components/sections/Classes';
import Schedule from '@/components/sections/Schedule';
import Teachers from '@/components/sections/Teachers';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Gallery from '@/components/sections/Gallery';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

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
