import { useEffect, useState } from "react";

export const useWindowWidthResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateUpdate = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateUpdate);
    return () => {
      window.removeEventListener("resize", updateUpdate);
    };
  }, []);

  return windowWidth;
};
