import { Box, LinkBox } from "@chakra-ui/react";
import { toLower } from "lodash";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Image } from "../types/imageTypes";
import BgImage from "./BgImage";
import Pic from "./Pic";

type CardProps = {
  link?: string;
  as?: string;
  image?: Image;
  border?: string;
  radius?: number | string;
  bg?: Image;
  styles?: any;
  _hover?: any;
  imageProps?: any;
  hoverBg?: any;
  bgProps?: any;
  height?: any;
  id: string;
};
const Card = ({
  link,
  as,
  children,
  image,
  border,
  radius,
  bg,
  styles,
  _hover,
  imageProps,
  hoverBg,
  bgProps,
  height,
  ...props
}: PropsWithChildren<CardProps>) => {
  const makeClickable = (component) =>
    link ? (
      <Link as={as} href={toLower(link)} legacyBehavior>
        <LinkBox>{component}</LinkBox>
      </Link>
    ) : (
      <LinkBox>{component}</LinkBox>
    );

  //TODO: make these lazy loading also maybe look into cloudfront CDN,
  const hoverStyles = link
    ? {
        transition: "all .2s ease-in-out",
        _hover: hoverBg
          ? {
              transform: "scale(1.02)",
              boxShadow: "0px 5px 10px #21212150",
            }
          : {},
      }
    : {};

  const overrideStyles = {
    ...styles,
  };

  return makeClickable(
    <BgImage
      imgalt={bgProps?.alt || "background image"}
      src={bg}
      height={height}
      justifyContent="center"
      {...bgProps}
    >
      <Box
        minW="100%"
        maxW="5xl"
        borderRadius={radius || "3px"}
        cursor="pointer"
        sx={{ ...hoverStyles, ...overrideStyles }}
        bgGradient="gradient.main"
        _hover={{ ..._hover, transform: "scale(1.02)" }}
        {...props}
      >
        {image && (
          <Box sx={{ display: "flex", flexGrow: 3 }}>
            <Pic image={image} {...imageProps} />
          </Box>
        )}
        {children}
      </Box>
    </BgImage>
  );
};

export default Card;
