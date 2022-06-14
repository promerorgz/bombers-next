import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  LinkBox,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import useNav from "../lib/useNav";
import useBp from "../theme/useBp";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Socials from "./Socials";
import Drawer from "./Drawer";

const Nav = () => {
  const { navs, subMenus } = useNav();
  const [isDesktop] = useBp();
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);

  const handleCheck = () => {
    setShowSub(!showSub);
  };
  const handleMenuOpen = () => setIsOpen(true);
  const onClose = () => {
    setShowSub(false);
    setIsOpen(false);
  };

  return (
    <>
      <Box as="nav" minW="100%">
        <Stack spacing={0}>
          {/* top bar */}
          <HStack
            minH={["50px", "75px", "50px", "50px"]}
            bg="brand.black"
            p="2"
            justifyContent="flex-end"
            id="topbar"
          >
            {/* top bar show only on desktop */}
            {isDesktop && <Socials />}
            {/* mobile view */}
            {!isDesktop && (
              <>
                <Flex
                  my="1"
                  px="4"
                  flexGrow="2"
                  justifyContent="start"
                  alignItems="center"
                >
                  <IconButton
                    size="xl"
                    aria-label="menu-button"
                    variant="link"
                    fontSize="20px"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={handleMenuOpen}
                  />
                  <Logo w={"85%"} sx={{ zIndex: 105 }} />
                </Flex>
                {isOpen && (
                  <Drawer
                    position="left"
                    onClose={onClose}
                    show={isOpen}
                    size="lg"
                  >
                    {navs?.map((nav) => (
                      <NavLink nav={nav} id={nav.slug} onClick={onClose} />
                    ))}
                  </Drawer>
                )}
              </>
            )}
          </HStack>

          {/* normal  */}
          <Flex
            id="desktop-nav"
            bg="brand.light"
            minH={100}
            display={["none", "none", "none", "flex"]}
            justifyContent={[
              "space-evenly",
              "center",
              "center",
              "space-evenly",
            ]}
          >
            <>
              {/* bombers logo */}
              <Center w="100px">
                <Link href={`/`}>
                  <a>
                    <img src="/images/logo.png" alt="Home" />
                  </a>
                </Link>
              </Center>
              {/* navs */}
              <HStack
                flex="1"
                spacing={10}
                size="150px"
                justifyContent="center"
              >
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
          {showSub && (
            <Drawer
              placement="right"
              onClose={onClose}
              show={showSub}
              size="md"
            >
              {subMenus?.length &&
                subMenus?.map((sub) => (
                  <NavLink nav={sub} id={sub.title} onClick={onClose} />
                ))}
            </Drawer>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Nav;
