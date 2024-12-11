import React, { useState } from "react";
import { motion } from "framer-motion";
import { ServiceModal } from "./Services/ServiceModal";
import { services } from "./Services/serviceData";
// import image1 from "image/D/IMG-20241209-WA0119.jpg";
export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // const Service = [
  //   {
  //     title: "طاولات استقبال",
  //     description: "",
  //     images: [
  //       "../../../image/D/IMG-20241209-WA0119.jpg",
  //       "../../../image/D/IMG-20241209-WA0120.jpg",
  //       "../../../image/D/IMG-20241209-WA0122.jpg",
  //       "../../../image/D/IMG-20241209-WA0123.jpg",
  //       "../../../image/D/IMG-20241209-WA0125.jpg",
  //     ],
  //   },
  //   {
  //     title: "طاولات وكراسي",
  //     description: "",
  //     images: [
  //       "../../../image/E/IMG-20241209-WA0110.jpg",
  //       "../../../image/E/IMG-20241209-WA0113.jpg",
  //       "../../../image/E/IMG-20241209-WA0114.jpg",
  //       "../../../image/E/IMG-20241209-WA0115.jpg",
  //       "../../../image/E/IMG-20241209-WA0116.jpg",
  //     ],
  //   },
  //   {
  //     title: "طاولات وكراسي شفافة",
  //     description: "",
  //     images: [
  //       "../../../image/F/IMG-20241209-WA0103.jpg",
  //       "../../../image/F/IMG-20241209-WA0104.jpg",
  //       "../../../image/F/IMG-20241209-WA0105.jpg",
  //       "../../../image/F/IMG-20241209-WA0106.jpg",
  //       "../../../image/F/IMG-20241209-WA0108.jpg",
  //     ],
  //   },
  //   {
  //     title: "وجهات ليزر",
  //     description: "",
  //     images: [
  //       "../../../image/J/IMG-20241209-WA0054.jpg",
  //       "../../../image/J/IMG-20241209-WA0059.jpg",
  //       "../../../image/J/IMG-20241209-WA0060.jpg",
  //       "../../../image/J/IMG-20241209-WA0062.jpg",
  //       "../../../image/J/IMG-20241209-WA0064.jpg",
  //     ],
  //   },
  //   {
  //     title: "كراسي كلاسيك",
  //     description: "",
  //     images: [
  //       "../../../image/G/IMG-20241209-WA0089.jpg",
  //       "../../../image/G/IMG-20241209-WA0090.jpg",
  //       "../../../image/G/IMG-20241209-WA0093.jpg",
  //       "../../../image/G/IMG-20241209-WA0094.jpg",
  //       "../../../image/G/IMG-20241209-WA0095.jpg",
  //     ],
  //   },
  //   {
  //     title: "اخيام أوروبية",
  //     description: "",
  //     images: [
  //       "../../../image/A/IMG-20241209-WA0022.jpg",
  //       "../../../image/A/IMG-20241209-WA0030.jpg",
  //       "../../../image/A/IMG-20241209-WA0031.jpg",
  //       "../../../image/A/IMG-20241209-WA0032.jpg",
  //       "../../../image/A/IMG-20241209-WA0034.jpg",
  //     ],
  //   },
  //   {
  //     title: "بيوت شعر ابيض و اسود جميع المقاسات",
  //     description: "",
  //     images: [
  //       "../../../image/B/IMG-20241209-WA0065.jpg",
  //       "../../../image/B/IMG-20241209-WA0071.jpg",
  //       "../../../image/B/IMG-20241209-WA0073.jpg",
  //       "../../../image/B/IMG-20241209-WA0079.jpg",
  //       "../../../image/B/IMG-20241209-WA0080.jpg",
  //     ],
  //   },
  //   {
  //     title: "تراث",
  //     description: "",
  //     images: [
  //       "../../../image/C/IMG-20241209-WA0097.jpg",
  //       "../../../image/C/IMG-20241209-WA0098.jpg",
  //       "../../../image/C/IMG-20241209-WA0100.jpg",
  //       "../../../image/C/IMG-20241209-WA0101.jpg",
  //       "../../../image/C/IMG-20241209-WA0102.jpg",
  //     ],
  //   },
  //   {
  //     title: "كنب مركاز",
  //     description: "",
  //     images: [
  //       "../../../image/H/IMG-20241209-WA0081.jpg",
  //       "../../../image/H/IMG-20241209-WA0083.jpg",
  //       "../../../image/H/IMG-20241209-WA0084.jpg",
  //       "../../../image/H/IMG-20241209-WA0085.jpg",
  //       "../../../image/H/Screenshot000357.jpg",
  //     ],
  //   },
  //   {
  //     title: "كنب وكراسي",
  //     description: "",
  //     images: [
  //       "../../../image/I/IMG-20241209-WA0038.jpg",
  //       "../../../image/I/IMG-20241209-WA0042.jpg",
  //       "../../../image/I/IMG-20241209-WA0044.jpg",
  //       "../../../image/I/IMG-20241209-WA0049.jpg",
  //       "../../../image/I/IMG-20241209-WA0050.jpg",
  //     ],
  //   },
  // ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
