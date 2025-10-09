import React from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  const theme = useSelector((state) => state.themeChanger.value);
  console.log(theme);

  return (
    <div
      className={`mt-10 mx-auto w-full max-w-7xl md:flex justify-around mb-10 md:h-screen items-center ${theme ? "bg-[#1A1A1A]" : "bg-gray-100 "
        } rounded-xl p-8`}
    >
      <div className="md:w-2/4">
        <h2
          className={`text-4xl font-bold sm:text-5xl m-3 mt-10 ${theme ? "text-white" : "text-black"
            }`}
        >
          {/* {currentWord}_ */}
          Hello!👋
          <span className="sm:hidden">
            <br />
          </span>
          <span
            className={` sm:block text-xl mt-5 ${theme ? "text-white" : "text-black"
              }`}
          >
            I am Dinesh
          </span>
          <span className="sm:hidden">
            <br />
          </span>
          <span
            className={`sm:block text-xl mt-5 ${theme ? "text-white" : "text-black"
              }`}
          >
            Full Stack Developer
          </span>
        </h2>
        <p className={`mt-10 ${theme ? "text-white" : "text-black"}`}>
          I am a dedicated Full-Stack Web Developer with a passion for transforming ideas into functional, clean, and efficient digital solutions. My expertise spans the entire development lifecycle, from architecting scalable RESTful APIs using Node.js/Express and database management (PostgreSQL/Prisma or MongoDB), to delivering intuitive, responsive user experiences with React and modern UI frameworks. I thrive on solving complex problems and integrating emerging technologies, such as AI/Gemini API, to create highly valuable and optimized applications.
        </p>
        <button
          className={`flex items-center gap-3 mt-8 font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out ${theme
              ? "bg-white text-black hover:bg-green-900 hover:text-white"
              : "bg-black text-white hover:bg-green-900"
            }`}
          onClick={() => window.open("./assets/Resume.pdf")}
        >
          <FaDownload className="text-xl" />
          Download Resume
        </button>
      </div>
      <div>
        <center>
          <img
            src="/assets/me.jpg"
            className=" mt-4 h-[200px] w-[200px] rounded-full object-cover md:w-[400px] md:h-[400px] md:hover:h-[450px] md:hover:w-[450px] transition-all duration-300 ease-in-out animate-scale shadow-2xl"
          />
        </center>
      </div>
    </div>
  );
}
