import { useNavbar } from "../contexts/NavbarProvider";

interface SmallCardProps {
  name: string;
  alt: string;
  src: string;
}

function SmallCard(props: SmallCardProps) {
  const { darkMode } = useNavbar();

  const { name, alt, src } = props;
  return (
    <div
      className={`${
        darkMode ? "bg-[#293555]" : "bg-gray-200"
      } font-lato rounded-lg py-2 w-[clamp(70px,10vw,130px)] h-[clamp(30px,12vh,90px)] max-w-[132px] flex flex-col items-center justify-between gap-2 shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <img
        alt={alt}
        src={src}
        className="max-h-20 p-[6px] h-auto w-[clamp(30px,10vw,130px)]"
      />
      <span className="text-[clamp(9px,2vw,16px)]">{name}</span>
    </div>
  );
}
export default SmallCard;
