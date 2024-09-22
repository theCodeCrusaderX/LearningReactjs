import * as React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/">theCodeCrusaderX</Link>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex mt-4 font-medium lg:space-x-6 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="">
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          sx={{ width: 250 }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div
            className="flex flex-col h-full w-full p-4 bg-gray-800"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Menu</h2>
            <Divider
              sx={{
                borderBottomWidth: 3,
                borderColor: "white",
                fontWeight: "bold",
              }}
            />
            <nav className="space-y-4 flex flex-col mt-6">
              <Link
                to="/"
                className="block text-xl text-white hover:bg-gray-700 rounded-full py-2 px-4"
              >
                Home
              </Link>

              <Link
                to="/skills"
                className="block text-xl text-white hover:bg-gray-700 rounded-full py-2 px-4"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="block text-xl text-white hover:bg-gray-700 rounded-full py-2 px-4 "
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block text-xl text-white hover:bg-gray-700 rounded-full py-2 px-4 "
              >
                Contact me
              </Link>
            </nav>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
