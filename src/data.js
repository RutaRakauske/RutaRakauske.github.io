import snowFunPic from "./assets/snow-fun.jpg";
import resumeGrid from "./assets/resume-grid.jpg";

const resumeData = {
  workExperience: [
    {
      id: "ex1",
      name: "Tech lead & system/app owner in MS Power platform",
      company: "AVIA SOLUTIONS GROUP (ASG) PLC",
      date: "2023/02 - 2024/05",
      keyPoints: [
        "Owning KYC process system/app: solving incidents, developing change requests (from requirements to go-live), creating technical/maintenance documentation, managing access rights and license for new companies/users;",
        "Updating and developing new API requests;",
        "Creating architecture for web form (for external users), developing, testing and deploying to PROD;",
        "Meeting with group companies respresentatives and designing possible solutions, interacting with other teams on merged solutions.",
      ],
    },
    {
      id: "ex2",
      name: "Senior Software Engineer in Robotic Process Automation",
      company: "Danske Bank AB",
      date: "2016/11 - 2023/02",
      keyPoints: [
        "Investigation of API, SI component usage;",
        "Preparing architecture and solution design document;",
        "Developing reusable components and performing peer code review;",
        "Testing (End-to-end) and moving solution to production environment;",
        "Migration between development software versions (Blue Prism), tools itself (Blue Prism → UiPath) and between interacting systems (API, SI components, main company UI system version changes);",
        "Part-time scrum master (20% of time) of development team for a year, responsible for hosting agile ceremonies, collaboration with product owner, helping colleagues to be motivated and productive.",
      ],
    },
    {
      id: "ex3",
      name: "Junior Analyst/Developer in Robotic Process Automation",
      company: "Nordea Bank AB",
      date: "2016/02 - 2016/11",
      keyPoints: [
        "Simplifying and designing process solution;",
        "Analysing current business processes and gathering requirements;",
        "Developing new components and processes within BluePrism tool, testing them and assuring that current solution is robust;",
        "Preparing process maintenance documentation and solving issues that arise day to day.",
      ],
    },
    {
      id: "ex4",
      name: "Assistant in EURO and SEPA projects",
      company: "Nordea Bank AB",
      date: "2014/07 - 2016/02",
      keyPoints: [
        "Testing cash management products and services in various banking systems;",
        "Participation in Lithuanian Banking Association meetings;",
        "Creating test cases for new product and verifying/testing it in banking systems;",
        "Handling product migration technical process (direct debit service migration to e-invoice service);",
        "Daily maintenance tasks (incidents handling, new system fixes verification, communicating with corporate customers etc.).",
      ],
    },
  ],
  education: [
    {
      id: "ed1",
      name: "Front-end trainings",
      company: "Baltic Institute of Technologies, Vilnius(Lithuania)",
      date: "2022/01 - 2022/08",
      keyPoints: [
        "HTML, CSS, Javascript",
        "Node.js",
        "basics for databases and API",
        "React",
      ],
    },
    {
      id: "ed2",
      name: "Scrum Master trainings and certification(CSM)",
      company: "ScrumAlliance, Vilnius(online)",
      date: "2019/09",
      keyPoints: ["Agile methodology", "Scrum master responsibilities"],
    },
    {
      id: "ed3",
      name: "BluePrism trainings",
      company: "Ernst&Young consultant, Riga (Latvia)",
      date: "2016/06 - 2016/09",
      keyPoints: [
        "BluePrism software trainings",
        "Solution architecture/design documentation",
      ],
    },
    {
      id: "ed4",
      name: "BSc in Economics",
      company: "Vilnius University, Kaunas(Lithuania)",
      date: "2010/09 - 2014/06",
      keyPoints: [
        "Higher Mathematics",
        "Econometrics",
        "Informatics",
        "Financial Accounting",
        "Corporate Finance",
        "Macro & Micro Economics",
      ],
    },
  ],
  skills: [
    {
      id: "sk1",
      name: "Stack",
      skills:
        "CSS/SCSS, HTML, JavaScript, React, Node.js, SQL, C# (basics), TypeScript(basics), Git.",
      company: "",
      date: "",
      keyPoints: "",
    },
    {
      id: "sk2",
      name: "Tools",
      skills:
        "Visual Studio (2019 and Code), version control tools (Github, Bitbucket, Azure DevOps), Soap UI, Postman, Microsoft SQL Server Management Studio 17, BluePrism, UiPath, Atlassian products (Confluence, Jira), MS Power Platform (Power Apps, Power Pages, Power Automate), MS Office (Word, Excel, Outlook).",
      company: "",
      date: "",
      keyPoints: "",
    },
    {
      id: "sk3",
      name: "Soft skills",
      skills:
        "Responsible, detailed, punctual, ownership, open-minded and always learning. Gallup first 4 strengths: Harmony, Responsibility, Individualization, Empathy.",
      company: "",
      date: "",
      keyPoints: "",
    },
  ],
  portfolio: [
    {
      id: "po1",
      name: "Winter clothing shop",
      skills: "",
      company: "",
      date: "",
      keyPoints: [
        "Stack: React+Vite, CSS, Javascript;",
        "The state of the cart is managed globally using React's Context API;",
        "useReducer hook manages state logic for actions like adding and updating items in the shopping cart;",
        "Reusable components like Header, Product, Shop, and CartModal are easy maintainable;",
        "Handling user interactions like adding products to the cart, adjusting item quantities, and opening/closing modals(onClick, onUpdate);",
        "Using React Portal for the CartModal component allows rendering modal dialogs outside of the main DOM hierarchy;",
        "Responsive layout using CSS Flexbox.",
      ],
      image: snowFunPic,
      url: "https://rutarakauske.github.io/snow-fun/",
      gitHub: "https://github.com/RutaRakauske/snow-fun",
    },
    {
      id: "po2",
      name: "Resume page using Grid",
      skills: "",
      company: "",
      date: "",
      keyPoints: [
        "Stack: HTML, CSS;",
        "Responsive layout using CSS Grid - organized grid-template-columns and grid-template-rows setup;",
        "Adapted the Grid layout for various screen sizes using media queries;",
        "Integration of FontAwesome Icons.",
      ],
      image: resumeGrid,
      url: "https://rutarakauske.github.io/resume-grid/",
      gitHub: "https://github.com/RutaRakauske/resume-grid",
    },
  ],
};

export default resumeData;
