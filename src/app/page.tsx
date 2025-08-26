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
    <main className={darkMode ? "text-white" : "text-black"}>
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
