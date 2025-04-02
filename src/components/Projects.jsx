import TSP_GIF from "../assets/TSP_GIF.gif";
import PiTest_GIF from "../assets/PiTest_GIF.gif";
import Capstone from "../assets/Master's Capstone AR Experience.pdf";
import Vespa from "../assets/Vespa.jpg";
import FamilyMap from "../assets/FamilyMap.gif";

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-center text-5xl"
      style={{ color: "#485B63" }}
    >
      {" "}
      <h1 className="text-6xl pb-8 font-bold container text-left px-8">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap px-8 text-3xl">
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          <h1> Pi Cheater</h1>
          <p className="text-2xl font-normal">
            During my cybersecurity graduate studies, one of the first
            assignments in my information security class was to find a way to
            write down the first 100 numbers of Pi. We were instructed to cheat,
            but not get caught, as we were being monitored by the professor
            during class. I wrote a simple android app that would vibrate each
            number in my pocket. There was functionality to change the vibration
            length and even start at the halfway point if I lost my place.
          </p>
          <img src={PiTest_GIF} alt="loading..." className="border-1 my-12" />
        </div>
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          <h1>Traveling Salesperson Problem</h1>
          <p className="text-2xl font-normal">
            This was a project in one of my university courses. Our task was to
            try to create a less-costly solution to the Traveling Salesperson
            Problem in comparison to the greedy solution. Our solution combined
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
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          <h1>Augmented Reality Master&#39;s Degree Capstone</h1>
          <p className="text-2xl font-normal">
            During my Master&#39;s degree in Information Systems, I was required
            to do a two-semester long capstone project. My team and I decided to
            create an AR application for the Microsoft Hololens. We wanted to
            provide students with a unique way of learning about different
            western European countries, so we made an AR game where they had to
            collect cultural artifacts from each country they visited based off
            of clues throughout their journey. Read more about it{" "}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={Capstone}
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <img
            src={Vespa}
            alt="loading..."
            className="border-1 mt-4 mx-auto object-fill"
          />
        </div>
        <div className="container mx-auto px-5 pb-4 pt-2 font-bold md:w-[calc(50%-0.5rem)] border text-left">
          <h1>Family Map</h1>
          <p className="text-2xl font-normal">
            This is an Android application that utilizes the Google Maps API to
            display faux family history data. This project was done during my
            undergraduate in one of my computer science courses. There is a
            backend server written in Java that the Android app communicates
            with via REST APIs as well as a SQLite DB that contains login, user,
            and family history event data.
          </p>
          <img
            src={FamilyMap}
            alt="loading..."
            className="border-1 mx-auto mt-4 max-w-3xs object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
