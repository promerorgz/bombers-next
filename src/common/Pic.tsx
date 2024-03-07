import { Img } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { getStrapiMedia } from "../lib/media";

type ShortImageType = {
  alternativeText?: string;
  name?: string;
  url: string;
};
type PicType = {
  className?: string;
  image?: ShortImageType;
  style?: any;
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  size?: string | string[];
  borderRadius?: any;
  src?: string;
};
const Image = ({
  className,
  image = {
    alternativeText: "",
    name: "",
    url: "/images/defaultpic.png",
  },
  style,
  fit,
  size,
  borderRadius,
  src,
  children,
}: PropsWithChildren<PicType>) => {
  const imageUrl = image && getStrapiMedia(image);
  return (
    <Img
      className={className}
      borderRadius={borderRadius || "0px"}
      boxSize={size || "auto"}
      objectFit={fit || "cover"}
      src={src || imageUrl || children}
      alt={image.alternativeText || image.name}
      style={style}
      loading="lazy"
    />
  );
};

export default Image;
