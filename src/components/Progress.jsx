import React, { useEffect, useState } from "react";

function Progress({ progress = "90%", color = "green" }) {
  const [width, setWidth] = useState("0%");
  useEffect(() => {
    setWidth(progress);
  }, [progress]);
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
      <div
        className=" h-2.5 rounded-full  transition-all duration-1000 ease-in-out"
        style={{ width: width, background: color }}
      ></div>
    </div>
  );
}

export default Progress;
