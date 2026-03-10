import { motion } from "framer-motion";

const skills = [
  "Google BigQuery", "ETL", "SQL", "Python", "HIVE", "PySpark",
  "Airflow", "DBT", "Terraform", "SSIS", "JSON", "Power BI",
  "Power Apps", "Power Automate", "Hadoop", "HTML", "NoSQL (MongoDB)",
  "Shell", "PHP", "SAS", "Linux", "HDFS", "Windows Server", "VBA",
];

const education = [
  {
    degree: "Pós-Graduação em Data Science & Big Data Analytics",
    school: "Universidade Estácio de Sá",
    period: "10/2018 – 10/2020",
  },
  {
    degree: "Graduação em Direito",
    school: "Faculdade Brasileira de Ciências Jurídicas",
    period: "01/2007 – 12/2012",
  },
];

const extraCourses = [
  { name: "Programa Team Management", institution: "Nova SBE", year: "2024" },
  { name: "FAAST Ignite", institution: "Nova SBE", year: "2023" },
  { name: "Business Intelligence ETL Integration Services", institution: "Udemy", year: "2019" },
  { name: "Virtualização com Oracle Virtualbox", institution: "Udemy", year: "2019" },
  { name: "Power BI", institution: "NSI Trainning", year: "2018" },
  { name: "MS 20461 Querying Microsoft SQL Server", institution: "NSI Trainning", year: "2017" },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "Spanish", level: "Basic" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2 uppercase">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 h-1 w-16 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-5xl font-bold text-white shrink-0">
              ML
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Manoel Leal</h3>
              <p className="text-cyan-400 font-medium mb-4">Data Engineer · Porto, Portugal</p>
              <p className="text-slate-300 leading-relaxed">
                With over 10 years of experience in Data Management, Business Intelligence and Big Data,
                I specialize in transforming complex datasets into strategic insights. Currently working as
                Data Engineer at NOS SGPS with Airflow, DBT, Terraform, GCP and BigQuery.
                Passionate about automation, data quality and building solutions that drive business decisions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
                >
                  <p className="text-white font-semibold">{edu.degree}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                  <p className="text-cyan-400 text-sm mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex justify-between items-center"
                >
                  <span className="text-white font-semibold">{lang.name}</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Extra Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Extra Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {extraCourses.map((course) => (
              <div
                key={course.name}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
              >
                <p className="text-white font-semibold text-sm">{course.name}</p>
                <p className="text-slate-400 text-sm mt-1">{course.institution}</p>
                <p className="text-cyan-400 text-sm mt-1">{course.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
