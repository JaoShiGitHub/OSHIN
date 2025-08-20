function AboutPage() {
  return (
    <section id="about" className="h-screen flex text-center bg-[#F2F2F2]">
      <img
        className="w-full h-auto"
        alt="Oshin's image"
        src="/images/oshin/oshin.png"
      />
      <div className="w-full h-auto flex flex-col items-center justify-center gap-y-12">
        <h1 className="font-philosopher font-bold text-[3vw]">OSHIN</h1>
        <p className="text-[1.5vw] max-w-[426px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
