import { useNavbar } from "../contexts/NavbarProvider";
import navItems from "../data/sections";

import { useEffect } from "react";

interface OverlayProps {
  isVisible: boolean;
}

const Menu: React.FC<OverlayProps> = ({ isVisible }) => {
  const { setMenu } = useNavbar();

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const toggleMenu = (): void => {
    setMenu();
  };

  return (
    <section className="h-screen w-full flex flex-col items-center pt-8 gap-y-20 text-slate-300 inset-0 bg-[rgba(0,0,0,0.92)] z-50 fixed">
      <button className="max-w-[90vw] w-full" onClick={toggleMenu}>
        <img
          className="max-w-[3.5vh]"
          alt="Close menu icon"
          src="/images/icons/svg/close-menu-white.svg"
        />
      </button>
      <div className="w-full flex flex-col text-center font-bold gap-y-6 text-[clamp(1.5rem,4vw,2.5rem)]">
        {navItems.map((item, id) => {
          return (
            <a key={id} href={item.link}>
              {item.section}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
