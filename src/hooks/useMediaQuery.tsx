import { useState, useCallback, useEffect } from "react";

type SizeType = "small" | "medium" | "large" | "thumbnail";
export const useMediaQuery = (
  width: string | undefined = "default"
): number | SizeType | boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<number>(0);
  const [size, setSize] = useState<SizeType>("medium");

  const updateTarget = useCallback((e) => {
    setScreenSize(e);
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    if (width === "window") setScreenSize(window.innerWidth);
    if (width === "size") {
      if (window.innerWidth >= 1024) setSize("large");
      if (window.innerWidth >= 768 && window.innerWidth < 1024)
        setSize("medium");
      if (window.innerWidth > 375 && window.innerWidth <= 767) setSize("small");
      if (window.innerWidth <= 375) setSize("thumbnail");
    }
    // setScreenSize(window.innerWidth);
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return {
    size,
    window: screenSize,
    default: targetReached,
  }[width];
};
