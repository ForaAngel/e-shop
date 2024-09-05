"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/heroimg.jpg')`, // Cambia por tu ruta de imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)", // Para oscurecer la imagen
        }}
      />

      {/* Contenedor del texto y botón */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            variants={fadeIn}
          >
            Joyería que cuenta{" "}
            <span className="text-yellow-600">tu historia</span>
          </motion.h1>

          <motion.p
            className="mt-3 text-lg text-white sm:mt-5 sm:text-xl md:mt-5"
            variants={fadeIn}
          >
            Descubre piezas únicas que reflejan tu estilo y personalidad. Cada
            joya es una obra de arte diseñada para perdurar en el tiempo.
          </motion.p>

          <motion.div
            className="mt-5 sm:mt-8 flex justify-center"
            variants={fadeIn}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md shadow"
            >
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                Ver colección
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
