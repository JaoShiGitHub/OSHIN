import { useNavbar } from "../contexts/NavbarProvider";
import SmallCard from "../components/SmallCard";
import oshinTechStack from "../data/oshin_tech_stack";

function TechStackPage() {
  const { darkMode } = useNavbar();
  return (
    <div
      id="tech-stack"
      className={`h-screen ${
        darkMode ? "bg-[#070d1d]" : "bg-white"
      } font-philosopher flex flex-col items-center justify-center text-center px-6`}
    >
      <h1 className="text-[clamp(16px,8vw,32px)] font-bold">Tech Stack</h1>
      <div className="gap-4 md:gap-8 mt-12 mb-12 max-w-[1100px] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
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
      <p className="text-[clamp(10px,2vw,16px)]">
        Main tech stack: JavaScript, TypeScript, Next.JS, PostgreSQL, Node.js
      </p>
    </div>
  );
}

export default TechStackPage;
