import React from "react";
import Toggletheme from "./Toggletheme";
import { Github, Linkedin } from "lucide-react";

function Navbar() {
  console.log();
  return (
    <>
      <nav className="font-normal ">
        <div className=" mx-auto flex justify-between items-center py-2 ">
          <div className="text-2xl font-bold text-red-400">
            <pre>
              (<span className="text-sky-500">&lt;/&gt;</span>)
              <span className="text-amber-600 dark:text-gray-300 ms-1 hidden sm:inline">
                Web Developer
              </span>
            </pre>
            {/* <pre class="text-base">
              <span class="text-purple-600 dark:text-purple-400">console</span>
              <span class="text-gray-600 dark:text-red-400">.</span>
              <span class="text-blue-600 dark:text-blue-400">log</span>
              <span class="text-gray-600 dark:text-red-400">(</span>
              <span class="text-green-600 dark:text-green-400">
                "Abhishek panchal"
              </span>
              <span class="text-gray-600 dark:text-red-400">)</span>
            </pre> */}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="
             https://linkedin.com/in/abhishek--panchal"
              target="_blank"
              rel="noreferrer"
              className="dark:bg-gray-600  dark:hover:bg-gray-700 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
            >
              <Linkedin className="text-slate-800 dark:text-gray-200" />
            </a>
            <a
              href="
            https://github.com/abhi-2107/"
              target="_blank"
              rel="noreferrer"
              className="dark:bg-gray-600  dark:hover:bg-gray-700 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
            >
              <Github className="text-slate-800 dark:text-gray-200" />
            </a>

            <Toggletheme />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
