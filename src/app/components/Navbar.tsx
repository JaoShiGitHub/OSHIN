"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function Navbar() {
  const { darkMode, setDarkMode } = useNavbar();

  const toggleDarkMode = (): void => {
    setDarkMode();
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="font-babylonica text-3xl">Oshin</div>
      <div className="flex justify-between w-full">
        <div className="flex justify-between w-full">
          <a>Home</a>
          <a>About</a>
          <a>Self Development</a>
          <a>Projects</a>
          <a>Tack Stack</a>
          <a>Experience</a>
          <a>Contact</a>
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
