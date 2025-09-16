import techStackByType from "../data/techStackByType";

function TechStackSlideshow() {
  return (
    <section className="sm:hidden flex flex-col items-center gap-y-10">
      <span>{techStackByType[0].type}</span>
      <div className="max-w-[80%] flex flex-wrap justify-center items-center gap-6 ">
        {techStackByType[0].techStack.map((image, index) => {
          return (
            <div key={index} className="flex justify-center content-center">
              <img alt={image.alt} src={image.src} className=" max-h-[50px]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechStackSlideshow;
