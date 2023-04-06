import { getStrapiMedia } from "../lib/media";
import { border, Img, Skeleton } from "@chakra-ui/react";

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
}) => {
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
      fallback={<Skeleton minH="200px" />}
      loading="lazy"
    />
  );
};

export default Image;
