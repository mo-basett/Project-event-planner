import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, ThumbsUp, Sparkles, Users, HeartHandshake, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'جودة عالية',
    description: 'نقدم أفضل المعدات والتجهيزات بجودة لا مثيل لها، مع ضمان سلامة وجودة جميع المنتجات'
  },
  {
    icon: Clock,
    title: 'التزام بالمواعيد',
    description: 'نضمن الالتزام التام بمواعيد التجهيز والتسليم، مع مرونة في تحديد المواعيد حسب رغبة العميل'
  },
  {
    icon: ThumbsUp,
    title: 'خبرة واسعة',
    description: 'نمتلك خبرة تزيد عن 10 سنوات في مجال تنظيم المناسبات والحفلات مع سجل حافل من النجاحات'
  },
  {
    icon: Sparkles,
    title: 'تصاميم عصرية',
    description: 'نواكب أحدث صيحات التصميم والديكور في عالم المناسبات مع لمسة إبداعية فريدة'
  },
  {
    icon: Users,
    title: 'فريق محترف',
    description: 'فريق عمل متكامل من ذوي الخبرة والاحترافية، مدرب على أعلى المستويات لتقديم أفضل الخدمات'
  },
  {
    icon: HeartHandshake,
    title: 'أسعار منافسة',
    description: 'نقدم أفضل الأسعار مع الحفاظ على أعلى معايير الجودة، مع عروض خاصة للمناسبات الكبيرة'
  }
];

const whyChooseUs = [
  'خبرة تزيد عن 10 سنوات في مجال تنظيم المناسبات',
  'فريق عمل محترف ومدرب على أعلى المستويات',
  'مجموعة متنوعة من التجهيزات تناسب جميع الأذواق',
  'خدمة عملاء متميزة على مدار الساعة',
  'أسعار تنافسية مع ضمان أعلى جودة',
  'مرونة في التعامل وتلبية متطلبات العملاء'
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">لماذا تختار أصرية للمناسبات؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <feature.icon className="w-12 h-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">مميزات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};