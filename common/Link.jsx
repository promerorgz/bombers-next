import React from "react";
import { Box, Flex, LinkBox } from "@chakra-ui/react";
import NextLink from "next/link";
import { toLower } from "lodash";

const Link = ({ as, href, children, ...props }) => {
  console.log(toLower(href));
  return (
    <NextLink as={as} href={toLower(href)} passHref>
      <LinkBox as="a" {...props}>
        {children}
      </LinkBox>
    </NextLink>
  );
};

export default Link;
