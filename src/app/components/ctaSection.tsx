"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CtaSection() {
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

  return (
    <motion.div
      className="bg-yellow-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          //   variants={fadeIn}
        >
          <span className="block">¿Listo para encontrar tu joya perfecta?</span>
          <span className="block text-yellow-600">
            Explora nuestra colección hoy.
          </span>
        </motion.h2>
        <motion.div
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="inline-flex rounded-md shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            // variants={fadeIn}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700">
                Ver catálogo
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="ml-3 inline-flex rounded-md shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            // variants={fadeIn}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50">
                Contactar
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
