import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919513866001';
  const message = encodeURIComponent("Hi I'm Interested");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;