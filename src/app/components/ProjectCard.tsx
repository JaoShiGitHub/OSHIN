import { Project } from "../data/projects";
import { useNavbar } from "../contexts/NavbarProvider";
import { pageTitle } from "../styles/text";

function ProjectCard(props: Project) {
  const { title, description, images, githubUrl, techStack, type } = props;
  const { darkMode } = useNavbar();
  const imgCommonCSS = `w-full ${
    images.length === 1 ? "max-w-[440px]" : "max-w-[340px]"
  } h-auto rounded-lg shadow-lg`;

  return (
    <section className="flex flex-col md:flex-row items-center w-full max-w-[70vw] h-full lg:h-[66vh] md:mt-28 pb-16 md:pb-0">
      <h1 className={pageTitle + ` md:hidden mt-20`}>PROJECTS</h1>
      <div className="md:hidden w-full flex flex-col items-center">
        <span>-{type.toUpperCase()}- </span>
        <img
          className={`${imgCommonCSS} mt-10 mb-10`}
          src={images[0]}
          alt={title}
        />
      </div>
      <div
        className={`hidden md:w-1/2 flex-col md:flex ${
          images.length > 1 && "relative"
        }`}
      >
        <img
          className={`${imgCommonCSS} ${
            images.length > 1 && "absolute right-64 z-30"
          }`}
          src={images[0]}
          alt={title}
        />
        {images[1] && (
          <img
            className={`${imgCommonCSS}  absolute top-[-16vh] left-32  z-20`}
            src={images[1]}
            alt={title}
          />
        )}
        {images[2] && (
          <img
            className={`${imgCommonCSS} absolute top-[-26vh] right-44`}
            src={images[2]}
            alt={title}
          />
        )}
      </div>
      <div className="md:w-1/2 text-center">
        <h1 className="text-[clamp(20px,4vw,36px)] font-bold">{title}</h1>
        <span className="hidden">-{type}- </span>
        <p className="hidden md:block text-center text-[clamp(1rem,1.5vw,1.25rem)] md:mt-10 md:mb-16 md:px-10">
          {description}
        </p>
        <p className="md:hidden text-center text-[clamp(1rem,1.5vw,1.25rem)] md:mt-10 md:mb-16 md:px-10">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <p className="text-[clamp(1rem,1.5vw,1.13rem)] mt-10 mb-6 md:mt-0 md:mb-10">
          Tech Stack: {techStack}
        </p>
        <div className="w-full">
          <img
            src={
              darkMode
                ? "/images/icons/contacts/github_logo2.png"
                : "/images/icons/contacts/github_logo.png"
            }
            className="w-8 h-8 inline-block mr-2"
          />
          <a
            className={`hover:underline hover:font-bold cursor-pointer text-[18px] ${
              darkMode ? "hover:text-[#FFD980]" : "hover:text-blue-600"
            }`}
            href={githubUrl}
            target="_blank"
          >
            See more on GitHub!
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
