import { useNavbar } from "../contexts/NavbarProvider";
import selfDevelopment from "../data/self-development";
import { pageTitle } from "../styles/text";

function SelfDevPage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="self-development"
      className={`${
        darkMode ? "bg-[#070d1d]" : ""
      } h-screen text-center flex flex-col items-center justify-center font-philosopher`}
    >
      <h1 className={pageTitle}>Self Development</h1>
      <div className="w-auto overflow-x-clip max-h-[30%] flex my-10 lg:my-0 lg:mb-20 lg:mt-14">
        <div className="marquee whitespace-nowrap">
          {selfDevelopment.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" mx-3 lg:mx-4"
            />
          ))}
        </div>
        <div className="marquee2 whitespace-nowrap">
          {selfDevelopment.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" mx-3 lg:mx-10"
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
export default SelfDevPage;
