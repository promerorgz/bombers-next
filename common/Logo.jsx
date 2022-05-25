import { Center, Link as ChakraLink, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Pic from "./Pic";

const Logo = ({ w, sx }) => {
  return (
    <Link href="/" passHref>
      <Flex my="1" flexGrow="2" justifyContent="center" alignItems="center">
        <Pic
          fit="contain"
          style={{
            height: 50,
            width: 50,
          }}
          src="/images/white_logo.png"
        ></Pic>
      </Flex>
    </Link>
  );
};

export default Logo;
