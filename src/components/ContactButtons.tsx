import React from "react";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";

export const ContactButtons = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
      <a
        href="tel:0543205594"
        className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
        title="اتصل بنا"
      >
        <Phone size={28} />
      </a>
      <a
        href="https://wa.me/966543205594"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
        title="واتساب"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href="https://www.instagram.com/lhyllshsht?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
        title="Instagram"
      >
        <Instagram size={28} />
      </a>
      <a
        href="mailto:info@asriah.com"
        className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
        title="راسلنا"
      >
        <Mail size={28} />
      </a>
    </div>
  );
};
