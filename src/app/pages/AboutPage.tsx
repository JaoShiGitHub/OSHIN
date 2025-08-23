"use client";

import FadeInWrapper from "../components/FadeInWrapper";
import { useNavbar } from "../contexts/NavbarProvider";
import oshinContents from "../data/contents";

function AboutPage() {
  const { darkMode } = useNavbar();
  const { title, description } = oshinContents[1];
  return (
    <section id="about" className="h-screen text-center ">
      <div
        className={`h-screen hidden md:flex md:flex-row ${
          darkMode ? "bg-[#091023]" : "bg-[#F2F2F2]"
        }`}
      >
        <img
          className="w-full md:w-1/2 h-full object-cover object-center"
          alt="Oshin's image"
          src="/images/oshin/oshin.png"
        />

        <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-12 p-4">
          <FadeInWrapper>
            <h1 className="font-philosopher font-bold text-[3vw]">OSHIN</h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-[426px] px-5">
              {description}
            </p>
          </FadeInWrapper>
        </div>
      </div>
      <div className="w-full h-full bg-[url('/images/oshin/oshin.png')] bg-cover bg-center text-white md:hidden">
        <div className="h-full flex flex-col items-center justify-center px-4">
          <FadeInWrapper>
            <h1 className="font-philosopher font-bold text-[clamp(3rem,10vw,20rem)] tracking-tighter">
              {title.toUpperCase()}
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-[360px] px-5">
              {description}
            </p>
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
