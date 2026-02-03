import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919876543210';
  const message = encodeURIComponent(
    'Hi! I would like to know more about yoga classes at Serenity Yoga.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-gentle-pulse opacity-0 group-hover:opacity-100" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-card text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
