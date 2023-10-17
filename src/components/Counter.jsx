import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ number, delay }) {
  const [counter, setCounter] = useState(0);

  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        const interval = setInterval(() => {
          setCounter((prev) => {
            if (prev < number) {
              return prev + 1;
            } else {
              return prev;
            }
          });
        }, 50);
        return () => clearInterval(interval);
      }, delay);
    }
  }, [inView]);

  return <span ref={ref}  >{counter}</span>;
}
