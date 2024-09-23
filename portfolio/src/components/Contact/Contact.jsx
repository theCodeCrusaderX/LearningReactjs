import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import Spinner from "../Spinner";
import contactMe from "../../assets/contact me.png"


function Contact() {
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    
    formData.append("access_key", String(import.meta.env.VITE_KEY));

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json(); // Wait for the full JSON response

      if (result.success) {
        enqueueSnackbar("Message successfully sent", { variant: "success" });
      } else {
        enqueueSnackbar("Error: " + (result.message || "Failed to send message"), { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again.", { variant: "error" });
    } finally {
      setLoading(false); // Ensure loading state is always updated after fetch
    }
  };

  return (
    <>{!loading ? (
      <div className="flex justify-between items-center h-screen">
        <div className="hidden md:block">
          <img src={contactMe} alt="" className="h-[500px]" />
        </div>
        <div className="">
          <form onSubmit={onSubmit} className="flex flex-col md:w-3/4 gap-6 m-6">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="border-2 rounded-lg p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="border-2 rounded-lg p-2"
              required
            />
            <textarea
              name="message"
              placeholder="write something"
              className="border-2 rounded-lg p-2 h-40 overflow-y-auto resize-none"
              maxlength="200"
            ></textarea>
            <center>
              
                <button
                  type="submit"
                  className="border-2 rounded-lg p-2 bg-orange-200 hover:bg-orange-500"
                >
                  Submit Form
                </button>
              
            </center>
          </form>
          <div className="">
            <center className=" text-4xl font-bold ">or</center>
            <a href="mailto:your-email@gmail.com">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-4">
                Contact Me via Email
              </button>
            </a>
            <a href="https://wa.me/7478574111?text=Hello%20there!">
              <button className="bg-green-500 text-white font-bold py-2 px-4 m-4 rounded">
                Contact Me via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    ) : (
      <Spinner />
    )}</>
  );
}

export default Contact;
