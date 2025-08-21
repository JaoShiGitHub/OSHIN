import { useNavbar } from "../contexts/NavbarProvider";
import experience_images from "../data/experience_images";

function ExperiencePage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="experience"
      className={`${
        darkMode ? "bg-[#091023]" : ""
      } h-screen text-center flex flex-col items-center justify-center font-philosopher`}
    >
      <h1 className="text-[36px] font-bold">Experience Page</h1>
      <div className="w-full overflow-hidden mb-20 mt-14">
        <div className="marquee">
          {experience_images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="max-h-[300px] mx-4"
            />
          ))}
        </div>
      </div>
      <p className="max-w-[1050px] text-[24px]">
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
