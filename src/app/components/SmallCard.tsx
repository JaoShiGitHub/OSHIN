interface SmallCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function SmallCard(props: SmallCardProps) {
  const { title, description, icon } = props;
  return <div className=""></div>;
}
export default SmallCard;
