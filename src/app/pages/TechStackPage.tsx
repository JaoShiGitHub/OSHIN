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
      } font-philosopher flex flex-col items-center justify-center text-center`}
    >
      <h1 className="text-[40px] font-bold">Tech Stack</h1>
      <div className="flex">
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
    </div>
  );
}

export default TechStackPage;
