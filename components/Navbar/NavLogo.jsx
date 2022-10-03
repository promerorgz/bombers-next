import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const NavLogo = ({ size, color }) => {
  const smallDims = size === "sm" ? { height: "30px", width: "30px" } : {};
  return (
    <Center minW="100px" p={4}>
      <Link href={`/`}>
        <a>
          <Flex direction="row" alignItems="center" justifyContent="flex-start">
            <Box mr={3}>
              <img
                src={
                  color === "brand.light"
                    ? "/images/white_logo.png"
                    : "/images/logo.png"
                }
                alt="Home"
                {...smallDims}
              />
            </Box>
            <Stack alignItems="flex-start" spacing={0} fontWeight="extrabold">
              <Heading
                size={size || "xl"}
                mr={size === "sm" ? 1 : 0}
                color={color || "inherit"}
              >
                St. Louis
              </Heading>
              <Heading size={size || "xl"} color={color || "inherit"}>
                Bombers Rugby
              </Heading>
            </Stack>
          </Flex>
        </a>
      </Link>
    </Center>
  );
};

export default NavLogo;
