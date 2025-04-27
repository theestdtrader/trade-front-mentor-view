
import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  repeat?: boolean;
}

const TypewriterText = ({ text, speed = 100, repeat = false }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    const typeText = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);

          // If repeat is true, reset after a short pause
          if (repeat) {
            setTimeout(() => {
              currentIndex = 0;
              setDisplayText('');
              setIsComplete(false);
              typeText();
            }, 2000); // 2-second pause before restarting
          }
        }
      }, speed);
    };

    typeText();

    return () => clearInterval(intervalId);
  }, [text, speed, repeat, isComplete]);

  return <span>{displayText}</span>;
};

export default TypewriterText;
