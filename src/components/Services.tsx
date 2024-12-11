import React, { useState } from "react";
import { motion } from "framer-motion";
import { ServiceModal } from "./Services/ServiceModal";
import { services } from "./Services/serviceData";
// import image1 from "../../dist/Public/image";
export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const servicess = [
    {
      title: "طاولات استقبال",
      description: "",
      images: [
        "../../dist/Public/image/D/IMG-20241209-WA0119.jpg",
        "../../dist/Public/image/D/IMG-20241209-WA0120.jpg",
        "../../dist/Public/image/D/IMG-20241209-WA0122.jpg",
        "../../dist/Public/image/D/IMG-20241209-WA0123.jpg",
        "../../dist/Public/image/D/IMG-20241209-WA0125.jpg",
      ],
    },
    {
      title: "طاولات وكراسي",
      description: "",
      images: [
        "../../dist/Public/image/E/IMG-20241209-WA0110.jpg",
        "../../dist/Public/image/E/IMG-20241209-WA0113.jpg",
        "../../dist/Public/image/E/IMG-20241209-WA0114.jpg",
        "../../dist/Public/image/E/IMG-20241209-WA0115.jpg",
        "../../dist/Public/image/E/IMG-20241209-WA0116.jpg",
      ],
    },
    {
      title: "طاولات وكراسي شفافة",
      description: "",
      images: [
        "../../dist/Public/image/F/IMG-20241209-WA0103.jpg",
        "../../dist/Public/image/F/IMG-20241209-WA0104.jpg",
        "../../dist/Public/image/F/IMG-20241209-WA0105.jpg",
        "../../dist/Public/image/F/IMG-20241209-WA0106.jpg",
        "../../dist/Public/image/F/IMG-20241209-WA0108.jpg",
      ],
    },
    {
      title: "وجهات ليزر",
      description: "",
      images: [
        "../../dist/Public/image/J/IMG-20241209-WA0054.jpg",
        "../../dist/Public/image/J/IMG-20241209-WA0059.jpg",
        "../../dist/Public/image/J/IMG-20241209-WA0060.jpg",
        "../../dist/Public/image/J/IMG-20241209-WA0062.jpg",
        "../../dist/Public/image/J/IMG-20241209-WA0064.jpg",
      ],
    },
    {
      title: "كراسي كلاسيك",
      description: "",
      images: [
        "../../dist/Public/image/G/IMG-20241209-WA0089.jpg",
        "../../dist/Public/image/G/IMG-20241209-WA0090.jpg",
        "../../dist/Public/image/G/IMG-20241209-WA0093.jpg",
        "../../dist/Public/image/G/IMG-20241209-WA0094.jpg",
        "../../dist/Public/image/G/IMG-20241209-WA0095.jpg",
      ],
    },
    {
      title: "اخيام أوروبية",
      description: "",
      images: [
        "../../dist/Public/image/A/IMG-20241209-WA0022.jpg",
        "../../dist/Public/image/A/IMG-20241209-WA0030.jpg",
        "../../dist/Public/image/A/IMG-20241209-WA0031.jpg",
        "../../dist/Public/image/A/IMG-20241209-WA0032.jpg",
        "../../dist/Public/image/A/IMG-20241209-WA0034.jpg",
      ],
    },
    {
      title: "بيوت شعر ابيض و اسود جميع المقاسات",
      description: "",
      images: [
        "../../dist/Public/image/B/IMG-20241209-WA0065.jpg",
        "../../dist/Public/image/B/IMG-20241209-WA0071.jpg",
        "../../dist/Public/image/B/IMG-20241209-WA0073.jpg",
        "../../dist/Public/image/B/IMG-20241209-WA0079.jpg",
        "../../dist/Public/image/B/IMG-20241209-WA0080.jpg",
      ],
    },
    {
      title: "تراث",
      description: "",
      images: [
        "../../dist/Public/image/C/IMG-20241209-WA0097.jpg",
        "../../dist/Public/image/C/IMG-20241209-WA0098.jpg",
        "../../dist/Public/image/C/IMG-20241209-WA0100.jpg",
        "../../dist/Public/image/C/IMG-20241209-WA0101.jpg",
        "../../dist/Public/image/C/IMG-20241209-WA0102.jpg",
      ],
    },
    {
      title: "كنب مركاز",
      description: "",
      images: [
        "../../dist/Public/image/H/IMG-20241209-WA0081.jpg",
        "../../dist/Public/image/H/IMG-20241209-WA0083.jpg",
        "../../dist/Public/image/H/IMG-20241209-WA0084.jpg",
        "../../dist/Public/image/H/IMG-20241209-WA0085.jpg",
        "../../dist/Public/image/H/Screenshot000357.jpg",
      ],
    },
    {
      title: "كنب وكراسي",
      description: "",
      images: [
        "../../dist/Public/image/I/IMG-20241209-WA0038.jpg",
        "../../dist/Public/image/I/IMG-20241209-WA0042.jpg",
        "../../dist/Public/image/I/IMG-20241209-WA0044.jpg",
        "../../dist/Public/image/I/IMG-20241209-WA0049.jpg",
        "../../dist/Public/image/I/IMG-20241209-WA0050.jpg",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicess.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.images[0]} // Display the first image as a preview
                  alt={service.title}
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("طولات استقبال")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image1.jpg"
        alt="Service 1"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 1
      </h3>
    </div>
  </motion.div>

  {/* Block 2 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("طولات وكراسي")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image2.jpg"
        alt="Service 2"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 2
      </h3>
    </div>
  </motion.div>

  {/* Repeat for blocks 3 to 8 */

{
  /* Block 3 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("service")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/image/F/IMG-20241209-WA0103.jpg"
        alt="طولات وكراسي شفاف"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        طولات وكراسي شفاف
      </h3>
    </div>
  </motion.div>

  {/* Block 4 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("وجهات ليزر")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image4.jpg"
        alt="Service 4"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 4
      </h3>
    </div>
  </motion.div>

  {/* Block 5 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("كراسي كلاسك")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image5.jpg"
        alt="Service 5"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 5
      </h3>
    </div>
  </motion.div>

  {/* Block 6 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("اخيام اوربيه")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image6.jpg"
        alt="Service 6"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 6
      </h3>
    </div>
  </motion.div>

  {/* Block 7 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.7 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("بيوت شعر ابيض و اسود جميع المقاسات")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image7.jpg"
        alt="Service 7"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 7
      </h3>
    </div>
  </motion.div>

  {/* Block 8 }
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={() => openModal("تراث")}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src="/path-to-image8.jpg"
        alt="Service 8"
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
        Service 8
      </h3>
    </div>
  </motion.div>
/*</div> **/
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={() => openModal(service)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.images[0]} // Display the first image as a preview
          alt={service.title}
          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-white text-xl font-semibold p-6 w-full text-center">
          {service.title}
        </h3>
      </div>
    </motion.div>
  ))}
</div> */
}
