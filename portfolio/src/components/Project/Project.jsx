import React from "react";
import MultiActionAreaCard from "../Card";
import BiteBlend from "/assets/BiteBlend.jpeg";
import videoTube from "/assets/videoTube.jpeg";
import weatherWise from "/assets/weatherWise.jpeg";
import passwordPro from "/assets/password-pro.jpeg";
import BookHeaven from "/assets/BookHeaven.jpeg";
import Todo from "/assets/Todo.jpeg";
import Trendora from "/assets/Trendora.png";
import Ai_sorting_visualizer from "/assets/Ai_Sorting_Visualizer.png";
import student_management_system from "../../../public/assets/Role-Based-Student-Management-System.jpg";
import { useSelector } from "react-redux";

function Project() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <div
      className={`flex justify-between flex-wrap m-4 gap-4 mt-10 mb-10 ${
        theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
      } rounded-xl md:p-10 `}
    >
      <div>
        <a
          href="https://role-based-student-management-syste.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={student_management_system}
            name={"Role Based Student Management System"}
            dis={
              "Student Management System (MERN Stack) A full-stack MERN application with JWT-based authentication and role-based access control. The system features separate Admin and Student dashboards, where admins can manage student records with pagination, and students can view and update their own profiles. Built with a secure backend (Node.js, Express, MongoDB) and a modern frontend using React, Redux Toolkit, Tailwind CSS, and shadcn/ui, the project emphasizes clean architecture, scalable APIs, and a polished user experience."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://book-store-mu-flax.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={BookHeaven}
            name={"Book Heaven"}
            dis={
              "Engineered a full-stack CRUD application, leveraging a React/Tailwind frontend to deliver a responsive interface with dynamic table/card views and real-time user feedback (Notistack). The backend features a high-performance RESTful API built on Node.js/Express and a PostgreSQL database managed by Prisma. Crucially, the app integrates the Gemini API for AI-powered description generation, increasing content creation speed by 80%, and utilizes Multer/Cloudinary for robust, secure drag-and-drop image uploads."
            }
          />
        </a>
      </div>
      <div>
        <a
          href="https://trendora-lyart.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={Trendora}
            name={"Trendora"}
            dis={
              "Built secure platform with JWT auth, admin/user dashboards, and advanced product filtering, Implemented Cloudinary for image management and PayPal payments (processed $5K+ test transactions) Boosted conversions by 22% with guest checkout and responsive design Built dashboard with CRUD ops for products/orders."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/theCodeCrusaderX/Sorting-Visualizer?tab=readme-ov-file"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={Ai_sorting_visualizer}
            name={"AI Sorting Visualizer"}
            dis={
              "Interactive Sorting Algorithm Visualizer – A real-time visualizer for algorithms like Quick Sort and Bubble Sort, featuring AI-generated explanations via Google Gemini API. Built with the Canvas API for dynamic rendering, with customizable speed and array size for interactive learning."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/posts/thecodecrusaderx_backenddevelopment-nodejs-expressjs-activity-7237829858423103488-D8ch?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={videoTube}
            name={"videoTube"}
            dis={
              "Built backend for a YouTube-like platform with Node.js and Express, handling video uploads, streaming, and user interactions. Used JWT for authentication, Cloudinary for video storage, and Multer for file handling. Designed a RESTful API for uploads, comments, and streaming, with MongoDB for data management."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://weather-app-sigma-one-22.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={weatherWise}
            name={"weatherWise"}
            dis={
              "developed a Weather App using HTML, CSS, and JavaScript that fetches real-time weather data from an external API and displays dynamic weather information. The app features a responsive UI, ensuring compatibility across different screen sizes and devices."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://recipefinder-frontend.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={BiteBlend}
            name={"BiteBlend"}
            dis={
              "Built a full-stack app with React, Node, and MongoDB. Integrated JWT for authentication, Cloudinary for images, and used Redux for state. Designed a responsive UI with Material UI and Tailwind. Added Gimeni AI for recipes, with pagination and search in history."
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://learning-reactjs-hazel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={passwordPro}
            name={"Password-Pro"}
            dis={
              "Developed a Password Generator in React.js that allows users to generate secure passwords with customizable length and options for numbers and special characters. It includes a Copy feature for quick clipboard access, utilizing React hooks to manage state efficiently"
            }
          />
        </a>
      </div>

      <div>
        <a
          href="https://learning-reactjs-gnq2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MultiActionAreaCard
            img={Todo}
            name={"Todo App"}
            dis={
              "Developed a Todo App using React and the Context API for state management. The app allows users to add, edit, and delete tasks with a clean and responsive user interface, efficiently handling global state without prop drilling."
            }
          />
        </a>
      </div>
    </div>
  );
}

export default Project;
