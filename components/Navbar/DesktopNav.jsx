import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Link as ChakraLink,
  LinkBox,
} from "@chakra-ui/react";
import Link from "next/link";
import NavLogo from "./NavLogo";

const DesktopNav = ({ navs }) => {
  return (
    <Flex
      id="desktop-nav"
      bg="brand.light"
      minH={120}
      p={4}
      display={["none", "none", "none", "flex"]}
      justifyContent={["space-evenly", "center", "center", "space-evenly"]}
    >
      <>
        {/* bombers logo */}
        <NavLogo />
        {/* navs */}
        <HStack flex="1" spacing={10} size="150px" justifyContent="center">
          {navs?.map(
            (nav) =>
              !nav.hide && (
                <LinkBox
                  id={nav.id}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={nav.id}
                  color="brand.black"
                  _hover={{
                    color: "#212121",

                    borderBottom: "3px solid #212121",
                  }}
                >
                  {nav.name !== "more" ? (
                    <Link key={nav.name} href={`/${nav.slug}`}>
                      <ChakraLink
                        color="brand.black"
                        fontFamily="Montserrat"
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize="sm"
                        _hover={{
                          color: "#212121",
                          textDecoration: "none",
                        }}
                      >
                        {nav.name.toUpperCase()}
                      </ChakraLink>
                    </Link>
                  ) : (
                    <Box
                      onClick={handleCheck}
                      color="brand.black"
                      fontFamily="Big Shoulders Display"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="xl"
                      _hover={{
                        color: "#212121",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      More
                    </Box>
                  )}
                </LinkBox>
              )
          )}
        </HStack>
      </>
    </Flex>
  );
};

export default DesktopNav;
