"use client";

import { useNavbar } from "../contexts/NavbarProvider";

function Footer() {
  const { darkMode } = useNavbar();
  return (
    <section
      id="contact"
      className={`max-h-[680px] h-full md:max-h-[457px] flex flex-col items-center ${
        darkMode ? "bg-[#091023]" : "bg-white"
      }`}
    >
      <div className="flex justify-evenly items-center w-full h-full md:py-12 md:max-w-[85vw]">
        <div className="hidden w-1/2 md:flex flex-col gap-y-10">
          <h1 className="text-[clamp(44px,3vw,55px)] font-bold">
            Want me to join your team? Feel free to contact!
          </h1>
          <img
            className="w-[5vw] mx-auto"
            alt="Arrow icon"
            src={
              darkMode
                ? "/images/icons/white_arrow.png"
                : "/images/icons/black_arrow.png"
            }
          />
        </div>

        <div className="flex flex-col items-center justify-between md:justify-center px-4 pb-10  md:pl-10 md:pb-0 h-full w-full md:w-1/2 md:gap-y-10">
          {/* DOWNLOAD RESUME */}
          <a
            href="/files/oshin_ganjanapas_resume.pdf"
            download
            className={`${
              darkMode
                ? "border-white hover:border-[#FFD980] text-white hover:text-[#FFD980]"
                : "border-black hover:border-blue-600 text-black hover:text-blue-600"
            } border w-full rounded-[10px] min-h-[83px] flex items-center justify-center text-center mt-18 md:mt-0`}
          >
            <b className="text-[clamp(22px,2vw,25px)]">
              Download <br className="md:hidden" /> Oshin&apos;s resume
            </b>
          </a>
          <h1 className="block md:hidden text-[clamp(40px,3vw,45px)] my-10">
            Want me to join your team? Feel free to contact!
          </h1>
          {/* CONTACTS */}
          <ul className="text-[clamp(20px,5vw,24px)] md:text-[clamp(20px,2vw,24px)] w-full flex flex-col gap-y-4">
            <li className="flex gap-x-5 items-center">
              <img
                className="h-[clamp(32px,4vw,42px)]"
                alt="GitHub logo"
                src={
                  darkMode
                    ? "/images/icons/contacts/github_logo2.png"
                    : "/images/icons/contacts/github_logo.png"
                }
              />
              <a
                className={`hover:underline hover:font-bold ${
                  darkMode ? "hover:text-[#FFD980]" : "hover:text-blue-600"
                }`}
                href="https://github.com/JaoShiGitHub"
              >
                JaoshiGitHub
              </a>
            </li>
            <li className="flex gap-x-5 items-center">
              <img
                className="h-[clamp(32px,4vw,42px)]"
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
                className="h-[clamp(28px,3.5vw,42px)]"
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
