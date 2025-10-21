import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = (start = true) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (!start || !scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-inview',
      smartphone: {
        smooth: false, // Disable on mobile to avoid conflicts
      },
      tablet: {
        smooth: false, // Disable on tablet to avoid conflicts
      },
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true })
          : locomotiveScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    // Update ScrollTrigger on window resize
    ScrollTrigger.addEventListener('refresh', () => locomotiveScrollRef.current.update());
    ScrollTrigger.refresh();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        ScrollTrigger.removeEventListener('refresh', () => locomotiveScrollRef.current.update());
      }
    };
  }, [start]);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};
