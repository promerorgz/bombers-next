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
  bgColor,
  styles,
  _hover,
  imageProps,
  ...props
}) => {
  const makeClickable = (component) =>
    link ? (
      <Link as={as} href={link}>
        <LinkBox m="4">{component}</LinkBox>
      </Link>
    ) : (
      <>{component}</>
    );

  const hoverStyles = link
    ? {
        border: "1px solid #e2e2e2",
        transition: "all .2s ease-in-out",
        // boxShadow: "0px 5px 10px #212121",
        _hover: {
          transform: "scale(1.02)",
          boxShadow: "0px 5px 10px #21212150",
        },
      }
    : {};

  const overrideStyles = {
    ...styles,
    background: bgColor,
  };

  return makeClickable(
    <Flex
      minW="100%"
      maxW="5xl"
      minH="200px"
      borderWidth={border ? "2px" : 0}
      overflow="hidden"
      borderRadius="3px"
      borderColor="gray.dark"
      cursor="pointer"
      sx={{ ...hoverStyles, ...overrideStyles }}
      bgGradient="gradient.main"
      _hover={_hover}
      flexDirection="column"
      justifyContent="space-around"
      {...props}
    >
      {image && (
        <Box sx={{ display: "flex", flexGrow: 3 }}>
          <Pic image={image} {...imageProps} />
        </Box>
      )}
      {children}
    </Flex>
  );
};

export default Card;
