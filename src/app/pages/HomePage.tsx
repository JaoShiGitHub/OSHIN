"use client";

import FadeInWrapper from "../components/FadeInWrapper";
import { useNavbar } from "../contexts/NavbarProvider";
import oshinContents from "../data/contents";

function HomePage() {
  const { darkMode } = useNavbar();
  const { title, description } = oshinContents[0];

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center h-screen text-center ${
        darkMode ? "bg-[#070d1d]" : "bg-white"
      }`}
    >
      <FadeInWrapper>
        <h1
          className={`font-babylonica leading-[20vh] text-[16vw] leading-2 ${
            darkMode ? "text-[#dbdbdb]" : "text-[#381717]"
          }`}
        >
          {title}
        </h1>
        <p
          className={`px-20 text-[1.67vw] font-philosopher leading-8 mt-10 min-w-[300px] max-w-[1450px] leading-0.5 ${
            darkMode ? "text-[#dadada]" : "text-black"
          }`}
        >
          {description}
        </p>
      </FadeInWrapper>
    </section>
  );
}

export default HomePage;
