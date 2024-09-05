"use client";

import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="relative bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              className="sm:text-center lg:text-left"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                variants={fadeIn}
              >
                <span className="block xl:inline">Joyería que cuenta</span>{" "}
                <span className="block text-yellow-600 xl:inline">
                  tu historia
                </span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                variants={fadeIn}
              >
                Descubre piezas únicas que reflejan tu estilo y personalidad.
                Cada joya es una obra de arte diseñada para perdurar en el
                tiempo.
              </motion.p>
              <motion.div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                variants={fadeIn}
              >
                <div className="rounded-md shadow">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
                      Explorar colección
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}
