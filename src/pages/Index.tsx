import { lazy, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Welcome from '@/components/sections/Welcome';
import About from '@/components/sections/About';
import Classes from '@/components/sections/Classes';

// Lazy load below-fold components
const Schedule = lazy(() => import('@/components/sections/Schedule'));
const Teachers = lazy(() => import('@/components/sections/Teachers'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Pricing = lazy(() => import('@/components/sections/Pricing'));
const Gallery = lazy(() => import('@/components/sections/Gallery'));
const CTABanner = lazy(() => import('@/components/sections/CTABanner'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const WhatsAppButton = lazy(() => import('@/components/ui/WhatsAppButton'));

// Skeleton fallback for lazy-loaded sections
const SectionSkeleton = ({ minHeight = 'min-h-[400px]' }: { minHeight?: string }) => (
  <div className={`${minHeight} bg-secondary/30 animate-pulse`} />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Classes />
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <Schedule />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Teachers />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[200px]" />}>
          <CTABanner />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
