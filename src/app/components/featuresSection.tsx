"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function FeaturesSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      name: "Diseño Exclusivo",
      description:
        "Cada pieza es única, diseñada con pasión y atención al detalle.",
    },
    {
      name: "Materiales Premium",
      description:
        "Utilizamos solo los mejores materiales y gemas de la más alta calidad.",
    },
    {
      name: "Artesanía Experta",
      description:
        "Nuestros artesanos son maestros en su oficio con años de experiencia.",
    },
    {
      name: "Servicio Personalizado",
      description:
        "Ofrecemos asesoramiento personalizado para encontrar la joya perfecta.",
    },
    {
      name: "Garantía de por Vida",
      description:
        "Respaldamos la calidad de nuestras joyas con una garantía de por vida.",
    },
    {
      name: "Envío Seguro",
      description: "Entrega gratuita y asegurada en todos nuestros envíos.",
    },
  ];

  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          //   variants={stagger}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Por qué elegir LUXE
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos dedicamos a ofrecer joyas de la más alta calidad con un servicio
            excepcional.
          </motion.p>
        </motion.div>
        <motion.dl
          className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="relative"
              //   variants={fadeIn}
            >
              <dt>
                <ChevronRight
                  className="absolute h-6 w-6 text-yellow-600"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </motion.div>
  );
}
