import Resume from "../assets/DallinChristensen-Resume.pdf";

const Navbar = () => {
  const handleButtonClick = (link) => {
    window.open(link, "_self");
  };

  return (
    <nav className="px-8 md:px-8 lg:px24">
      <div
        className="container-fluid py-2 flex justify-center md:justify-between items-center text-3xl"
        style={{ fontFamily: "LexingtonGothic" }}
      >
        <div className="font-bold text-5xl hidden md:inline">
          Dallin Christensen
        </div>
        <div className="space-x-5">
          <button
            onClick={() => {
              window.open(Resume, "_blank");
            }}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              fontFamily: "LexingtonGothic",
              backgroundColor: "lightgray",
            }}
          >
            Resume
          </button>
          <button
            onClick={() => handleButtonClick("https://github.com/fmajorcminor")}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              fontFamily: "LexingtonGothic",
              backgroundColor: "lightgray",
            }}
          >
            GitHub
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://www.linkedin.com/in/dallin-christensen-a37903aa/",
              )
            }
            style={{
              cursor: "pointer",
              fontSize: "30px",
              fontFamily: "LexingtonGothic",
              backgroundColor: "lightgray",
            }}
          >
            LinkedIn
          </button>
          {/*<button style={{ cursor: "pointer" }}>Contact Me</button>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
