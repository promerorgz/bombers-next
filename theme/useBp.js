import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const useBp = () => {
  const [isDesktop, isTablet, isMobile, isDisplayingInBrowser] = useMediaQuery([
    "(min-width: 968px)",
    "(min-width: 768px) and (max-width: 967px)",
    "(max-width: 767px)",
    "(display-mode: browser)",
  ]);

  return [isDesktop, isTablet, isMobile, isDisplayingInBrowser];
};

export default useBp;
