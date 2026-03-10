import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  {
    icon: "mail",
    label: "Email",
    value: "manoel.leal@outlook.com",
    href: "mailto:manoel.leal@outlook.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/manoelleal",
    href: "https://www.linkedin.com/in/manoelleal/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/omanoelleal",
    href: "https://github.com/omanoelleal",
  },
  {
    icon: "location",
    label: "Location",
    value: "Porto, Portugal",
    href: null,
  },
];

function Icon({ name }) {
  if (name === "mail") return <Mail size={22} />;
  if (name === "linkedin") return <Linkedin size={22} />;
  if (name === "github") return <Github size={22} />;
  return <MapPin size={22} />;
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 py-24 px-6 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2 uppercase">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>
          <div className="mt-4 h-1 w-16 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-md mx-auto leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about data!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-slate-800/60 border border-slate-700 hover:border-cyan-500/60 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group"
                >
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{c.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{c.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                  <div className="text-cyan-400">
                    <Icon name={c.icon} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{c.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{c.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="mailto:manoel.leal@outlook.com"
            className="inline-block px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Send me an Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}
