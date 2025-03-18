import {
  ChevronDown,
  Minus,
  Plus,
  Square,
  SquareTerminal,
  X,
} from "lucide-react";
import React from "react";
const projects = [
  {
    title: "Trello Clone",
    about:
      "Interactive Trello clone with drag-and-drop functionality using Next.js and Appwrite BaaS.",
    github: "https://github.com/abhi-2107/trello-clone-nextjs",
    liveUrl: "https://nextjstrello.vercel.app/",
    techStack: [
      "Next.js",
      "Appwrite",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],
  },
  {
    title: "Weather App",
    about:
      "Real-time weather visualization for current location and states/UTs.",
    github: "https://github.com/abhi-2107/Weather-App",
    liveUrl: "https://atmostoday.netlify.app/",
    techStack: ["React.js", "React-Select", "Axios", "Tailwind CSS", "Git"],
  },
  {
    title: "Credit Card",
    about: "Responsive landing page for money lending websites.",
    github: "https://github.com/abhi-2107/Credit-Card",
    liveUrl: "https://credit-card-web.netlify.app/",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SASS",
      "Slick",
      "Git",
    ],
  },
  {
    title: "Healthcare",
    about: "Responsive website for medical purposes.",
    github: "https://github.com/abhi-2107/Helthcare",
    liveUrl: "https://healthcare-web-for-clinic.netlify.app/",
    techStack: ["HTML5", "CSS3", "JavaScript", "SASS", "Git"],
  },
  {
    title: "Meme Generator",
    about:
      "API-powered meme maker with user text input for personalized memes.",
    github: "https://github.com/abhi-2107/project-08_React_Meme-generator",
    liveUrl: "https://meme-generator-reactjs-for-fun.netlify.app/",
    techStack: ["HTML5", "CSS3", "React JS", "REST API", "Git"],
  },
  {
    title: "Skilled",
    about: "Responsive web design to hone your skills using HTML & CSS.",
    github: "https://github.com/abhi-2107/Skilled",
    liveUrl: "https://skilled-web-to-hone-your-skills.netlify.app/",
    techStack: ["HTML5", "CSS3", "Git"],
  },
];

function Projects() {
  return (
    <div className="bg-stone-200 dark:bg-gray-900  font-mono p-2 sm:p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">~/projects</h2>
      <div>
        <div className="bg-amber-100 text-zinc-600 dark:bg-zinc-800 dark:text-white rounded-t-lg flex justify-between items-center sm:pl-4  ">
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center justify-between dark:bg-black px-2 py-2 rounded-t-md  text-sm">
              <span className="flex items-center">
                <SquareTerminal size={20} className="mr-2" />
                Windows PowerShell
              </span>
              <X
                size={15}
                className="dark:hover:bg-slate-900 hover:bg-amber-50"
              />
            </div>
            <div className="flex items-center ">
              <span className="hover:bg-amber-50 dark:hover:bg-zinc-700 rounded-l-md p-1.5">
                <Plus size={15} />
              </span>
              <span>|</span>
              <span className="hover:bg-amber-50 dark:hover:bg-zinc-700 rounded-r-md p-1.5">
                <ChevronDown size={15} />
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <span className="dark:hover:bg-zinc-700 hover:bg-amber-50   p-3.5">
              <Minus size={15} />
            </span>
            <span className="dark:hover:bg-zinc-700 hover:bg-amber-50   p-3.5">
              <Square size={15} />
            </span>
            <span className="hover:bg-red-600 hover:text-white rounded-tr-md  p-3.5">
              <X size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 dark:bg-black p-4 rounded-b-lg border-gray-700">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-green-600 dark:text-green-400">
              {project.title}
            </h3>
            <p className="text-gray-500  dark:text-gray-400">{project.about}</p>
            <p className="text-gray-500 dark:text-gray-400">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            <div className="flex gap-2 mt-2">
              <a
                href={project.github}
                className="dark:text-blue-400  text-blue-500  underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <span>|</span>
              <a
                href={project.liveUrl}
                className="dark:text-blue-400 text-blue-500  underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
