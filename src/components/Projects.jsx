import TSP_GIF from "../assets/TSP_GIF.gif";
import PiTest_GIF from "../assets/PiTest_GIF.gif";

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-center text-5xl"
      style={{ color: "#485B63" }}
    >
      {" "}
      <h1 className="text-5xl pb-4 font-bold">Projects</h1>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap px-8 text-3xl">
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          <h1> Pi Cheater</h1>
          <p className="text-2xl font-normal">
            During my cybersecurity graduate studies, one of the first
            assignments in my information security class was to find a way to
            write down the first 100 numbers of Pi. We were instructed to cheat,
            but not get caught, as we were being monitored by the professor
            during class. I wrote a simple android app that would vibrate each
            number in my pocket.
          </p>
          <img src={PiTest_GIF} alt="loading..." className="border-1 my-16" />
        </div>
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          Traveling Salesperson Problem
          <p className="text-2xl font-normal">
            This was a project in one of my university courses. Our task was to
            try to create a less-costly solution to the Traveling Salesperson
            Problem in compared to the greedy solution. Our solution combined
            divide-and-conquer with nearest-insertion. Read the write-up{" "}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://github.com/fmajorcminor/TravelingSalespersonProblem-AlternativeMethod/blob/main/TSP%20GROUP%20PROJECT.pdf"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <img src={TSP_GIF} alt="loading..." className="border-1 mt-4" />
        </div>
        <div className="container mx-auto px-2 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          Family Map
        </div>
        <div className="container mx-auto px-2 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          Travel the World Augmented-Reality App
        </div>
      </div>
    </div>
  );
};

export default Projects;
