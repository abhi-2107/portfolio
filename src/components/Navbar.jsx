import React from "react";

function Navbar() {
  return (
    <>
      <nav className=" font-normal">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-red-400">
            (<span className="text-sky-500">&lt;/&gt;</span>)
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
