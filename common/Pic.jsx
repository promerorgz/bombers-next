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
  src = "/images/defaultpic.png",
}) => {
  const imageUrl = getStrapiMedia(image);
  console.log({ imageUrl });
  return (
    <Img
      borderRadius={borderRadius || "0px"}
      boxSize={size || "auto"}
      objectFit={fit || "cover"}
      src={src || imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      fallback={<Skeleton minH="200px" />}
      loading="lazy"
    />
  );
};

export default Image;
