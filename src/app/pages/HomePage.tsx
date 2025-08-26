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
          className={`font-babylonica  text-[30vw] md:text-[20vw] leading-[10vh] lg:leading-[20vw] mb-10 lg:mb-0 ${
            darkMode ? "text-[#dbdbdb]" : "text-[#381717]"
          }`}
        >
          {title}
        </h1>
        <p
          className={`px-10 md:px-0 min-w-[200px] text-[clamp(1rem,1.5vw,2.25rem)] font-philosopher md:max-w-[70vw] md:leading-8  ${
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
