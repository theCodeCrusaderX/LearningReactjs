import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Footer() {
  const theme = useSelector((state) => state.themeChanger.value);

  return (
    <footer
      className={`bg-white rounded-xl ${theme ? "bg-[#1A1A1A]" : "bg-gray-100 "}`}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            className={`text-sm text-gray-500 sm:text-center ${
              theme ? "text-white" : "text-black"
            }`}
          >
            © 2024 theCodeCrusader. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            
            <Link
              to="#"
              className={`text-gray-500 ${
                theme ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              <CiFacebook size={30} />
              <span
                className={`sr-only ${theme ? "text-white" : "text-black"}`}
              >
                Facebook page
              </span>
            </Link>

            <Link
              to="#"
              className={`text-gray-500 ${
                theme ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              <FaDiscord size={30} />
              <span
                className={`sr-only ${theme ? "text-white" : "text-black"}`}
              >
                Discord community
              </span>
            </Link>

            <Link
              to="https://x.com/Code__Crusader"
              className={`text-gray-500 ${
                theme ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              <FaXTwitter size={30} />
              <span
                className={`sr-only ${theme ? "text-white" : "text-black"}`}
              >
                Twitter page
              </span>
            </Link>

            <Link
              to="#"
              className={`text-gray-500 ${
                theme ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              <FaGithub size={30} />
              <span
                className={`sr-only ${theme ? "text-white" : "text-black"}`}
              >
                GitHub account
              </span>
            </Link>

            <Link
              to="#"
              className={`text-gray-500 ${
                theme ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              <FaInstagram size={30} />
              <span
                className={`sr-only ${theme ? "text-white" : "text-black"}`}
              >
                Instagram
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
