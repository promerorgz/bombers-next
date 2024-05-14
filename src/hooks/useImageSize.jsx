import React from "react";
import { useMediaQuery } from "./useMediaQuery";

const useImageSize = () => {
  const screenSize = useMediaQuery();

  if (screenSize <= 325) return "thumbnail";
  if (screenSize > 326 && screenSize <= 425) return "small";
  if (screenSize > 426 && screenSize <= 768) return "medium";
  return "large";
};

export default useImageSize;
