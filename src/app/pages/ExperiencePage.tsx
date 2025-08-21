import { useNavbar } from "../contexts/NavbarProvider";

function ExperiencePage() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="experience"
      className={`${darkMode ? "bg-[#091023]" : ""} h-screen text-center`}
    >
      <h1>Experience Page</h1>
      <div></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,
      </p>
    </section>
  );
}
export default ExperiencePage;
