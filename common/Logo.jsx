import { Center, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Pic from "./Pic";

const Logo = ({ w, sx }) => {
  return (
    <Center {...sx} w={w || "100%"}>
      <Link href="/" passHref>
        <ChakraLink>
          <Pic
            fit="contain"
            style={{
              height: 50,
              width: 50,
            }}
            src="/images/white_logo.png"
          />
        </ChakraLink>
      </Link>
    </Center>
  );
};

export default Logo;
