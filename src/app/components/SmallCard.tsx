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
      } font-lato rounded-lg w-full max-w-[132px] h-[160px] flex flex-col items-center justify-between gap-2 py-5 px-4 shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <img alt={alt} src={src} className="max-h-20 p-3" />
      <span className="text-[16px]">{name}</span>
    </div>
  );
}
export default SmallCard;
