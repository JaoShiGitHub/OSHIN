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
import Menu from "./components/Munu";

function Home() {
  const { darkMode, menu } = useNavbar();

  return (
    <main className={darkMode ? "text-slate-300" : "text-black"}>
      {menu && <Menu isVisible={menu} />}
      <Navbar />
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectPage />
      <TechStackPage />
      <SelfDevPage />
      <Footer />
    </main>
  );
}

export default Home;

// Bg colours #070d1d  #000a1b  #040016 #01001a
