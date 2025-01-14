import { timergame, resume, snowshop, linkedin, github } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    image: linkedin,
    url: "https://www.linkedin.com/in/r%C5%ABta-rakausk%C4%97-919b93111/",
  },
  {
    id: "github",
    title: "Github",
    image: github,
    url: "https://github.com/RutaRakauske",
  },
];

const experiences = [
  {
    title: "Tech lead & system/app owner in MS Power platform",
    company_name: "AVIA SOLUTIONS GROUP (ASG) PLC",
    date: "2023/02 - 2024/05",
    points: [
      "Owning KYC process system/app: solving incidents, developing change requests (from requirements to go-live), creating technical/maintenance documentation, managing access rights and license for new companies/users.",
      "Updating and developing new API requests.",
      "Creating architecture for web form (for external users), developing, testing and deploying to PROD.",
      "Meeting with group companies respresentatives and designing possible solutions, interacting with other teams on merged solutions.",
    ],
  },
  {
    title: "Frontend development",
    company_name: "",
    date: "2022/08 - Now",
    points: [
      "Developing and maintaining web applications using React.js (+vite).",
      "Integrated APIs and MongoDB to enable seamless communication between the frontend and backend, ensuring efficient data handling.",
      "Leveraged React hooks including useState, useReducer, useContext, useRef, useEffect, and useCallback to manage state, optimize performance, and create dynamic, interactive components.",
      "Have ability to analyze project requirements, understand the full scope, and break it down into reusable, modular components.",
      "Implemented Context API to centralize and efficiently manage application-wide state and Utilized React Portals to render elements outside the main DOM hierarchy (for reusable modals).",
    ],
  },
  {
    title: "Senior Software Engineer in Robotic Process Automation",
    company_name: "Danske Bank AB",
    date: "2016/11 - 2023/02",
    points: [
      "Investigation of API, SI component usage.",
      "Preparing architecture and solution design document.",
      "Developing reusable components and performing peer code review.",
      "Testing (End-to-end) and moving solution to production environment.",
      "Migration between development software versions (Blue Prism), tools itself (Blue Prism → UiPath) and between interacting systems (API, SI components, main company UI system version changes).",
      "Part-time scrum master (20% of time) of development team for a year, responsible for hosting agile ceremonies, collaboration with product owner, helping colleagues to be motivated and productive.",
    ],
  },
  {
    title: "Junior Analyst/Developer in Robotic Process Automation",
    company_name: "Nordea Bank AB",
    date: "2014/07 - 2016/11",
    points: [
      "Simplifying and designing process solution.",
      "Analysing current business processes and gathering requirements.",
      "Developing new components and processes within BluePrism tool, testing them and assuring that current solution is robust.",
      "Preparing process maintenance documentation and solving issues that arise day to day.",
    ],
  },
];

const projects = [
  {
    name: "Winter clothing e-shop",
    description: [
      "The state of the cart is managed globally using React's Context API;",
      "useReducer hook manages state logic for actions like adding and updating items in the shopping cart;",
      "Handling user interactions like adding products to the cart, adjusting item quantities, and opening/closing modals(onClick, onUpdate);",
      "Using React Portal for the CartModal component allows rendering modal dialogs outside of the main DOM hierarchy.",
    ],
    tags: [
      {
        name: "react+vite",
      },
      {
        name: "contextapi",
      },
      {
        name: "css",
      },
    ],
    image: snowshop,
    website_link: "https://rutarakauske.github.io/snow-fun/",
    source_code_link: "https://github.com/RutaRakauske/snow-fun",
  },
  {
    name: "Timer game",
    description: [
      "useState manages remaining time in the timer;",
      "useRef used to maintain mutable values that don’t trigger re-renders, such as for the timer interval;",
      "Handling user interactions like starting, stopping timer;",
      "Using React Portal for the ResultModal component allows rendering modal dialogs outside of the main DOM hierarchy.",
    ],
    tags: [
      {
        name: "react+vite",
      },
      {
        name: "reactportal",
      },
      {
        name: "css",
      },
    ],
    image: timergame,
    website_link: "https://rutarakauske.github.io/timer-game/",
    source_code_link: "https://github.com/RutaRakauske/timer-game",
  },
  {
    name: "Resume page using GRID",
    description: [
      "Responsive layout using CSS Grid - organized grid-template-columns and grid-template-rows setup;",
      "Adapted the Grid layout for various screen sizes using media queries;",
      "Integration of FontAwesome Icons.",
    ],
    tags: [
      {
        name: "html",
      },
      {
        name: "grid",
      },
      {
        name: "css",
      },
    ],
    image: resume,
    website_link: "https://rutarakauske.github.io/resume-grid/",
    source_code_link: "https://github.com/RutaRakauske/resume-grid",
  },
];

export { experiences, projects };
