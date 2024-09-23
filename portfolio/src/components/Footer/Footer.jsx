import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {

  const [isHovered,setIsHovered] = useState(false);

  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 theCodeCrusader. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
             <CiFacebook size={30}/>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <FaDiscord size={30}/>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="https://x.com/Code__Crusader" className="text-gray-500 hover:text-gray-900">
              <FaXTwitter size={30}/>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <FaGithub size={30}/>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <FaInstagram size={30}/>
              <span className="sr-only">instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
