import React from "react";

function Herosection() {
  return (
    <div className="bg-stone-200 dark:bg-gray-900  dark:text-white py-7 px-2 sm:p-12 text-center  flex flex-col justify-center items-center rounded">
      <h1 className="text-6xl mb-5 text-slate-800 dark:text-white">Hi I'm Abhishek Panchal</h1>
      <p className="text-base  mb-10">
        I am passionate about delivering pixel-perfect UI with smooth
        functionality while maintaining code readability and performance. My
        goal is to create engaging and accessible web applications that leave a
        lasting impact. Feel free to explore my projects, and let’s connect if
        you’re looking to collaborate or build something amazing together!
      </p>
      <div className="bg-amber-50  dark:bg-black p-5 px-3 rounded sm:w-4/5 max-w-xl">
        <p className="font-mono text-lime-500 m-0">
          C:\Users\Abhishek\Currently_at&gt; Stegpearl Pvt. Ltd. Jaipur_
        </p>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Working since: April 2023 - Present
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
            <div className="bg-lime-500 h-2.5 rounded-full w-3/4"></div>
          </div>
          <p className="font-mono text-gray-400 text-xs mt-1">
            Ongoing journey...
          </p>
        </div>
        <div className="mt-4">
          <p className="font-mono dark:text-white text-sm">
            Freelancer: 2022 - April 2023
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
            <div
              className="bg-yellow-500 h-2.5 rounded-full w-100"
            
            ></div>
          </div>
          <p className="font-mono text-gray-400 text-xs mt-1">
            Completed journey
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
