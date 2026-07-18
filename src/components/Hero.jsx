import HeroImage from "../assets/pixel-portrait.png";

const Hero = () => {
    return (
        <div
            className="text-2xl text-center pt-16 pb-12"
            style={{ color: "#485B63" }}
        >
            <div className="container-fluid flex flex-col px-8 md:flex-row items-center justify-between">
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
                    <h2 className="text-5xl text-left underline">About Me</h2>
                    <p className="text-3xl py-2 h-fit text-left">
                        I&#39;m a senior software engineer at Domo on the IAM
                        team and I have a Master&#39;s degree in information
                        systems. My emphasis was in Cybersecurity which is
                        something I always try to keep in mind when developing.
                        I love the French language, listening to music, and
                        I&#39;ve recently gotten into photography. Take a look
                        at some of the projects I&#39;ve done!
                    </p>
                    <h2 className="text-3xl text-left underline">
                        Tools I Use Most Often
                    </h2>
                    <ul className="flex flex-wrap gap-x-6 list-none p-0 m-0 text-3xl">
                        <li>Java / Spring Boot</li>
                        <li>Go</li>
                        <li>Kotlin</li>
                        {/* <li>Docker</li> */}
                        <li>Kubernetes</li>
                        <li>Git</li>
                        <li>SQL</li>
                        <li>Claude Code</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
