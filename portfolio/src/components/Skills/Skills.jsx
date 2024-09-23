import React from "react";

function Skills() {
  return (
    <div className="lg:flex justify-between gap-10 items-center">
      <div className="hidden lg:block">
        <img src="/assets/skills_img.png" className="mb-14 h-[500px]" />
        <img src="/assets/skills_img2.png" className="h-[500px]" />
      </div>
      <div className="w-full lg:w-[40%]">
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">
            Front-End
          </p>
          <div className="flex gap-5 lg:w-3/4 flex-wrap">
            <div>
              <img
                src="/assets/React-icon.svg.png"
                alt=""
                className="h-16"
              />
              <p className="text-center font-roboto font-light text-lg">
                React
              </p>
            </div>
            <div>
              <img src="/assets/js.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                JavaScript
              </p>
            </div>
            <div>
              <img src="/assets/redux.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Redux
              </p>
            </div>
            <div>
              <img src="/assets/html.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                HTML5
              </p>
            </div>
            <div>
              <img src="/assets/css.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">CSS3</p>
            </div>
            <div>
              <img src="/assets/bootstrap.jpeg" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Bootstrap
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">
            Back-End
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img src="/assets/node.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">Node</p>
            </div>
            <div>
              <img src="/assets/express.webp" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Express
              </p>
            </div>
            <div>
              <img src="/assets/appwrite.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                appwrite
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">
            Databases{" "}
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img src="/assets/mongodb.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                MongoDB
              </p>
            </div>
            <div>
              <img src="/assets/postgresql.svg" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Postgresql
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">
            Version Control & Deployment
          </p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img src="/assets/git.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">Git</p>
            </div>
            <div>
              <img src="/assets/github.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                GitHub
              </p>
            </div>
            <div>
              <img src="/assets/vercel.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Vercel
              </p>
            </div>
            <div>
              <img src="/assets/render.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Render
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">Tools</p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img src="/assets/vs.webp" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                VS Code
              </p>
            </div>
            <div>
              <img src="/assets/npm.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">npm</p>
            </div>
            <div>
              <img src="/assets/postman.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Postman
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">Design</p>
          <div className="flex gap-5 w-3/4 flex-wrap">
            <div>
              <img src="/assets/figma.png" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Figma
              </p>
            </div>
            <div>
              <img src="/assets/canva.jpeg" alt="" className="h-16" />
              <p className="text-center font-roboto font-light text-lg">
                Canva
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat font-bold text-2xl m-4 ml-0">
            Soft Skills
          </p>
          <div className="flex gap-2 lg:gap-5 flex-wrap">
            <p className="font-nunito font-light text-lg flex items-center">
              problem solving
            </p>
            <p className="font-nunito font-light text-lg ">critical thinking</p>
            <p className="font-nunito font-light text-lg ">communication</p>
            <p className="font-nunito font-light text-lg ">teamwork</p>
            <p className="font-nunito font-light text-lg ">collaboration</p>
            <p className="font-nunito font-light text-lg ">creativity</p>
            <p className="font-nunito font-light text-lg ">leadership</p>
            <p className="font-nunito font-light text-lg ">time management</p>
            <p className="font-nunito font-light text-lg ">adaptability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
