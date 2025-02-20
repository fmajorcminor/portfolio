import HeroImage from "../assets/pixel-portrait.jpeg";
import Resume from "../assets/DallinChristensen-Resume.pdf";

const Hero = () => {
  const handleButtonClick = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div className="text-2xl text-center py-16" style={{ color: "#485B63" }}>
      <img
        src={HeroImage}
        alt=""
        className="mx-auto size-50 mb-8 object-cover transform transition-transform duration-300 hover:scale-105 rounded-full"
      ></img>
      <h1 className="text-5xl font-bold">
        Hi, welcome to my page. I&#39;m Dallin
      </h1>
      {/*<p className="mt-4 text-3xl px-4 md:px-32">*/}
      {/*  I specialize in building modern and responsive web applications*/}
      {/*</p>*/}
      <div className="mt-8 space-x-4">
        <button className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
          Contact Me
        </button>
        <button
          onClick={handleButtonClick}
          className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
