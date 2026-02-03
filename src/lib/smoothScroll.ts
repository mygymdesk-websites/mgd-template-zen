/**
 * Smooth scroll utility with offset for fixed navbar
 */
const NAVBAR_OFFSET = 80;

export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const openWhatsAppWithPlan = (planName: string, price: string) => {
  const phoneNumber = '919876543210';
  const message = encodeURIComponent(
    `Namaste! I'm interested in the ${planName} plan (${price}). Please share more details.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
