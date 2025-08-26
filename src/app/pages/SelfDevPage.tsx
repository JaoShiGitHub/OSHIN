import { useNavbar } from "../contexts/NavbarProvider";
import selfDevelopment from "../data/self-development";
import { pageTitle } from "../styles/text";

function SelfDevPage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="self-development"
      className={`${
        darkMode ? "bg-[#01001a]" : "bg-[#F3F3F3F3]"
      } h-screen text-center flex flex-col items-center justify-center`}
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
        Oshin surrounds herself daily with international developers in Bangkok,
        which helps her grow as a web developer and improve her English skills.
        Instead of waiting for opportunities, she creates them for herself and
        for others who share her interests, enhancing both her soft and
        technical skills—such as organising events for the <b>DevMorning </b>
        community in 2024 and 2025, and hosting a developer meetup at True
        Digital Park in 2025.
      </p>
    </section>
  );
}
export default SelfDevPage;
