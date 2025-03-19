const Navbar = () => {
  const handleButtonClick = (link) => {
    window.open(link, "_self");
  };

  return (
    <nav className="px-8 md:px-13 lg:px24">
      <div
        className="container-fluid py-2 flex justify-center md:justify-between items-center text-3xl"
        style={{ fontFamily: "LexingtonGothic" }}
      >
        <div className="font-bold text-5xl hidden md:inline">
          Dallin Christensen
        </div>
        <div className="space-x-5">
          <a href="#about" style={{ cursor: "pointer" }}>
            About
          </a>
          <a href="#projects" style={{ cursor: "pointer" }}>
            Projects
          </a>
          <button
            onClick={() => handleButtonClick("https://github.com/fmajorcminor")}
            style={{ cursor: "pointer" }}
          >
            GitHub
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://www.linkedin.com/in/dallin-christensen-a37903aa/",
              )
            }
            style={{ cursor: "pointer" }}
          >
            LinkedIn
          </button>
          <button style={{ cursor: "pointer" }}>Contact Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
