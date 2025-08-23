"use client";

import { useState } from "react";
import { useNavbar } from "../contexts/NavbarProvider";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { Project } from "../data/projects";

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
      className={`h-screen flex flex-col justify-between pt-34 pb-20 items-center font-philosopher gap-y-20 ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <h1 className="text-[clamp(12px,10vw,40px)] font-bold">Projects</h1>
      <section className="flex justify-evenly items-center w-full h-[60vh]">
        <button onClick={handleLeftClick} className="cursor-pointer h-full">
          <img
            src={
              darkMode
                ? "/images/icons/arrows/white-arrow-left.svg"
                : "/images/icons/arrows/black-arrow-left.svg"
            }
          />
        </button>
        <ProjectCard
          title={project.title}
          description={project.description}
          images={project.images}
          githubUrl={project.githubUrl}
          techStack={project.techStack}
          type={project.type}
        />
        <button onClick={handleRightClick} className="cursor-pointer h-full">
          <img
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
