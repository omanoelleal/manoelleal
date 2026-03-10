import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

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
    icon: "phone",
    label: "Phone",
    value: "+351 913 996 410",
    href: "tel:+351913996410",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+351 913 996 410",
    href: "https://wa.me/351913996410",
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
  if (name === "phone") return <Phone size={22} />;
  if (name === "whatsapp") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
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
