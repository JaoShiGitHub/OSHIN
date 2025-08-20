"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function HomePage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center h-screen text-center ${
        darkMode ? "bg-[#070d1d]" : "bg-white"
      }`}
    >
      {/* 080d18 */}
      <h1
        className={`font-babylonica leading-[20vh] text-[16vw] leading-2 ${
          darkMode ? "text-[#dbdbdb]" : "text-[#381717]"
        }`}
      >
        Oshin
      </h1>
      <p
        className={`px-20 text-[1.67vw] font-philosopher leading-8 mt-10 min-w-[300px] max-w-[1450px] leading-0.5 ${
          darkMode ? "text-[#dadada]" : "text-black"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,
      </p>
    </section>
  );
}

export default HomePage;
