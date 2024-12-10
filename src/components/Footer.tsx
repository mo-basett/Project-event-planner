import React from "react";
import { Info, Clock, Phone } from "lucide-react"; // Importing icons from Lucide

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Footer Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          أصرية للمناسبات
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* About Section */}
          <div className="text-center">
            <Info className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">عن الشركة</h3>
            <p className="text-gray-300">
              نقدم خدمات متكاملة لتنظيم المناسبات والحفلات بأعلى مستويات الجودة
              والإبداع.
            </p>
          </div>

          {/* Working Hours Section */}
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ساعات العمل</h3>
            <p className="text-gray-300">طوال أيام الأسبوع</p>
            <p className="text-gray-300">من 9 صباحاً - 10 مساءً</p>
          </div>

          {/* Contact Info Section */}
          <div className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">معلومات التواصل</h3>
            <p className="text-gray-300">هاتف: 0543205594</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>جميع الحقوق محفوظة © {currentYear} أصرية للمناسبات</p>
        </div>
      </div>
    </footer>
  );
};
