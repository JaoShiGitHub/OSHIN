type TechCategory = "Frontend" | "Backend" | "Database";

interface TechItem {
  src: string;
  alt: string;
  name: string;
  darkModeSrc?: string;
}

interface TechStackByType {
  type: TechCategory;
  techStack: TechItem[];
}

const techStackByType: TechStackByType[] = [
  {
    type: "Frontend",
    techStack: [
      {
        src: "/images/tech-stack/typescript-logo.png",
        alt: "TypeScript Logo",
        name: "TypeScript",
      },
      {
        src: "/images/tech-stack/javascript-logo.png",
        alt: "JavaScript Logo",
        name: "JavaScript",
      },
      {
        src: "/images/tech-stack/elixir-logo.png",
        alt: "Elixir Logo",
        name: "Elixir",
      },
      {
        src: "/images/tech-stack/html-logo.png",
        alt: "HTML5 Logo",
        name: "HTML",
      },
      {
        src: "/images/tech-stack/css-logo.png",
        alt: "CSS3 Logo",
        name: "CSS",
      },
      {
        src: "/images/tech-stack/tailwind-logo.png",
        alt: "Tailwind CSS Logo",
        name: "Tailwind CSS",
      },
      {
        src: "/images/tech-stack/react-logo.png",
        alt: "React Logo",
        name: "React",
      },
      {
        src: "/images/tech-stack/nextjs-logo.png",
        alt: "Next.js Logo",
        name: "Next.js",
      },
      {
        src: "/images/tech-stack/phoenix-logo.png",
        alt: "Phoenix Logo",
        name: "Phoenix",
      },
    ],
  },

  {
    type: "Backend",
    techStack: [
      {
        src: "/images/tech-stack/nestjs-logo.png",
        alt: "Nest.js Logo",
        name: "Nest.js",
      },
      {
        src: "/images/tech-stack/nodejs-black-logo.png",
        alt: "Node.js Logo",
        name: "Node.js",
        darkModeSrc: "/images/tech-stack/nodejs-white-logo.png",
      },
    ],
  },
  {
    type: "Database",
    techStack: [
      {
        src: "/images/tech-stack/postgresql-logo.png",
        alt: "PostgreSQL Logo",
        name: "PostgreSQL",
      },
    ],
  },
];

export default techStackByType