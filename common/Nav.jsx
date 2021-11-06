import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  VStack,
  Button,
  Heading,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  LinkBox,
  Stack,
} from "@chakra-ui/react";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import useBp from "../theme/useBp";
import Socials from "./Socials";
import Pic from "./Pic";
import _concat from "lodash/concat";

const DiagonalBg = styled(Flex)`
  background-color: #212121;
  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);
`;

const Nav = ({ navs }) => {
  const [isDesktop] = useBp();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {};

  return (
    <Box as="nav" position="sticky">
      <Stack spacing={0}>
        <HStack
          minH={["50px", "75px", "50px", "50px"]}
          bg="brand.black"
          p="2"
          id="socials"
          justifyContent="flex-end"
        >
          {isDesktop && <Socials />}
          {!isDesktop && (
            <>
              <Flex my="1" alignItems="center">
                <IconButton
                  size="lg"
                  aria-label="menu-button"
                  variant="link"
                  fontSize="20px"
                  icon={<HamburgerIcon />}
                  onClick={handleMenuOpen}
                />
              </Flex>
              <Link href="/">
                <Flex
                  my="1"
                  flexGrow="2"
                  justifyContent="center"
                  alignItems="center"
                >
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
              <Flex my="1" alignItems="center">
                <IconButton
                  size="lg"
                  aria-label="menu-button"
                  variant="link"
                  color="transparent"
                  fontSize="20px"
                  icon={<HamburgerIcon />}
                  onClick={handleMenuOpen}
                />
              </Flex>
            </>
          )}
        </HStack>
        <Drawer onClose={onClose} isOpen={isOpen} size={"lg"} bg="brand.black">
          <DrawerOverlay />
          <DrawerContent bg="brand.black">
            <DrawerCloseButton
              onClick={() => setIsOpen(false)}
              color="brand.light"
            />
            <DrawerHeader color="brand.light" mb="8">
              St Louis Bombers Rugby
            </DrawerHeader>
            <DrawerBody pt="8">
              <VStack direction="column" spacing="8">
                {_concat(
                  [
                    { name: "home", id: "", slug: "" },
                    { name: "Donate", id: "pay", slug: "pay" },
                  ],
                  navs
                ).map((nav) => (
                  <LinkBox
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
                    <Link key={nav.name} href={`/${nav.slug}`}>
                      <ChakraLink
                        color="brand.white"
                        fontFamily="Big Shoulders Display"
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize="2xl"
                        _hover={{
                          color: "#e3e3e3",
                          textDecoration: "none",
                        }}
                      >
                        {nav.name.toUpperCase()}
                      </ChakraLink>
                    </Link>
                  </LinkBox>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {isDesktop && (
          <Flex
            bg="brand.light"
            style={{ minHeight: 100 }}
            justifyContent={[
              "space-evenly",
              "center",
              "center",
              "space-evenly",
            ]}
          >
            <>
              <Center w="100px">
                <Link href={`/`}>
                  <a>
                    <img src="/images/logo.png" alt="Home" />
                  </a>
                </Link>
              </Center>
              <HStack
                flex="1"
                spacing={10}
                size="150px"
                justifyContent="center"
              >
                {navs.map((nav) => (
                  <LinkBox
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
                    <Link key={nav.name} href={`/${nav.name}`}>
                      <ChakraLink
                        color="brand.black"
                        fontFamily="Big Shoulders Display"
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize="xl"
                        _hover={{
                          color: "#212121",
                          textDecoration: "none",
                        }}
                      >
                        {nav.name.toUpperCase()}
                      </ChakraLink>
                    </Link>
                  </LinkBox>
                ))}
              </HStack>

              <Center p="4" justifyContent="flex-end">
                <Link href="/pay">
                  <Button
                    as="a"
                    bg="brand.highlight"
                    color="brand.light"
                    variant="solid"
                    _hover={{
                      color: "brand.highlight",
                      background: "brand.light",
                      textDecoration: "none",
                      border: "2px solid tomato",
                    }}
                  >
                    Dues
                  </Button>
                </Link>
              </Center>
            </>
          </Flex>
        )}
      </Stack>
    </Box>
  );
};

export default Nav;
