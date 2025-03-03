import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Senior Full Stack Developer"],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 600,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
