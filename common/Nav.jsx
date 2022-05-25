import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  LinkBox,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import useBp from "../theme/useBp";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Pic from "./Pic";
import Socials from "./Socials";
import { stack as Menu } from "react-burger-menu";
import { helpers } from "../utils";

const Nav = ({ navs }) => {
  const [isDesktop] = useBp();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = helpers.debounce(() => {
    const { scrollY } = window;
    const isStart = scrollY < 10;
    const isScrollingDown = prevScrollPos > scrollY;
    const scrollUp = prevScrollPos - scrollY > 70;

    setVisible((isScrollingDown && scrollUp) || isStart);

    setPrevScrollPos(scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const handleMenuOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box
      as="nav"
      position="fixed"
      minW="100%"
      zIndex={100}
      transition="top 0.1s"
      top={visible ? "0" : "-60px"}
    >
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
        <Menu
          right
          onClose={onClose}
          isOpen={isOpen}
          width={"100%"}
          styles={{
            bmOverlay: {
              paddingTop: 16,
              zIndex: 101,
            },
            bmMenu: {
              background: "#212121",
              paddingTop: "2em",
            },
          }}
        >
          <VStack direction="column" spacing="6">
            {navs.map((nav) => (
              <NavLink nav={nav} onClick={onClose} />
            ))}
          </VStack>
        </Menu>
        {/* normal  */}
        <Flex
          bg="brand.light"
          minH={100}
          display={["none", "none", "none", "flex"]}
          justifyContent={["space-evenly", "center", "center", "space-evenly"]}
        >
          <>
            <Center w="100px">
              <Link href={`/`}>
                <a>
                  <img src="/images/logo.png" alt="Home" />
                </a>
              </Link>
            </Center>
            <HStack flex="1" spacing={10} size="150px" justifyContent="center">
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
                  bg="tomato"
                  color="brand.light"
                  variant="solid"
                  _hover={{
                    color: "brand.tomato",
                    background: "brand.light",
                    textDecoration: "none",
                    border: "3px solid tomato",
                  }}
                >
                  Dues
                </Button>
              </Link>
            </Center>
          </>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Nav;
