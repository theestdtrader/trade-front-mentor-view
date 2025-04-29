import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  repeat?: boolean;
}

const TypewriterText = ({
  text,
  speed = 200,
  repeat = false,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          if (repeat) {
            timeoutId = setTimeout(() => {
              currentIndex = 0;
              setDisplayText("");
              typeText();
            }, 10000); // 10-second pause before restarting
          }
        }
      }, speed);
    };

    typeText();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, repeat]);

  return <span>{displayText}</span>;
};

export default TypewriterText;
