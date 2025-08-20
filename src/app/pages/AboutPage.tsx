function AboutPage() {
  return (
    <section id="about" className="h-screen text-center ">
      <div className="h-screen  bg-[#F2F2F2]  hidden md:flex md:flex-row">
        <img
          className="w-full md:w-1/2 h-full object-cover object-center"
          alt="Oshin's image"
          src="/images/oshin/oshin.png"
        />
        <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-12 p-4">
          <h1 className="font-philosopher font-bold text-[3vw]">OSHIN</h1>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-[426px] px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-[url('/images/oshin/oshin.png')] bg-cover bg-center text-white md:hidden">
        <div className="h-full flex flex-col items-center justify-center p-4">
          <h1 className="font-philosopher font-bold text-[clamp(3rem,10vw,20rem)] tracking-tighter">
            OSHIN
          </h1>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] max-w-[360px] px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
