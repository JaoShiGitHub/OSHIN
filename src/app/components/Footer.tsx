"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function Footer() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="contact"
      className={`h-screen md:max-h-[457px] pt-32 md:pt-0 flex flex-col items-center ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <div className="flex justify-evenly items-center w-full h-full px-10">
        <div className="hidden md:max-w-[671px] w-full md:flex flex-col gap-y-10">
          <h1 className="text-[clamp(50px,3vw,55px)]">
            Want me to join your team? Feel free to contact!
          </h1>
          <img
            className="w-[5vw]"
            alt="Arrow icon"
            src={
              darkMode
                ? "/images/icons/white_arrow.png"
                : "/images/icons/black_arrow.png"
            }
          />
        </div>

        <div className="flex flex-col items-center justify-between md:justify-center px-4 pb-10 md:px-0 md:pb-0 h-full w-full md:max-w-[671px] md:gap-y-10">
          {/* DOWNLOAD RESUME */}
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
          <h1 className="block md:hidden text-[clamp(40px,3vw,45px)]">
            Want me to join your team? Feel free to contact!
          </h1>
          {/* CONTACTS */}
          <ul className="text-[clamp(20px,5vw,35px)] md:text-[clamp(20px,5vw,24px)] w-full flex flex-col gap-y-4">
            <li className="flex gap-x-5 items-center">
              <img
                className="h-[clamp(32px,5vw,52px)]"
                alt="GitHub logo"
                src={
                  darkMode
                    ? "/images/icons/contacts/github_logo2.png"
                    : "/images/icons/contacts/github_logo.png"
                }
              />
              <a className="" href="https://github.com/JaoShiGitHub">
                JaoshiGitHub
              </a>
            </li>
            <li className="flex gap-x-5 items-center">
              <img
                className="h-[clamp(32px,5vw,52px)]"
                alt="Phone icon"
                src={
                  darkMode
                    ? "/images/icons/contacts/phone_icon2.png"
                    : "/images/icons/contacts/phone_icon.png"
                }
              />
              <p>098-487-6577</p>
            </li>
            <li className="flex gap-x-5 items-center">
              <img
                className="h-[clamp(32px,5vw,52px)]"
                alt="Envelope icon"
                src={
                  darkMode
                    ? "/images/icons/contacts/envelope_icon2.png"
                    : "/images/icons/contacts/envelope_icon.png"
                }
              />
              <p>oshin.ganjanapas@gmail.com</p>
            </li>
          </ul>
        </div>
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
