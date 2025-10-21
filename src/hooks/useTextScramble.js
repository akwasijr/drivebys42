import { useEffect, useRef, useState } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const useTextScramble = (text, trigger = true) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRequest = useRef();
  const frame = useRef(0);
  const queue = useRef([]);
  const resolve = useRef(null);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    const setText = (newText) => {
      const oldText = displayText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((res) => (resolve.current = res));
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
      return promise;
    };

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
          output += `<span class="text-studio-pink/70">${char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queue.current.length) {
        resolve.current?.();
      } else {
        frameRequest.current = requestAnimationFrame(update);
        frame.current++;
      }
    };

    setText(text);

    return () => {
      cancelAnimationFrame(frameRequest.current);
    };
  }, [text, trigger]);

  return displayText;
};
