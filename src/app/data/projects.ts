
export interface Project {
    title: string;
    description: string;
    images: string[];
    githubUrl: string;
    techStack: string;
    type: "FullStack" | "Frontend" | "Backend";
}

const projects: Project[] = [{
    title: "MiniRest",
    description: "A full-stack web application designed for customers to browse a restaurant menu, place orders, and manage their profiles. The project focuses on providing a seamless user experience for customers to interact with the restaurant digitally. A full-stack web application designed for customers to browse a restaurant menu, place orders, and manage their profiles. The project focuses on providing a seamless user experience for customers to interact with the restaurant digitally.",
    images: ["/images/projects/minirest/minirest-login.png", "/images/projects/minirest/minirest-menu1.png", "/images/projects/minirest/minirest-receipt.png"],
    githubUrl: "https://github.com/JaoShiGitHub/minirest",
    techStack: "React, JavaScript, Node.js, Express, PostgreSQL",
    type: "FullStack",
},
{
    title: "MiniBee",
    description: "A simple backend system for e-commerce web applications, supporting both customer and admin functionalities such as authentication, order management, and product management. A full-stack web application designed for customers to browse a restaurant menu, place orders, and manage their profiles. The project focuses on providing a seamless user experience for customers to interact with the restaurant digitally.",
    images: ["/images/projects/mini_bee/mini-bee.png"],
    githubUrl: "https://github.com/JaoShiGitHub/MiniBee",
    techStack: "JavaScript, Node.js, Express, PostgreSQL",
    type: "Backend",
}]

export default projects;