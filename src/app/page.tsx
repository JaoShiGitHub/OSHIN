"use client";

import { useNavbar } from "./contexts/NavbarProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function Home() {
  const { darkMode } = useNavbar();

  return (
    <div className={darkMode ? "text-white" : "text-black"}>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default Home;
