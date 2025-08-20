"use client";

import { useNavbar } from "./contexts/NavbarProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function Home() {
  const { darkMode } = useNavbar();

  return (
    <div className={darkMode ? "text-white" : "text-black"}>
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default Home;
