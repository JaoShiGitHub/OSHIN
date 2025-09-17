import { useState } from "react";
import techStackByType from "../data/techStackByType";

function TechStackSlideshow() {
  const [currentType, setCurrentType] = useState(0);

  return (
    <section className="sm:hidden flex flex-col items-center gap-y-10">
      <span>{techStackByType[currentType].type}</span>
      <div className="max-w-[80%] flex flex-wrap justify-center items-center gap-6 ">
        {techStackByType[currentType].techStack.map((image, index) => {
          return (
            <div key={index} className="flex justify-center content-center">
              <img alt={image.alt} src={image.src} className=" max-h-[50px]" />
            </div>
          );
        })}
      </div>
      <div>{/* TODO: Add button */}</div>
    </section>
  );
}

export default TechStackSlideshow;
