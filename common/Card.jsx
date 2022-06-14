import { Box, Flex, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Pic from "./Pic";
import LazyLoading from "../hooks/useLazyLoading";
import useLazyLoading from "../hooks/useLazyLoading";
import { keyframes } from "styled-components";
import BgImage from "./BgImage";

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
  ...props
}) => {
  const makeClickable = (component) =>
    link ? (
      <Link as={as} href={link}>
        <LinkBox>{component}</LinkBox>
      </Link>
    ) : (
      <LinkBox>{component}</LinkBox>
    );

  //TODO: make these lazy loading also maybe look into cloudfront CDN,
  const hoverStyles = link
    ? {
        transition: "all .2s ease-in-out",
        // boxShadow: "0px 5px 10px #212121",
        _hover: hoverBg
          ? {
              transform: "scale(1.02)",
              boxShadow: "0px 5px 10px #21212150",
              // background: `url(${hoverBg})` || "gray",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
            }
          : {},
      }
    : {};

  const overrideStyles = {
    // background: `url(${bg})` || "gray",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    ...styles,
  };

  return makeClickable(
    <BgImage
      // alignItems="center"
      imgalt={bgProps.alt || "background image"}
      src={bg}
      height={"50vh"}
      justifyContent="center"
      {...bgProps}
    >
      <Box
        minW="100%"
        maxW="5xl"
        minH="300px"
        // border={border || "2px solid #717171"}
        overflow="hidden"
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
