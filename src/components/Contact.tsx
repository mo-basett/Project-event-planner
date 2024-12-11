import React from "react";
import { Phone, MapPin, Clock, Info } from "lucide-react";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="p-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">تواصل معنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl md:max-w-4xl mx-auto">
          <div className="text-center">
            <Info className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">عن الشركة</h3>
            <p className="text-gray-300">
              نقدم خدمات متكاملة لتنظيم المناسبات والحفلات بأعلى مستويات الجودة
              والإبداع.
            </p>
          </div>

          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ساعات العمل</h3>
            <p>طوال أيام الأسبوع</p>
            <p>من 9 صباحاً - 10 مساءً</p>
          </div>

          <div className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">اتصل بنا</h3>
            <a
              href="tel:0543205594"
              className="hover:text-gray-300 transition-colors"
            >
              0543205594
            </a>
          </div>

          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">موقعنا</h3>
            <p>الرياض</p>
          </div>
        </div>
      </div>
      <footer className=" bg-black text-white">
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>جميع الحقوق محفوظة © {currentYear} أصرية للمناسبات</p>
        </div>
      </footer>
    </section>
  );
};
