"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function Footer() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="contact"
      className={`h-screen pt-32 flex flex-col justify-between items-center ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center  gap-y-4 px-4 h-full w-full max-w-[671px]">
        <a
          href="/files/oshin_ganjanapas_resume.pdf"
          download
          className={`${
            darkMode
              ? "border-white hover:border-[#FFD980] text-white hover:text-[#FFD980]"
              : "border-black hover:border-blue-600 text-black hover:text-blue-600"
          } border w-full rounded-[10px] min-h-[83px] flex items-center justify-center text-center`}
        >
          <b className="text-[clamp(22px,3vw,25px)]">
            Download <br /> Oshin&apos;s resume
          </b>
        </a>
        <h1 className="text-[clamp(40px,3vw,45px)]">
          Want me to join your team? Feel free to contact!
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
