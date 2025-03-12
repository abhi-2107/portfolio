import React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function Toggletheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme and update local storage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme on mount and when it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      {" "}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition duration-300 bg-blue-500 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600"
      >
        {theme === "light" ? (
          <Sun size={24} className="text-yellow-500" />
        ) : (
          <Moon size={24} className="text-gray-200 " />
        )}
      </button>
    </>
  );
}

export default Toggletheme;
