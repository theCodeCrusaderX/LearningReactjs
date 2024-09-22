import React from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77920978-1327-4990-b510-bcdf8c685af5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block">
        <img src="src/assets/contact me.png" alt="" className="h-[500px]"/>
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
            className="border-2 rounded-lg p-2"
          ></textarea>
          <center>
          <SnackbarProvider>
            <button
              type="submit"
              className="border-2 rounded-lg p-2 bg-orange-200 hover:bg-orange-500"
              onClick={() => enqueueSnackbar('Message successfully sent')}
            >
              Submit Form
            </button>
            </SnackbarProvider>
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
  );
}

export default Contact;
