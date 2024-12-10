import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Calendar } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">من نحن</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">رؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                نسعى لأن نكون الخيار الأول في مجال تنظيم المناسبات والحفلات في المملكة العربية السعودية، من خلال تقديم خدمات استثنائية تفوق توقعات عملائنا.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">رسالتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                تقديم خدمات متكاملة في تنظيم المناسبات والحفلات بأعلى معايير الجودة والإبداع، مع الحرص على تلبية احتياجات عملائنا وتحقيق رضاهم الكامل.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-black" />
              <h4 className="text-xl font-semibold mb-2">خبرة واسعة</h4>
              <p className="text-gray-600">أكثر من 10 سنوات في مجال تنظيم المناسبات</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Star className="w-12 h-12 mx-auto mb-4 text-black" />
              <h4 className="text-xl font-semibold mb-2">جودة الخدمة</h4>
              <p className="text-gray-600">نلتزم بأعلى معايير الجودة في جميع خدماتنا</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4 text-black" />
              <h4 className="text-xl font-semibold mb-2">مرونة في المواعيد</h4>
              <p className="text-gray-600">نعمل على مدار الأسبوع لخدمة عملائنا</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};