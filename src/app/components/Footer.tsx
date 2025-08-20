"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function Footer() {
  const { darkMode } = useNavbar();
  return (
    <section
      className={`h-screen pt-32 flex flex-col justify-between ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center gap-y-4 px-4 h-full w-full">
        <a
          href="/files/oshin_ganjanapas_resume.pdf"
          download
          className="border-black border max-w-[671px] w-full rounded-[10px] min-h-[83px] flex items-center justify-center text-center"
        >
          <b>
            Download <br /> Oshin's resume
          </b>
        </a>
        <h1 className="text-4xl">
          Looking for someone like me? Feel free to contact!
        </h1>
      </div>
      <p
        className={`text-center w-full ${
          darkMode ? "bg-[#070d1d]" : "bg-[#F2F2F2]"
        } py-2`}
      >
        © Oshin Ganjanapas. All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
