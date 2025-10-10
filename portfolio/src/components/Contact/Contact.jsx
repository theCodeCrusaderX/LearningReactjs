import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import Spinner from "../Spinner";
import hm from "../../../public/assets/hm.png";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'

function Contact() {
  const theme = useSelector((state) => state.themeChanger.value);
  console.log(theme);

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
        enqueueSnackbar(
          "Error: " + (result.message || "Failed to send message"),
          { variant: "error" }
        );
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again.", {
        variant: "error",
      });
    } finally {
      setLoading(false); // Ensure loading state is always updated after fetch
    }
  };

  return (
    <>
      {!loading ? (
        <div
          className={`flex flex-col md:flex-row justify-center items-center min-h-screen px-6 py-10 mb-10 mt-10 md:m-10 rounded-2xl ${
            theme ? "bg-[#121212] text-white" : "bg-gray-100 text-gray-900"
          }`}
        >

          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block md:w-1/2 flex justify-center"
          >
            <img
              src={hm}
              alt="Contact"
              className="h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl mt-6 md:mt-0"
          >
            <h1
              className={`text-center text-4xl sm:text-5xl font-extrabold mb-6 ${
                theme ? "text-white" : "text-gray-800"
              }`}
            >
              Get in Touch! 😀
            </h1>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={`rounded-lg p-3 outline-none border ${
                  theme
                    ? "bg-[#1f1f1f] border-gray-700 focus:border-green-500 text-white"
                    : "bg-white border-gray-300 focus:border-green-600"
                } transition-all duration-300`}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`rounded-lg p-3 outline-none border ${
                  theme
                    ? "bg-[#1f1f1f] border-gray-700 focus:border-green-500 text-white"
                    : "bg-white border-gray-300 focus:border-green-600"
                } transition-all duration-300`}
                required
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                maxLength="300"
                className={`rounded-lg p-3 outline-none border h-40 resize-none ${
                  theme
                    ? "bg-[#1f1f1f] border-gray-700 focus:border-green-500 text-white"
                    : "bg-white border-gray-300 focus:border-green-600"
                } transition-all duration-300`}
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`font-bold rounded-xl py-3 mt-3 transition-all duration-300 ${
                  theme
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-black hover:bg-green-700 text-white"
                }`}
              >
                Submit Form
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div
                className={`w-1/4 h-[1px] ${
                  theme ? "bg-gray-500" : "bg-gray-400"
                }`}
              ></div>
              <span className="mx-3 font-semibold opacity-80">OR</span>
              <div
                className={`w-1/4 h-[1px] ${
                  theme ? "bg-gray-500" : "bg-gray-400"
                }`}
              ></div>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:your-email@gmail.com">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300">
                  📧 Contact via Email
                </button>
              </a>
              <a href="https://wa.me/7478574111?text=Hello%20there!">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300">
                  💬 Contact via WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Contact;
