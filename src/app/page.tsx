import { NavbarProvider } from "./contexts/NavbarProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function Home() {
  return (
    <NavbarProvider>
      <Navbar />
      <HomePage />
      <AboutPage />
    </NavbarProvider>
  );
}

export default Home;
