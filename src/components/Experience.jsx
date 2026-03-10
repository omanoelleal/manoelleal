import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "NOS SGPS",
    location: "Porto, Portugal",
    period: "06/2025 – Present",
    current: true,
    description: [
      "Building and maintaining high-volume pipelines using Airflow, DBT, Terraform and Astronomer on GCP and BigQuery.",
      "Developing query and processing scripts in Google BigQuery as well as ETLs in PySpark on HIVE over Hadoop clusters.",
      "HIVE and BigQuery database administration and code versioning on GitHub.",
      "Project management on Jira, dashboard creation in Power BI and management reporting.",
      "Responsible for network quality KPIs, Python automation bots and cross-functional support.",
    ],
  },
  {
    title: "Data & Analytics Lead",
    company: "NOS SGPS",
    location: "Porto, Portugal",
    period: "06/2023 – 06/2025",
    description: [
      "Leading the Production & Analytics team.",
      "Creating query and processing scripts in Google BigQuery.",
      "Developing PySpark scripts for ETL processes in HIVE database on Hadoop clusters.",
      "Project management using Jira.",
      "HIVE and Google BigQuery database administration.",
      "Managing network quality KPIs.",
      "Building dashboards in Power BI.",
      "Creating and analysing management reports.",
      "Developing automation bots in Python.",
      "Code versioning using GitHub.",
    ],
  },
  {
    title: "Big Data Consultant",
    company: "Alter Solutions Portugal",
    location: "Porto, Portugal",
    period: "09/2021 – 06/2023",
    description: [
      "Consulting for NOS Comunicações.",
      "Creating query and processing scripts in Google BigQuery.",
      "Developing PySpark scripts for ETL on HIVE / Hadoop clusters.",
      "Managing network quality KPIs.",
      "Building dashboards in Power BI.",
      "Developing automation bots in Python.",
      "Code versioning using GitHub.",
    ],
  },
  {
    title: "Specialist Data Management",
    company: "TIM Brasil",
    location: "Rio de Janeiro, Brazil",
    period: "06/2021 – 08/2021",
    description: [
      "Leading the Data Management team.",
      "Database management: Views, Triggers, Functions, Stored Procedures, Indexing and Joins.",
      "Building dashboards in Power BI.",
      "Developing automation bots in Python.",
      "ETL creation with Python and Visual Studio (SSIS).",
    ],
  },
  {
    title: "Senior Consultant",
    company: "TIM Brasil",
    location: "Rio de Janeiro, Brazil",
    period: "12/2019 – 06/2021",
    description: [
      "Building dashboards in Power BI.",
      "Creating automations and bots in Python.",
      "Developing applications in Power Apps.",
      "Automations with Microsoft Power Automate.",
      "Creating internal sites in Microsoft SharePoint.",
    ],
  },
  {
    title: "MIS Consultant",
    company: "TIM Brasil",
    location: "Rio de Janeiro, Brazil",
    period: "08/2017 – 12/2019",
    description: [
      "Building dashboards in Power BI.",
      "Responsible for ETL processes using SSIS.",
      "SQL Server database management (Stored Procedures, Views, Functions, Triggers, Tables, Indexes).",
      "Creating and analysing management reports.",
    ],
  },
  {
    title: "MIS Specialist",
    company: "Brasil Center Telecomunicações",
    location: "Rio de Janeiro, Brazil",
    period: "06/2014 – 08/2017",
    description: [
      "Leading the Information Intelligence team.",
      "Creating and maintaining dashboards in OBIEE.",
      "Budget previews and billing analysis.",
      "SQL database queries, Views, and VBA with SQL and ACCESS.",
    ],
  },
  {
    title: "Senior Analyst",
    company: "Atento Brasil",
    location: "Rio de Janeiro, Brazil",
    period: "04/2012 – 06/2014",
    description: [
      "Consulting and implementation of reports and KPI analysis.",
      "Performance analysis across telephony, internet and banking sectors.",
      "On-site and remote consulting for multiple clients.",
    ],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2 uppercase">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          <div className="mt-4 h-1 w-16 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-700 md:left-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex items-start mb-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 z-10 md:left-1/2" />

              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <div
                  className="bg-slate-800/60 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                  onClick={() => setSelected(exp)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full shrink-0 ml-2">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 text-slate-400 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {exp.period}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-xs mt-3 font-medium">Click for details →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                  <p className="text-cyan-400 font-medium mt-1">{selected.company}</p>
                  <div className="flex flex-wrap gap-4 text-slate-400 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {selected.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {selected.period}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-white transition-colors ml-4"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={16} className="text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Responsibilities</span>
                </div>
                <ul className="space-y-2">
                  {selected.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
