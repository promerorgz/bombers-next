import { getStrapiMedia } from "../lib/media";
import { Img, Skeleton } from "@chakra-ui/react";

const Image = ({
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
}) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <Img
      borderRadius={borderRadius || "0px"}
      boxSize={size || "auto"}
      objectFit={fit || "cover"}
      src={src || imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      fallback={<Skeleton minH="200px" />}
    />
  );
};

export default Image;
