import React, { useState } from "react";
import { motion } from "framer-motion";
import { ServiceModal } from "./Services/ServiceModal";
import { services } from "./Services/serviceData";

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
