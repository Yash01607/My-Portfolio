import agrotechImage from "../images/projects/agrotech.png";
import reactImage from "../images/technologies/frontend/react.png";
import reduxImage from "../images/technologies/frontend/redux.png";
import nodejsImage from "../images/technologies/backend/nodejs.png";
import expressImage from "../images/technologies/backend/express.png";
import mongodbImage from "../images/technologies/databases/mongodb.png";
import socketioImage from "../images/technologies/backend/socketio.png";
import crowdwalletImage from "../images/projects/crowdwallet.png";
import nextjsImage from "../images/technologies/frontend/next-js.png";
import solidityImage from "../images/technologies/web3/solidity.png";
import metamaskImage from "../images/technologies/web3/metamask.png";
import memoreaumImage from "../images/projects/memoreaum.png";
import simplishopeeImage from "../images/projects/simplishopee.png";
import bootstrapImage from "../images/technologies/frontend/bootstrap.png";
import expenseTrackerImage from "../images/projects/expense-tracker.png";
import djangoImage from "../images/technologies/backend/django.png";

export const projects = [
  {
    title: "SimpliShopee",
    description:
      "Developed a production ready E-commerce website using Django and ReactJS from scratch",
    image: simplishopeeImage,
    tags: ["ReactJS", "Django", "ReduxJS", "BootStrap"],
    tagImgs: [reactImage, djangoImage, reduxImage, bootstrapImage],
    source: "https://github.com/Yash01607/SimpliShopee",
    visit: "https://simplishopee.pythonanywhere.com/",
    id: 4,
    details: [
      {
        heading: "User Authentication and Authorization",
        description: [
          "Secure user registration and login functionalities.",
          "Role-based access control to manage user permissions.",
        ],
      },
      {
        heading: "Product Management",
        description: [
          "Intuitive product catalog with detailed product information.",
          "Support for product categories, tags(Sub Categories) and filters.",
          "Product search functionality.",
        ],
      },
      {
        heading: "Shopping Cart",
        description: [
          "User-friendly shopping cart for adding, updating, and removing items.",
          "Real-time cart updates without page refresh using React and Redux.",
        ],
      },
      {
        heading: "Checkout Process",
        description: [
          "Seamless and secure checkout experience.",
          "Order summary and confirmation.",
        ],
      },
      {
        heading: "Order Management",
        description: [
          "Order history and tracking for users.",
          "Order status updates.",
        ],
      },
      {
        heading: "Admin Dashboard",
        description: [
          "Comprehensive admin panel for managing products, orders, and users.",
        ],
      },
      {
        heading: "Responsive Design",
        description: [
          "Mobile-friendly design for optimal user experience across devices.",
        ],
      },
      {
        heading: "Security",
        description: [
          "HTTPS implementation for secure data transmission.",
          "Protection against common web vulnerabilities.",
        ],
      },
    ],
  },

  {
    title: "CrowdWallet",
    description:
      "Crowd Wallet facilitates project crowdfunding, utilizing Blockchain Technology for Entrepreneurs.",
    image: crowdwalletImage,
    tags: ["NextJS", "Solidity", "Metamask"],
    tagImgs: [nextjsImage, solidityImage, metamaskImage],
    source: "https://github.com/Yash01607/CrowdCoin",
    visit: "https://crowd-coin-yash01607.vercel.app/",
    id: 2,
    details: [
      {
        heading: "Crowdfunding Mechanism",
        description: [
          "Enables entrepreneurs to create crowdfunding campaigns, detailing their projects and funding goals.",
          "Contributors can securely contribute funds using cryptocurrency transactions.",
        ],
      },
      {
        heading: "Transparency through Voting",
        description: [
          "Implements a voting system where contributors can express approval or disapproval of spending requests.",
          "Decisions of spending are made based on the results of voting.",
        ],
      },
      {
        heading: "Blockchain Technology",
        description: [
          "Built on the Blockchain for enhanced security, transparency, and decentralization.",
          "Utilizes smart contracts written in Solidity for handling fund transactions and voting processes.",
        ],
      },
      {
        heading: "Smart Contracts",
        description: [
          "Utilizes Solidity-based smart contracts for managing and executing crowdfunding campaigns.",
          "Smart contracts automatically handle fund disbursement based on community-approved spending requests.",
        ],
      },
    ],
  },
  {
    title: "Memoreaum",
    description:
      "Created a user-friendly social media app with the MERN stack, enabling seamless sharing of moments and events.",
    image: memoreaumImage,
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    tagImgs: [mongodbImage, expressImage, reactImage, nodejsImage],
    source: "https://github.com/Yash01607/Memoreaum",
    visit: "https://memoreaum.onrender.com/",
    id: 3,
    details: [
      {
        heading: "User Authentication",
        description: [
          "Implemented secure Google OAuth for user registration and login, ensuring a reliable and user-friendly authentication process.",
          "Also user can login through username and password. Achieved Security using JWT Auth.",
        ],
      },
      {
        heading: "Memory Sharing",
        description: [
          "Users can share their memories by creating posts and attaching images to post.",
        ],
      },
      {
        heading: "News Feed",
        description: [
          "Dynamic news feed displaying a chronological order of all shared memories.",
        ],
      },
      {
        heading: "Interactivity",
        description: [
          "Users can like others memories.",
          "Commenting feature allows users to share thoughts.",
        ],
      },
    ],
  },
  {
    title: "AgroTech",
    description:
      "Developed a MERN Stack E-commerce Web Application for agricultural products.",
    image: agrotechImage,
    tags: ["ReactJS", "ReduxJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.IO"],
    tagImgs: [
      reactImage,
      reduxImage,
      nodejsImage,
      expressImage,
      mongodbImage,
      socketioImage,
    ],
    source: "https://github.com/Yash01607/Ecommerce_website",
    visit: "https://agrotech-yajt.onrender.com/",
    id: 1,
    details: [
      {
        heading: "User Authentication and Security",
        description: [
          "Secure user registration and login functionalities using JSON Web Token (JWT) for enhanced security.",
          "Allows users to securely purchase products and track their order history.",
        ],
      },
      {
        heading: "Live Chat with Admin",
        description: [
          "Implements live chat functionality using Socket.io for real-time communication between customers and admin users.",
        ],
      },
      {
        heading: "Dynamic Rating and Review System",
        description: [
          "Users can rate and review products, providing valuable feedback to both farmers and buyers.",
        ],
      },
      {
        heading: "Search and Filtering Mechanism",
        description: [
          "Robust product search and filtering options for efficient navigation.",
          "Allows users to find products based on categories, price range, ratings, and other relevant parameters.",
        ],
      },
      {
        heading: "Admin Dashboard",
        description: [
          "Comprehensive admin panel for managing products, categories, user accounts, and order details.",
          "Analytics tools providing insights into total sales and total users.",
        ],
      },
    ],
  },
  {
    title: "Expense Tracker",
    description:
      "Developed a user friendly Expense Tracker Web-App where users can digitally keep track of their monthly expenses.",
    image: expenseTrackerImage,
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    tagImgs: [reactImage, nodejsImage, expressImage, mongodbImage],
    source: "https://github.com/Yash01607/Expense-Tracker",
    visit: "https://expense-tracker-t01y.onrender.com/",
    id: 6,
    details: [
      {
        heading: "User Authentication",
        description: [
          "JWT authentication for secure user login and session management.",
        ],
      },
      {
        heading: "Expense Management",
        description: [
          "User-friendly interface for adding and managing expenses.",
          "User can view their expenses.",
        ],
      },
      {
        heading: "Monthly Expense Graph",
        description: [
          "Graphical representation of monthly expenses compared to salary.",
        ],
      },
    ],
  },
];
