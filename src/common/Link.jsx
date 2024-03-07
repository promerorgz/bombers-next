import React from "react";
import {
  Box,
  Flex,
  LinkBox,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { toLower } from "lodash";

const Link = ({ as, href, children, ...props }) => {
  return (
    <NextLink as={as} href={toLower(href)} passHref legacyBehavior>
      <Button
        color="brand.black"
        fontFamily="Montserrat"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="sm"
        _hover={{
          color: "#212121",
          textDecoration: "none",
        }}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
