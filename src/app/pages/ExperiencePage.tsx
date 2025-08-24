import { useNavbar } from "../contexts/NavbarProvider";
import experience from "../data/experience";
import { pageTitle } from "../styles/text";

function ExperiencePage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="experience"
      className={`${
        darkMode ? "bg-[#091023]" : "bg-white"
      } h-screen text-center flex flex-col items-center justify-center font-philosopher`}
    >
      <h1 className={pageTitle}>Experience</h1>
      <div className="w-auto overflow-hidden my-10 lg:my-0 lg:mb-20 lg:mt-14">
        <div className="marquee">
          {experience.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="max-h-[110px] lg:max-h-[190px] mx-3 lg:mx-4"
            />
          ))}
        </div>
      </div>
      <p className="max-w-[1050px] px-5 text-[clamp(1rem,1.5vw,1.25rem)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,
      </p>
    </section>
  );
}
export default ExperiencePage;
