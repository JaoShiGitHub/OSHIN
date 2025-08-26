"use client";

import { useState } from "react";
import { useNavbar } from "../contexts/NavbarProvider";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { Project } from "../data/projects";
import { pageTitle } from "../styles/text";
import FadeInWrapper from "../components/FadeInWrapper";

function ProjectPage() {
  const { darkMode } = useNavbar();
  const [project, setProject] = useState<Project>(projects[0]);

  const handleLeftClick = () => {
    const currentIndex = projects.indexOf(project);
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setProject(projects[newIndex]);
  };
  const handleRightClick = () => {
    const currentIndex = projects.indexOf(project);
    const newIndex = (currentIndex + 1) % projects.length;
    setProject(projects[newIndex]);
  };

  return (
    <section
      id="projects"
      className={`h-screen flex flex-col justify-center items-center gap-y-10 xl:gap-y-20  ${
        darkMode ? "bg-[#091023]" : "bg-[#F3F3F3F3]"
      }`}
    >
      <h1 className={pageTitle + ` hidden md:inline md:mb-10`}>Projects</h1>
      <section className="flex justify-between max-w-[90vw] items-center w-full">
        <button
          onClick={handleLeftClick}
          className="cursor-pointer h-fit md:mb-20"
        >
          <img
            className="h-6 md:h-full"
            src={
              darkMode
                ? "/images/icons/arrows/white-arrow-left.svg"
                : "/images/icons/arrows/black-arrow-left.svg"
            }
          />
        </button>
        <FadeInWrapper>
          <ProjectCard
            title={project.title}
            description={project.description}
            images={project.images}
            githubUrl={project.githubUrl}
            techStack={project.techStack}
            type={project.type}
          />
        </FadeInWrapper>
        <button
          onClick={handleRightClick}
          className="cursor-pointer h-fit md:mb-20"
        >
          <img
            className=" h-6 md:h-full"
            src={
              darkMode
                ? "/images/icons/arrows/white-arrow-right.svg"
                : "/images/icons/arrows/black-arrow-right.svg"
            }
          />
        </button>
      </section>
    </section>
  );
}
export default ProjectPage;
