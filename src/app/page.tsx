"use client";

import { useNavbar } from "./contexts/NavbarProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TechStackPage from "./pages/TechStackPage";
import ExperiencePage from "./pages/ExperiencePage";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

function Home() {
  const { darkMode } = useNavbar();

  return (
    <main className={darkMode ? "text-white" : "text-black"}>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <TechStackPage />
      <ExperiencePage />
      <Footer />
    </main>
  );
}

export default Home;
