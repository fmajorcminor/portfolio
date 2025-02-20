const Navbar = () => {
  const handleButtonClick = (link) => {
    window.open(link, "_self");
  };

  return (
    <nav className="px-8 md:px-16 lg:px24">
      <div
        className="container-fluid py-2 flex justify-center md:justify-between items-center text-3xl"
        style={{ fontFamily: "LexingtonGothic" }}
      >
        <div className="font-bold text-5xl hidden md:inline">Dallin</div>
        <div className="space-x-6">
          <a href="#home" style={{ cursor: "pointer" }}>
            Home
          </a>
          <a href="#about" style={{ cursor: "pointer" }}>
            About
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
          <a href="#projects" style={{ cursor: "pointer" }}>
            Projects
          </a>
        </div>
        <button style={{ cursor: "pointer" }}>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
