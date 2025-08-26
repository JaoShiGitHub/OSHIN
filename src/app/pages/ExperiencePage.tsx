import { useNavbar } from "../contexts/NavbarProvider";
import experience from "../data/experience";
import { pageTitle } from "../styles/text";
// #070d1d #000a1b
function ExperiencePage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="experience"
      className={`${
        darkMode ? "bg-[#01001a]" : "bg-white"
      } h-screen text-center flex flex-col items-center justify-center `}
    >
      <h1 className={pageTitle}>Experience</h1>
      <div className="w-auto overflow-x-clip max-h-[30%] flex my-10 lg:my-0 lg:mb-20 lg:mt-14">
        <div className="marquee whitespace-nowrap">
          {experience.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" mx-3 lg:mx-4"
            />
          ))}
        </div>
        <div className="marquee2 whitespace-nowrap" aria-hidden="true">
          {experience.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" mx-3 lg:mx-4"
            />
          ))}
        </div>
      </div>
      <p className="max-w-[1050px] px-5 text-[clamp(1rem,1.5vw,1.25rem)]">
        In 2025, Oshin joined a tech company as a frontend trainee for three
        months, working on Elixir and Phoenix LiveView alongside senior
        developers and the CTO. She also helped with organising and designing
        trainee lessons, and contributed to other initiatives within the
        company. During this time, Oshin not only improved her developer skills
        but also strengthened the essential soft skills every developer needs,
        such as critical thinking, communication, problem solving, emotional
        intelligence, and collaboration.
      </p>
    </section>
  );
}
export default ExperiencePage;
