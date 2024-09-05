"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function FeaturedCategories() {
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

  const categories = [
    {
      name: "Anillos",
      image: "/images/Anillos.jpeg",
      description:
        "Encuentra anillos que simbolizan momentos únicos y reflejan tu estilo personal con detalles exquisitos.",
    },
    {
      name: "Collares",
      image: "/images/Collar.jpg",
      description:
        "Nuestros collares combinan elegancia y tendencia para iluminar tu look con un toque de distinción.",
    },
    {
      name: "Pendientes",
      image: "/images/aretess.jpeg",
      description:
        "Eleva tu elegancia con pendientes que capturan miradas y añaden sofisticación a cualquier atuendo.",
    },
  ];

  return (
    <motion.div
      className="bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          className="sm:flex sm:items-baseline sm:justify-between"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-2xl font-extrabold tracking-tight text-gray-900"
            variants={fadeIn}
          >
            Nuestras Colecciones
          </motion.h2>
          <motion.a
            href="#"
            className="hidden text-sm font-semibold text-yellow-600 hover:text-yellow-500 sm:block"
            variants={fadeIn}
          >
            Ver todas las colecciones<span aria-hidden="true"> &rarr;</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="group relative aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
              variants={fadeIn}
            >
              {/* Imagen */}
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={500}
                className="object-center object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Texto */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-white text-2xl">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-white">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
