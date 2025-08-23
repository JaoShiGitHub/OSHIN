import { Project } from "../data/projects";
import { useNavbar } from "../contexts/NavbarProvider";

function ProjectCard(props: Project) {
  const { title, description, images, githubUrl, techStack, type } = props;
  const { darkMode } = useNavbar();
  const imgCommonCSS = "w-full max-w-[340px] h-auto rounded-lg shadow-lg";

  return (
    <section className="flex items-center max-w-[1000px] h-[66vh]">
      <div className={`w-1/2 flex-col flex ${images.length > 1 && "relative"}`}>
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
      <div className="w-1/2 text-center">
        <h1 className="text-[36px] font-bold">{title}</h1>
        <span>-{type}- </span>
        <p className="text-center text-[22px] mt-10 mb-16 px-10">
          {description}
        </p>
        <p className=" text-[18px] mb-10">Tech Stack: {techStack}</p>
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
            href="https://github.com/JaoShiGitHub"
            target="_blank"
          >
            See on GitHub!
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
