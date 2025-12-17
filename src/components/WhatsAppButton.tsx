import { MessageCircle } from 'lucide-react';

const whatsappLink = 'https://wa.me/5515997447930?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      
      {/* Button */}
      <div className="relative flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full shadow-lg transition-all duration-300 group-hover:scale-105">
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium hidden sm:inline">WhatsApp</span>
        
        {/* Online badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full" />
        </span>
      </div>
    </a>
  );
}
