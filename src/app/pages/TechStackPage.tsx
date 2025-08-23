import { useNavbar } from "../contexts/NavbarProvider";
import SmallCard from "../components/SmallCard";
import oshinTechStack from "../data/oshin_tech_stack";
import FadeInWrapper from "../components/FadeInWrapper";

function TechStackPage() {
  const { darkMode } = useNavbar();
  return (
    <div
      id="tech-stack"
      className={`h-screen ${
        darkMode ? "bg-[#070d1d]" : "bg-white"
      } font-philosopher flex flex-col items-center justify-center text-center px-6`}
    >
      <FadeInWrapper>
        <h1 className="text-[clamp(16px,8vw,32px)] lg:text-[clamp(36px,8vw,40px)]  font-bold">
          Tech Stack
        </h1>
        <div className="gap-4 sm:gap-6 md:gap-8 my-20 xl:my-0 xl:mb-20 xl:mt-28 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
          {oshinTechStack.map((item, index) => (
            <SmallCard
              key={index}
              src={
                item.darkModeSrc
                  ? `${darkMode ? item.darkModeSrc : item.src}`
                  : item.src
              }
              alt={item.alt}
              name={item.name}
            />
          ))}
        </div>
        <p className="text-slate-500 text-[clamp(10px,2vw,16px)] font-lato">
          Main tech stack: JavaScript, TypeScript, Next.JS, PostgreSQL, Node.js
        </p>
      </FadeInWrapper>
    </div>
  );
}

export default TechStackPage;
