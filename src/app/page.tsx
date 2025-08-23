"use client";

import { useNavbar } from "./contexts/NavbarProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SelfDevPage from "./pages/SelfDevPage";
import ProjectPage from "./pages/ProjectPage";
import TechStackPage from "./pages/TechStackPage";
import ExperiencePage from "./pages/ExperiencePage";
import Footer from "./components/Footer";

function Home() {
  const { darkMode } = useNavbar();

  return (
    <main className={darkMode ? "text-white" : "text-black"}>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SelfDevPage />
      <ProjectPage />
      <TechStackPage />
      <ExperiencePage />
      <Footer />
    </main>
  );
}

export default Home;
