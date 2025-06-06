import beehyvImage from "../images/experience/beehyv.png";
import iauroImage from "../images/experience/iauro.png";
import privadoImage from "../images/experience/privado.png";
import javascriptCertificateImage from "../images/certificates/javascript_intermediate.jpg";
import sqlCertificateImage from "../images/certificates/sql_advanced.jpg";
import ethereumAndSolidityCertificateImage from "../images/certificates/ethereum_and_solidity.jpg";
import reactCompleteGuideImage from "../images/certificates/react_complete_guide.jpg";
import theCompleteWebDevelopmentBootcampImage from "../images/certificates/the_complete_web_development_bootcamp.jpg";
import problemSolvingIntermediateImage from "../images/certificates/problem_solving_intermediate.jpg";
import nodejsImage from "../images/technologies/backend/nodejs.png";
import expressImage from "../images/technologies/backend/express.png";
import djangoImage from "../images/technologies/backend/django.png";
import fastapiImage from "../images/technologies/backend/fastapi.png";
import socketioImage from "../images/technologies/backend/socketio.png";
import celeryImage from "../images/technologies/backend/celery.png";
import mongooseImage from "../images/technologies/backend/mongoose.png";
import openaiImage from "../images/technologies/artificial_intelligence/openai.png";
import claudeImage from "../images/technologies/artificial_intelligence/claude.png";
import geminiImage from "../images/technologies/artificial_intelligence/gemini.png";
import huggingfaceImage from "../images/technologies/artificial_intelligence/huggingface.png";
import groqImage from "../images/technologies/artificial_intelligence/groq.png";
import llamaImage from "../images/technologies/artificial_intelligence/llama.png";
import langchainImage from "../images/technologies/artificial_intelligence/langchain.png";
import langsmithImage from "../images/technologies/artificial_intelligence/langsmith.png";
import langgraphImage from "../images/technologies/artificial_intelligence/langgraph.png";
import reactImage from "../images/technologies/frontend/react.png";
import nextjsImage from "../images/technologies/frontend/next-js.png";
import reduxImage from "../images/technologies/frontend/redux.png";
import bootstrapImage from "../images/technologies/frontend/bootstrap.png";
import htmlImage from "../images/technologies/frontend/html.png";
import cssImage from "../images/technologies/frontend/css.png";
import graphqlImage from "../images/technologies/frontend/graphql.png";
import d3Image from "../images/technologies/frontend/d3.png";
import cplusPlusImage from "../images/technologies/languages/c_plus_plus.png";
import javascriptImage from "../images/technologies/languages/javascript.png";
import typescriptImage from "../images/technologies/languages/typescript.png";
import pythonImage from "../images/technologies/languages/python.png";
import javaImage from "../images/technologies/languages/java.png";
import cImage from "../images/technologies/languages/c.png";
import mongodbImage from "../images/technologies/databases/mongodb.png";
import mysqlImage from "../images/technologies/databases/mysql.png";
import firebaseImage from "../images/technologies/databases/firebase.png";
import postgresqlImage from "../images/technologies/databases/postgresql.png";
import pineconeImage from "../images/technologies/databases/pinecone.png";
import sqliteImage from "../images/technologies/databases/sqlite.png";
import redisImage from "../images/technologies/databases/redis.png";
import solidityImage from "../images/technologies/web3/solidity.png";
import metamaskImage from "../images/technologies/web3/metamask.png";
import ethereumImage from "../images/technologies/web3/ethereum.png";
import githubImage from "../images/technologies/software/github.png";
import vscodeImage from "../images/technologies/software/vscode.png";
import pycharmImage from "../images/technologies/software/pycharm.png";
import ubuntuImage from "../images/technologies/software/ubuntu.png";
import postmanImage from "../images/technologies/software/postman.png";
import dbeaverImage from "../images/technologies/software/dbeaver.png";
import hackerrankImage from "../images/certificates/companies/hackerrank.png";
import udemyImage from "../images/certificates/companies/udemy.png";
import githubIconImage from "../images/socialicons/github.png";
import linkedinIconImage from "../images/socialicons/linkedin.png";
import googleDriveIconImage from "../images/socialicons/drive.png";
import leetcodeIconImage from "../images/socialicons/leetcode.png";
import hackerrankIconImage from "../images/socialicons/hackerrank.png";
import codeforcesIconImage from "../images/socialicons/codeforces.png";
import codechefIconImage from "../images/socialicons/codechef.png";

export const Titles = [
  "B.Tech - IIT Dhanbad'23 ",
  "Software Developer - Privado.ai",
];

export const EducationDetails = [
  {
    year: 2023,
    designation: "B.Tech in Petroleum Engineering",
    institute: "IIT(ISM) Dhanbad",
  },
  {
    year: 2019,
    designation: "Higher Secondary Education (12th Grade)",
    institute: "Arihant College of Arts, Commerce & Science, Pune (MH)",
  },
  {
    year: 2018,
    designation: "Eleventh Grade",
    institute: "Arihant College of Arts, Commerce & Science, Pune (MH)",
  },
  {
    year: 2017,
    designation: "Senior Secondary Education (10th Grade)",
    institute: "Central Public School, Mehkar (MH)",
  },
];

export const Experience = [
  {
    time: "Feb '25 - Present",
    designation: "Software Developer",
    company: "Privado.ai",
    location: "Pune, Maharashtra",
    image: privadoImage,
    desc: [
      "Responsible for end-to-end product ownership, including initial POCs, frontend and backend engineering, UI/UX design, testing, and post release maintenance",
      "Built efficient MongoDB aggregation pipelines with pre-computation for graph dashboard.",
      "Worked with D3.js to build interactive graphs for dashboard visualizations",
      "Worked on the MobileScan module that embeds a mobile device in the UI, captures user actions, and records network logs for PII and third-party analysis",
      "Ensured efficient session handling for embedded devices billed per minute ,balancing seamless user interaction with cost-effective device usage",
    ],
    techStack: [
      "Python",
      "Django",
      "ReactJS",
      "MongoDB",
      "Amazon AWS",
      "Docker",
      "Celery",
      "Redis",
      "D3.js",
    ],
  },
  {
    time: "July '23 - Present",
    designation: "Software Developer",
    company: "Beehyv Software Solutions Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    image: beehyvImage,
    desc: [
      "Co-developed GIDR - A knowledge management and document querying software that uses AI to provide insights and answers from your documents",
      "Built the query-answering system using document vector embeddings and the RAG(Retrieval-Augmented Generation) framework",
      "Utilized LangGraph to build independent, Reusable Component Nodes that provides users flexibility to design custom query-answering workflows",
      "Worked on scraping websites and various file types to extract data and generate vector embeddings",
      // "Implemented 3 Vector-Embedding generation methods as Independent MicroServices, managed by Messaging Queues.",
      "Reduced the Search service response time by 80% by the use of MultiThreading and Caching.",
      "Boosted Ingestion process's performance by 70% using Multi-Threading and Batch Calls.",
      "Resolved over 20 critical bugs and constantly addressed production issues to ensure system stability.",
      "Regularly engaged in Research and Developing proof-of-concepts (POCs) to enhance project development.",
      "Integrated GIDR with over 25 Models like OpenAI, Claude, Gemini, Groq, LLaMA and Sambanova.",
      "Developed SQL and database migration scripts, along with scripts for vector databases and similarity search functions.",
    ],
    techStack: [
      "LangChain",
      "LangGraph",
      "FastAPI",
      "NodeJS",
      "OpenAI",
      "Pinecone",
      "ReactJS",
      "PostgreSQL",
      "Google Cloud Platform",
    ],
  },
  {
    time: "May '22 - July '22",
    designation: "Software Developer - Intern",
    company: "Iauro Systems Pvt. Ltd.",
    location: "Pune, Maharashtra",
    image: iauroImage,
    desc: [
      "Worked on building a Web-App for selling Handmade Products.",
      "Implemented backend using Vendure (A Headless Application) and frontend using React JS.",
      "Integrated Customizable Coupons and Promotions Mechanism.",
      "Worked on building custom Plugins to modify behavior of Vendure.",
    ],
    techStack: ["ReactJS", "Vendure", " MySQL", " GraphQL", " Stripe"],
  },
];

// be careful while Updating the length, check header file for display. Write a better logic for header
export const socialIcons = [
  {
    name: "My GitHub",
    link: "https://github.com/Yash01607",
    image: githubIconImage,
  },
  {
    name: "My LinkedIn",
    link: "https://www.linkedin.com/in/yash-agrawal-a150991a5/",
    image: linkedinIconImage,
  },
  {
    name: "My Resume",
    link: "https://drive.google.com/file/d/10BBykMKIkzJ7qwfe51EpQUxarLdeoBVU/view?usp=sharing",
    image: googleDriveIconImage,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/Yash_01/",
    image: leetcodeIconImage,
  },
  {
    name: "Hackerrank",
    link: "https://www.hackerrank.com/profile/Yash_01",
    image: hackerrankIconImage,
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/Yash_01",
    image: codeforcesIconImage,
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/yash3457",
    image: codechefIconImage,
  },
];

export const heroSectionText =
  "As a full-stack web developer, I possess a versatile skill set in both front-end and back-end development, ready to tackle diverse web projects with enthusiasm and a drive for excellence.";

export const aboutMeText = [
  "I'm a Full Stack Software Developer with a knack for problem-solving and a genuine enthusiasm for coding.",
  "I've professional experience in Python (Django and FastAPI) and AI tools like OpenAI. Additionally, during my time at IIT Dhanbad, I've worked with C++ and JavaScript (Node and React) , gaining a diverse skill set in both backend and frontend development.",
  "I'm excited to bring this combination of industry experience and self-driven exploration to new challenges and eager to utilize this knowledge in this ever-evolving tech industry!",
];

export const contactDetails = {
  phone: "+91-89755-17715",
  email: " yash.ra301@gmail.com",
  address: "Kondapur, Hyderabad, Telangana 500084",
};

export const certificates = [
  {
    title: "JavaScript(Intermediate)",
    image: javascriptCertificateImage,
    issuedBy: "Hackerrank",
    issuedOn: "Jan 2024",
    logo: hackerrankImage,
    link: "https://www.hackerrank.com/certificates/62b40426f498",
  },
  {
    title: "SQL(Advanced)",
    image: sqlCertificateImage,
    issuedBy: "Hackerrank",
    issuedOn: "Jan 2024",
    logo: hackerrankImage,
    link: "https://www.hackerrank.com/certificates/afe3212a1baa",
  },
  {
    title: "Ethereum and Solidity",
    image: ethereumAndSolidityCertificateImage,
    issuedBy: "Udemy",
    issuedOn: "April 2023",
    logo: udemyImage,
    link: "https://www.udemy.com/certificate/UC-17101ac8-122b-4052-b7db-654b13647dcd/",
  },
  {
    title: "React - The Complete guide",
    image: reactCompleteGuideImage,
    issuedBy: "Udemy",
    issuedOn: "July 2022",
    logo: udemyImage,
    link: "https://www.udemy.com/certificate/UC-e45c9f0c-c0a1-454d-92b7-81788b4113b7/",
  },
  {
    title: "The Complete 2021 Web Development Bootcamp",
    image: theCompleteWebDevelopmentBootcampImage,
    issuedBy: "Udemy",
    issuedOn: "July 2021",
    logo: udemyImage,
    link: "https://www.udemy.com/certificate/UC-11a1164a-d4bc-4daf-ba4b-d0fd60fb0f0a/",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuedBy: "Hackerrank",
    image: problemSolvingIntermediateImage,
    issuedOn: "Sep 2020",
    logo: hackerrankImage,
    link: "https://www.hackerrank.com/certificates/94c876ad5f78",
  },
];

export const Skills = [
  {
    category: "Backend",
    skills: [
      { name: "Django", image: djangoImage },
      { name: "FastAPI", image: fastapiImage },
      { name: "NodeJS", image: nodejsImage },
      { name: "ExpressJS", image: expressImage },
      { name: "Socket.IO", image: socketioImage },
      { name: "Celery", image: celeryImage },
      { name: "Mongoose", image: mongooseImage },
    ],
  },
  {
    category: "AI Tech",
    skills: [
      { name: "OpenAI", image: openaiImage },
      { name: "Claude AI", image: claudeImage },
      { name: "Gemini AI", image: geminiImage },
      { name: "HuggingFace AI", image: huggingfaceImage },
      { name: "Groq AI", image: groqImage },
      { name: "LLaMA", image: llamaImage },
      { name: "LangChain", image: langchainImage },
      { name: "LangSmith", image: langsmithImage },
      { name: "LangGraph", image: langgraphImage },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", image: reactImage },
      { name: "NextJS", image: nextjsImage },
      { name: "Redux", image: reduxImage },
      { name: "BootStrap", image: bootstrapImage },
      { name: "CSS", image: cssImage },
      { name: "GraphQL", image: graphqlImage },
      { name: "D3.js", image: d3Image },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "C++", image: cplusPlusImage },
      { name: "JavaScript", image: javascriptImage },
      { name: "Python", image: pythonImage },
      { name: "Java", image: javaImage },
      { name: "C", image: cImage },
      { name: "TypeScript", image: typescriptImage },
      { name: "HTML", image: htmlImage },
    ],
  },
  {
    category: "DataBases",
    skills: [
      { name: "MongoDB", image: mongodbImage },
      { name: "MySQL", image: mysqlImage },
      { name: "Firebase", image: firebaseImage },
      { name: "PostgreSQL", image: postgresqlImage },
      { name: "Pinecone", image: pineconeImage },
      { name: "Redis", image: redisImage },
      { name: "SQLite", image: sqliteImage },
    ],
  },
  {
    category: "Web3",
    skills: [
      { name: "Solidity", image: solidityImage },
      { name: "Metamask", image: metamaskImage },
      { name: "Ethereum", image: ethereumImage },
    ],
  },
  {
    category: "DevTools",
    skills: [
      { name: "Github", image: githubImage },
      { name: "VsCode", image: vscodeImage },
      { name: "PyCharm", image: pycharmImage },
      { name: "Ubuntu", image: ubuntuImage },
      { name: "Postman", image: postmanImage },
      { name: "DBeaver", image: dbeaverImage },
    ],
  },
];
