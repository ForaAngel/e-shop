"use client";

import { useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white border-b border-gray-200 z-50 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.span
                className="text-2xl font-serif text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LUXE
              </motion.span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {["Colección", "Sobre Nosotros", "Servicios", "Contacto"].map(
              (item) => (
                <motion.div
                  key={item}
                  className="flex items-center h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"#"}
                    className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 inline-flex items-center h-full"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none "
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none "
            >
              <ShoppingBag className="h-5 w-5" />
            </motion.button>
          </div>
          <div className="flex items-center sm:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-2 pb-3 space-y-1">
            {["Colección", "Sobre Nosotros", "Servicios", "Contacto"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
