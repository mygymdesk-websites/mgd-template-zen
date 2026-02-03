import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  onNavigate: (href: string) => void;
}

const MobileMenu = ({ isOpen, onClose, links, onNavigate }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-card z-50 shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="font-heading text-xl text-foreground">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 text-foreground"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.href);
                    }}
                    className="text-lg font-heading text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#contact');
                  }}
                  className="btn-zen-primary text-center mt-4"
                >
                  Book a Class
                </motion.a>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
