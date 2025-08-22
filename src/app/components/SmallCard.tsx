interface SmallCardProps {
  name: string;
  alt: string;
  src: string;
}

function SmallCard(props: SmallCardProps) {
  const { name, alt, src } = props;
  return (
    <div className="">
      <img alt={alt} src={src} />
      <span className="text-lg font-bold">{name}</span>
    </div>
  );
}
export default SmallCard;
