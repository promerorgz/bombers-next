import { Box, Flex, LinkBox } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import Pic from "./Pic";

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

  const hoverStyles = link
    ? {
        transition: "all .2s ease-in-out",
        // boxShadow: "0px 5px 10px #212121",
        _hover: {
          transform: "scale(1.02)",
          boxShadow: "0px 5px 10px #21212150",
          background: hoverBg,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      }
    : {};

  const overrideStyles = {
    ...styles,
    background: bg,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return makeClickable(
    <Box
      minW="100%"
      maxW="5xl"
      minH="200px"
      border={border || "2px solid #717171"}
      overflow="hidden"
      borderRadius={radius || "3px"}
      cursor="pointer"
      sx={{ ...hoverStyles, ...overrideStyles }}
      bgGradient="gradient.main"
      _hover={_hover}
      {...props}
    >
      {image && (
        <Box sx={{ display: "flex", flexGrow: 3 }}>
          <Pic image={image} {...imageProps} />
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Card;
