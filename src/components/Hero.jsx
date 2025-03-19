import HeroImage from "../assets/pixel-portrait.png";
import Resume from "../assets/DallinChristensen-Resume.pdf";

const Hero = () => {
  const handleButtonClick = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div className="text-2xl text-center py-16" style={{ color: "#485B63" }}>
      {/*<h1 className="text-5xl font-bold mb-4">Hi, welcome to my page!</h1>*/}
      <div className="container-fluid flex flex-col px-8 md:flex-row px-13 items-center justify-between">
        <div className="container flex justify-normal space-x-5">
          <img
            src={HeroImage}
            alt=""
            className="size-50 object-cover transform transition-transform duration-300 hover:scale-105 rounded-full"
          ></img>
          <p className="inline text-5xl text-left place-content-center md:hidden">
            {" "}
            Hi, I&#39;m Dallin!
          </p>
        </div>

        <p className="text-3xl p-2 h-fit text-left">
          I&#39;m currently a software engineer at Goldman Sachs with a
          Master&#39;s degree in information systems. During my graduate
          studies, I focused on cybersecurity, which is something I always try
          to keep in mind when developing. I absolutely love the French
          language, which is what I got my Bachelor&#39;s degree in, and my main
          career goal is to be a force for good and make a positive impact in
          the people I interact with.
        </p>
      </div>

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
