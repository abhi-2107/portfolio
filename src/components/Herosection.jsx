import React from "react";
import Typewriter from "./Typewriter";
import Progress from "./Progress";

function Herosection() {
  return (
    <div className="bg-stone-200 dark:bg-gray-900  dark:text-white py-7 px-2 sm:p-12 text-center  flex flex-col justify-center items-center   rounded">
      <h1 className="text-5xl font-bold mb-5 text-slate-800 dark:text-white tracking-tighter">
        <Typewriter text={"Hello, I'm Abhishek!"} speed={8} cursorSize={45} />
      </h1>
      <p className="text-base text-left w-full mb-10 tracking-tighter">
    Frontend developer who enjoys building interfaces that are as clean under the hood as they are on screen. I work primarily with React.js, Next.js, and TypeScript, with a focus on thoughtful component design, smooth interactions, and code that stays readable as projects grow. Explore my projects below - always happy to connect.
      </p>
      <div className="bg-amber-50 text-left  dark:bg-black p-5 px-3 rounded sm:w-4/5 max-w-xl">
        <p className="font-mono text-lime-500 m-0">
          C:\Users\Abhishek\Currently_at&gt; Safal Softcom Private Limited
        </p>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Working since: August 2025 - Present
          </p>
          <Progress progress="75%" color="#84cc16" />

          <p className="font-mono text-gray-400 text-xs mt-1">
            Ongoing journey...
          </p>
        </div>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Pixel Pulse India Marketing Solutions: April 2025 - July 2025
          </p>
          <Progress progress="100%" color="rgb(234 179 8)" />

          <p className="font-mono text-gray-400 text-xs mt-1">
            Completed journey
          </p>
        </div>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Stegpearl Technologies Pvt Ltd: April 2023 - March 2025
          </p>
          <Progress progress="100%" color="rgb(234 179 8)" />

          <p className="font-mono text-gray-400 text-xs mt-1">
            Completed journey
          </p>
        </div>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Freelancer: July 2022 - March 2023
          </p>
          <Progress progress="100%" color="rgb(234 179 8)" />

          <p className="font-mono text-gray-400 text-xs mt-1">
            Completed journey
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
