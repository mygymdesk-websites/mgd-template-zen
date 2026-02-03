import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/ui/SectionHeading';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import aboutStudio from '@/assets/about-studio.webp';
import classVinyasa from '@/assets/class-vinyasa.jpg';

const images = [
  { src: gallery1, alt: 'Studio reception area', span: true },
  { src: gallery2, alt: 'Meditation corner', span: false },
  { src: gallery3, alt: 'Yoga props', span: false },
  { src: gallery4, alt: 'Tea lounge', span: false },
  { src: classVinyasa, alt: 'Group yoga class', span: true },
  { src: aboutStudio, alt: 'Main practice space', span: false },
];

const Gallery = () => {
  const { ref, isInView } = useInView();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding bg-background" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionHeading
              tag="Our Space"
              title="A Peaceful Sanctuary in the Heart of the City"
            />
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className={`overflow-hidden rounded-2xl cursor-pointer group ${
                  image.span ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.span ? 800 : 400}
                  height={image.span ? 800 : 400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-card p-2 hover:bg-card/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
