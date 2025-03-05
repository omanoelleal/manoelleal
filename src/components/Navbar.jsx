import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Para tradução

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // Hook para tradução

  return (
    <nav className="bg-slate-300 dark:bg-slate-800 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Manoel Leal
        </Link>

        {/* Botão de Menu para Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("experience")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile - Tela Cheia */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-300 dark:bg-slate-800 flex flex-col justify-center items-center text-white text-2xl"
          >
            {/* Botão Fechar */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>

            {/* Links do Menu */}
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t("experience")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
