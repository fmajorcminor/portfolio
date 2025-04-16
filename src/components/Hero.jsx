import HeroImage from "../assets/pixel-portrait.png";

const Hero = () => {
  return (
    <div
      className="text-2xl text-center pt-16 pb-12"
      style={{ color: "#485B63" }}
    >
      <div className="container-fluid flex flex-col px-4 md:flex-row items-center justify-between">
        <div className="container flex flex-row justify-center space-x-5">
          <img
            src={HeroImage}
            alt=""
            className="size-50 object-cover transform transition-transform duration-300 hover:scale-105 rounded-full min-w-[150px]"
          ></img>
          <p className="inline text-5xl text-left place-content-center md:hidden">
            {" "}
            Hi, I&#39;m Dallin!
          </p>
        </div>

        <div>
          <h2 className="hidden text-5xl md:inline text-left">
            Who am I, you ask?
          </h2>
          <p className="text-3xl py-2 h-fit text-left">
            I&#39;m a software engineer at Goldman Sachs with a Master&#39;s
            degree in information systems. During my graduate studies, I focused
            on cybersecurity, which is something I always try to keep in mind
            when developing. I absolutely love the French language, which is
            what I got my Bachelor&#39;s degree in, and my main career goal is
            to be a force for good and make a positive impact in the people I
            interact with. Take a look at some of the projects I&#39;ve done!
          </p>
          <h2 className="hidden text-3xl md:inline text-left underline">
            Tech I Use Most Often
          </h2>
          <ul className="flex flex-wrap gap-x-6 list-none p-0 m-0 text-3xl">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Kafka</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
