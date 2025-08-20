import Navbar from "./components/Navbar";
import { NavbarProvider } from "./contexts/NavbarProvider";

function Home() {
  return (
    <NavbarProvider>
      <Navbar />
    </NavbarProvider>
  );
}

export default Home;
