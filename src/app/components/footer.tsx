"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = ["Facebook", "Instagram", "Twitter"];
  const collections = ["Anillos", "Collares", "Pendientes", "Pulseras"];
  const services = [
    "Diseño Personalizado",
    "Reparaciones",
    "Limpieza",
    "Tasación",
  ];
  const company = ["Sobre Nosotros", "Blog", "Socios", "Prensa"];
  const legal = [
    "Política de Privacidad",
    "Términos de Uso",
    "Política de Cookies",
  ];

  return (
    <motion.footer
      className="bg-white"
      aria-labelledby="footer-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <motion.span
              className="text-2xl font-serif text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              LUXE
            </motion.span>
            <p className="text-gray-500 text-base">
              Creando joyas excepcionales que cuentan historias únicas desde
              1990.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gray-500"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  {/* <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Colecciones
                </h3>
                <ul className="mt-4 space-y-4">
                  {collections.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Servicios
                </h3>
                <ul className="mt-4 space-y-4">
                  {services.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  {company.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {legal.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 LUXE Joyería, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
