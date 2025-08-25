interface Content {
  page: string;
  title: string;
  description: string;
}

const oshinContents: Content[] = [
  {
    page: "Home",
    title: "Oshin",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,`,
  },
  {
    page: "About",
    title: "Oshin",
    description: `
Oshin began her web development journey in 2024 with frontend development.

She challenged herself to work with a different language (Elixir) and framework (Phoenix) at an international tech company in Bangkok, where she became a frontend trainee in 2025.

Driven by curiosity and eagerness to improve, she learned backend development and SQL to manage databases. Now she is capable of full-stack development, aiming to grow into one of the high-quality developers of Thailand.`

  },
];

export default oshinContents;
