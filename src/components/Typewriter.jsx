import React, { useEffect, useMemo, useState } from "react";

function Typewriter({ text, speed,cursorSize }) {
  const [index, setIndex] = useState(0);

  const delay = useMemo(() => {
    return 1000 / speed;
  }, [speed]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => {
        if (i >= text.length) {
          clearInterval(timer);
        }
        return i + 1;
      });
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [text, delay]);

  return (
    <div className="typewriter">
      {text.slice(0, index)}
      <div className="cursor" style={{height:cursorSize}}></div>
    </div>
  );
}

export default Typewriter;
