import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono text-lg mb-4 tracking-widest">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Manoel Leal
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            Data & Analytics Lead
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Passionate about transforming data into insights. Experienced in
            BigQuery, PySpark, Python, Power BI and leading analytics teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="/experience"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            View Experience
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-full transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/omanoelleal"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manoelleal/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:manoelleallima@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </div>
  );
}
