import { useState } from "react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const experiences = [
    {
      title: "Data & Analytics Lead",
      company: "NOS SGPS",
      location: "Porto, Portugal",
      period: "06/2023 - Atual",
      description: `- Criação de scripts de consulta e processamento no Google BigQuery.

- Desenvolvimento de scripts em PySpark para processos de ETL no banco HIVE em clusters Hadoop.

- Liderança da equipe de Produção e Analytics.

- Gestão de Projetos utilizando a ferramenta Jira.

- Administração do Banco de Dados HIVE.

- Administração do Banco de Dados no Google Big Query.

- Gestão dos KPIs de qualidade da rede.

- Criação de dashboards na ferramenta PowerBI.

- Criação e análise de relatórios gerenciais.

- Suporte a todas as áreas transversais.

- Desenvolvimento de robôs em Python.

- Versionamento de códigos utilizando GitHub.`,
    },
    {
      title: "Big Data Consultant",
      company: "Alter Solutions Portugal",
      location: "Porto, Portugal",
      period: "09/2021 - 06/2023",
      description: `Consultoria para a empresa NOS Comunicações

- Criação de scripts de consulta e processamento no Google BigQuery.

- Desenvolvimento de scripts em PySpark para processos de ETL no banco HIVE em clusters Hadoop.

- Gestão dos KPIs de qualidade da rede.

- Acompanhamento de projetos utilizando Jira.

- Criação de dashboards na ferramenta PowerBI.

- Criação e análise de relatórios gerenciais.

- Suporte a todas as áreas da Diretoria.

- Desenvolvimento de robôs em Python.

- Versionamento de códigos utilizando GitHub.`,
    },
    {
      title: "Specialist Data Management",
      company: "TIM Brasil",
      location: "Rio de Janeiro, Brasil",
      period: "06/2021 - 08/2021",
      description: `
- Gestão do Banco de Dados da área realizando a criação e manutenção de Views, Triggers, Functions, Stored Procedures, Indexing and Joins;

- Liderança da Equipe de Data Management;

- Criação de DashBoards na ferramenta PowerBI;

- Desenvolvimento de robôs em Python;

- Criação de ETL com Python e Visual Studio (SSIS);

- Criação e Análise de Report Gerencias;

- Suporte a todas as áreas da Diretoria;
      `,
    },
    {
      title: "Senior Consultant",
      company: "TIM Brasil",
      location: "Rio de Janeiro, Brasil",
      period: "12/2019 - 06/2021",
      description: `
      
    - Criação de DashBoards na ferramenta PowerBI;

    - Criação de Automações e Rôbos em Python;

    - Desenvolvimento de aplicações em Power Apps;

    - Desenvolvimento e automatizações com Microsoft Power Automate;

    - Criação de Sites Internos em Microsoft SharePoint;

    - Criação e Análise de Report Gerencias;

    - Suporte a todas as áreas da Diretoria;
`,
    },
    {
      title: "MIS Consultant",
      company: "TIM Brasil",
      location: "Rio de Janeiro, Brasil",
      period: "08/2017 - 12/2019",
      description: `- Criação de DashBoards na ferramenta PowerBI;

- Responsável pelo processo de ETL (utilizando a ferramenta SSIS), das bases utilizadas na área;

- Responsável pelo Banco de Dados (SQL Server) da área (Criação de Stored Procedures, Views, Functios, Trigger, Tabelas, Index e consulta que alimentam os diversos relatórios da área;

- Criação e Análise de Report Gerencias;

- Suporte a todas as áreas da Diretoria;`,
    },
    {
      title: "MIS Specialist",
      company: "Brasil Center Telecomunicações",
      location: "Rio de Janeiro, Brasil",
      period: "06/2014 - 08/2017",
      description: `
      - Liderança da Equipe de Inteligência da Informação;

      - Criação e manutenção de análises, consultas e Dashboards na ferramenta OBIEE;

- Elaboração de Prévias de Orçamento, análises e validações de faturamentos;

- Desenvolvimento de apresentações gerenciais;

- Criação e manutenção de consultas em banco SQL (Criação de Querys e Views);

- Criação de consultas em VBA diretamente com o SQL e ACCESS.`,
    },
    {
      title: "Senior Analyst",
      company: "Atento Brasil",
      location: "Rio de Janeiro, Brasil",
      period: "04/2012 - 06/2014",
      description: `- Consultoria e implementação de relatórios, estudos, análise de indicadores e resultados para tomada de decisão com foco na performance e na melhora dos resultados das operações para aumento de resultado e rentabilidade do produto.

- Implementação de análise de indicadores através de consultoria presencial e a distância gerando indicadores voltados para cada produto.

- Atuação em vários segmentos com clientes diversos, tais como os setores de telefonia, internet e, bancário.`,
    },
  ];

  const openPopup = (exp) => {
    setSelectedExperience(exp);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Professional Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute h-full border-l-2 border-gray-300 left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              } items-center w-full`}
            >
              <div className="w-1/2 px-4">
                <div
                  className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-gray-400 cursor-pointer"
                  onClick={() => openPopup(exp)}
                >
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 font-bold">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                  <p className="text-gray-500 italic">{exp.period}</p>
                </div>
              </div>
              <div className="w-1/2 px-4">
                <div className="text-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full mx-auto"></div>
                  {index < experiences.length - 1 && (
                    <div className="h-16 border-l-2 border-gray-300 mx-auto"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up para exibir a descrição completa */}
      {isPopupOpen && selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full absolute">
            <h3 className="text-2xl font-semibold text-gray-700">
              {selectedExperience.title}
            </h3>
            <p className="text-gray-600 font-bold">
              {selectedExperience.company}
            </p>
            <p className="text-gray-600">{selectedExperience.location}</p>
            <p className="text-gray-500 italic">{selectedExperience.period}</p>
            <p className="text-gray-700 mt-4 whitespace-pre-line text-left">
              {selectedExperience.description}
            </p>
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
