import React from 'react'
import MultiActionAreaCard from '../Card'
import BiteBlend from "../../assets/BiteBlend.jpeg"
import videoTube from "../../assets/videoTube.jpeg"
import weatherWise from "../../assets/weatherWise.jpeg"

function Project() {
  return (
    <div className='flex justify-between'>
      <MultiActionAreaCard img={BiteBlend} name={"BiteBlend"} dis={"Built a full-stack app with React, Node, and MongoDB. Integrated JWT for authentication, Cloudinary for images, and used Redux for state. Designed a responsive UI with Material UI and Tailwind. Added Gimeni AI for recipes, with pagination and search in history."}/>
      <MultiActionAreaCard img={videoTube} name={"videoTube"} dis={"Built backend for a YouTube-like platform with Node.js and Express, handling video uploads, streaming, and user interactions. Used JWT for authentication, Cloudinary for video storage, and Multer for file handling. Designed a RESTful API for uploads, comments, and streaming, with MongoDB for data management."}/>

      <MultiActionAreaCard img={weatherWise} name={"weatherWise"} dis={"developed a Weather App using HTML, CSS, and JavaScript that fetches real-time weather data from an external API and displays dynamic weather information. The app features a responsive UI, ensuring compatibility across different screen sizes and devices."}/>
    </div>
  )
}

export default Project