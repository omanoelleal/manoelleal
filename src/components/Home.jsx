import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
            href="mailto:manoel.leal@outlook.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+351913996410"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://wa.me/351913996410"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <WhatsAppIcon />
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
