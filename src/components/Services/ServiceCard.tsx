import React from "react";
import { motion } from "framer-motion";
import { Service } from "./types";

interface ServiceCardProps {
  service: Service;
  index: number;
  onOpenModal: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onOpenModal,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={() => onOpenModal(service)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.images[0]}
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
  );
};
