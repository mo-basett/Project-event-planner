import React from "react";
import { motion } from "framer-motion";
// import { motion2 } from "../../photo-1519167758481-83f550bb49b3.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(../../photo-1519167758481-83f550bb49b3.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          تنظيم وتنسيق الحفلات والمناسبات داخل وخارج الرياض
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-2xl mb-8 lg:px-64 md:px-10  sm:text-sm"
        >
          يوجد لدينا جميع أنواع الكراسي والطولات والفرش يوجد لدينا دي جي و تصوير
          و عقود ليزر يوجد لدينا شاشات جميع المقاسات يوجد لدينا بيوت شعر واخيام
          و نجعل مناسباتك استثنائية بلمسة من الإبداع والفخامة
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="tel:0543205594"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors"
          >
            اتصل بنا الآن
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="https://wa.me/966543205594"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-colors"
          >
            اتصل بنا الآن
          </motion.a>
        </div>
      </div>
    </section>
  );
};
