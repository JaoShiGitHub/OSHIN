"use client";

import { useNavbar } from "../contexts/NavbarProvider";
import navItems from "../data/sections";

function Navbar() {
  const { darkMode, setDarkMode } = useNavbar();

  const toggleDarkMode = (): void => {
    setDarkMode();
  };

  return (
    <nav className="fixed flex justify-between items-center w-full top-0">
      <div className="font-babylonica text-3xl">Oshin</div>
      <div className="flex justify-between w-full">
        <div className="flex justify-between w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-lg font-lato hover:text-gray-500 transition-colors"
            >
              {item.section}
            </a>
          ))}
        </div>

        <button className="cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? (
            <img className="h-14" alt="" src="/images/icons/dark_mode.png" />
          ) : (
            <img
              className="h-10"
              alt="Light mode icon"
              src="/images/icons/light_mode.png"
            />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
