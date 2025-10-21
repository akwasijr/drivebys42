import { useEffect, useRef, useState } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const ScrambleText = ({ 
  children, 
  trigger = true, 
  className = '',
  speed = 1,
  as: Component = 'span'
}) => {
  const [displayText, setDisplayText] = useState(children);
  const frameRequest = useRef();
  const frame = useRef(0);
  const queue = useRef([]);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(children);
      return;
    }

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0, n = queue.current.length; i < n; i++) {
        let { from, to, start, end, char } = queue.current[i];

        if (frame.current >= end) {
          complete++;
          output += to;
        } else if (frame.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue.current[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queue.current.length) {
        // Animation complete
      } else {
        frameRequest.current = requestAnimationFrame(update);
        frame.current += speed;
      }
    };

    const setText = (newText) => {
      const oldText = displayText;
      const length = Math.max(oldText.length, newText.length);
      queue.current = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.current.push({ from, to, start, end });
      }

      cancelAnimationFrame(frameRequest.current);
      frame.current = 0;
      update();
    };

    setText(children);

    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
  }, [children, trigger, speed, displayText]);

  return <Component className={className}>{displayText}</Component>;
};

export default ScrambleText;
