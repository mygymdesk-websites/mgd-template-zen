import { useEffect, useState, useRef } from 'react';

const LazyMap = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="rounded-2xl overflow-hidden shadow-soft h-64 bg-secondary/30">
      {shouldLoad ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965338522!2d77.61245717507656!3d12.934484987384836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452f57f5173%3A0x4c43f7e36aac4e01!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706900000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Serenity Yoga Studio Location"
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <span>Loading map...</span>
        </div>
      )}
    </div>
  );
};

export default LazyMap;
