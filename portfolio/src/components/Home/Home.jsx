import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "../../App.css";

export default function Home() {
  var loop = ["developer  ","ui/ux  ","React  ","full stack web dev  ","javascript  "]
  const [currentWord, setCurrentWord] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCharIndex((prevCharIndex) => {
        if (prevCharIndex < loop[wordIndex].length) {
          setCurrentWord(loop[wordIndex].substring(0, prevCharIndex + 1));
          return prevCharIndex + 1;
        } else {
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % loop.length);
          return 0;
        }
      });
    }, 200); // Adjust the speed by changing the interval duration

    return () => clearInterval(handle);
  }, [wordIndex, loop]);

return (
    <div className="mt-10 mx-auto w-full max-w-7xl md:flex justify-around mb-10">
      

      <div className="md:w-2/4">
        <h2 className="text-4xl font-bold sm:text-5xl m-3 mt-10">
          {currentWord}_
          <span className="hidden sm:block text-xl mt-5">
            I am full stack web dev
          </span>
        </h2>
        <p className="mt-10">
          Hello! I'm Dinesh, a dedicated third-year Computer Science student
          with a focus on Internet of Things, Cyber Security, and Blockchain
          Development. My passion lies in Full-Stack Web Development, where I
          excel at simplifying complex codebases into clear and maintainable
          solutions.I strive to deliver concise and high-quality code, ensuring
          both efficiency and readability
        </p>
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
