"use client";

import { useNavbar } from "../contexts/NavbarProvider";
import navItems from "../data/sections";

function Navbar() {
  const { darkMode, setDarkMode } = useNavbar();

  const toggleDarkMode = (): void => {
    setDarkMode();
  };

  return (
    <nav className="fixed flex justify-center items-center w-full top-0 z-50">
      {/* Navbar for the screen that wider than 767px */}
      <div className="hidden md:flex justify-between items-center w-full top-0 max-w-[90vw]">
        <div className="font-babylonica text-[4.45vw]">Oshin</div>
        <div className="flex justify-between w-full">
          <div className="flex justify-evenly w-full mx-8 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[1.4vw] font-lato hover:text-blue-600 cursor-pointer transition-colors"
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
      </div>
      {/* Navbar for screens 0px - 767px */}
      <div
        className={`md:hidden flex justify-between items-center w-full top-0 max-w-[90vw] min-[320px] ${
          darkMode ? "pt-6" : "pt-6"
        }`}
      >
        <div className="flex justify-center items-center gap-x-8">
          <button className="cursor-pointer">
            <img
              className="h-[6vw]"
              alt="Menu icon"
              src={
                darkMode
                  ? "/images/icons/menu_btn_2.png"
                  : "/images/icons/menu_btn_1.png"
              }
            />
          </button>
          <span className="font-babylonica text-[12vw] leading-9">Oshin</span>
        </div>

        <button className="cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? (
            <img
              className="h-[10vw]"
              alt=""
              src="/images/icons/dark_mode.png"
            />
          ) : (
            <img
              className="h-[7vw]"
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
