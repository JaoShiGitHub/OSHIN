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
      } font-lato rounded-lg pt-2 pb-3 w-[clamp(60px,20vw,90px)] sm:w-[clamp(60px,20vw,120px)] md:w-[clamp(90px,20vw,132px)] lg:w-[clamp(120px,20vw,130px)] xl:w-[clamp(130px,20vw,164px)]  h-[clamp(88px,20vw,110px)] md:h-[clamp(120px,10vw,170px)] lg:h-[clamp(158px,10vw,170px)] xl:h-[clamp(140px,10vw,170px)] flex flex-col items-center justify-between gap-2 shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <div className="w-full flex items-center justify-center h-full">
        <img alt={alt} src={src} className="w-[40%] sm:w-[30%]" />
      </div>
      <span className="text-[clamp(9px,2vw,16px)]">{name}</span>
    </div>
  );
}
export default SmallCard;
