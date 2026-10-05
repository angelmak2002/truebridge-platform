import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumbers = ["85269511288", "85262117800"];
  const whatsappUrl = `https://wa.me/${whatsappNumbers[0]}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
