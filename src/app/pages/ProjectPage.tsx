"use client";

import { useState } from "react";
import { useNavbar } from "../contexts/NavbarProvider";
import ProjectCard from "../components/ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

function ProjectPage() {
  const { darkMode } = useNavbar();
  const projects: string[] = [{}];
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
      className={`h-screen flex flex-col justify-center items-center font-philosopher ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <h1 className="text-[clamp(12px,10vw,36px)]">Projects</h1>
      <section className="flex justify-evenly w-full">
        <button onClick={handleLeftClick} className="cursor-pointer">
          LEFT
        </button>
        <ProjectCard />
        <button onClick={handleRightClick} className="cursor-pointer">
          RIGHT
        </button>
      </section>
    </section>
  );
}
export default ProjectPage;
