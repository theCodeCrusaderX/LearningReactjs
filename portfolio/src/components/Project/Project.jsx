import React from 'react'
import MultiActionAreaCard from '../Card'
import BiteBlend from "../../assets/BiteBlend.jpeg"
import videoTube from "../../assets/videoTube.jpeg"
import weatherWise from "../../assets/weatherWise.jpeg"
import passwordPro from "../../assets/password-pro.jpeg"
import Todo from "../../assets/Todo.jpeg"

function Project() {
  return (
    <div className='flex justify-between flex-wrap m-4 gap-4'>
      <MultiActionAreaCard img={BiteBlend} name={"BiteBlend"} dis={"Built a full-stack app with React, Node, and MongoDB. Integrated JWT for authentication, Cloudinary for images, and used Redux for state. Designed a responsive UI with Material UI and Tailwind. Added Gimeni AI for recipes, with pagination and search in history."}/>

      <MultiActionAreaCard img={videoTube} name={"videoTube"} dis={"Built backend for a YouTube-like platform with Node.js and Express, handling video uploads, streaming, and user interactions. Used JWT for authentication, Cloudinary for video storage, and Multer for file handling. Designed a RESTful API for uploads, comments, and streaming, with MongoDB for data management."}/>

      <MultiActionAreaCard img={weatherWise} name={"weatherWise"} dis={"developed a Weather App using HTML, CSS, and JavaScript that fetches real-time weather data from an external API and displays dynamic weather information. The app features a responsive UI, ensuring compatibility across different screen sizes and devices."}/>

      <MultiActionAreaCard img={passwordPro} name={"Password-Pro"} dis={"Developed a Password Generator in React.js that allows users to generate secure passwords with customizable length and options for numbers and special characters. It includes a Copy feature for quick clipboard access, utilizing React hooks to manage state efficiently"}/>

      <MultiActionAreaCard img={Todo} name={"Todo App"} dis={"Developed a Todo App using React and the Context API for state management. The app allows users to add, edit, and delete tasks with a clean and responsive user interface, efficiently handling global state without prop drilling."}/>
    </div>
  )
}

export default Project