import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Twirl as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import Link from "src/common/Link";
import useNav from "src/hooks/useNav";
import NavLogo from "../../../common/NavLogo";

const MobileNav = () => {
  const { navs } = useNav();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box display={["block", "block", "none", "none", "none"]}>
        <Flex
          id="mobile-nav"
          minH={"100px"}
          minW="100%"
          maxH={"120px"}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex flex="2" justifyContent="flex-start" w="100%">
            <NavLogo size="sm" color="brand.light" />
          </Flex>
          <Flex
            flex="1"
            justifyContent="flex-end"
            w="100%"
            alignItems="center"
            p={4}
          >
            <Hamburger
              toggle={onOpen}
              toggled={isOpen}
              rounded
              hideOutline
              size={28}
              color="#fff"
            />
          </Flex>
        </Flex>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size="full" colorScheme="gray">
        <DrawerOverlay />
        <DrawerContent bg="brand.dark">
          <Flex
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            p={4}
          >
            <Hamburger
              toggle={onClose}
              toggled={isOpen}
              rounded
              hideOutline
              size={28}
              color="#fff"
            />
          </Flex>

          <DrawerBody>
            <Accordion
              as="ul"
              allowMultiple
              allowToggle
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                height: "100%",
              }}
            >
              {navs.map((nav) => {
                return (
                  <AccordionItem
                    as="li"
                    borderTopWidth={0}
                    key={nav.slug}
                    sx={{
                      borderBottom: "1px solid #ffffff50",
                    }}
                  >
                    <AccordionButton
                      onClick={(e) => {
                        if (!nav.subMenus) {
                          router.push(nav.slug);
                        }
                      }}
                      _disabled={{
                        color: "brand.light",
                      }}
                      _expanded={{
                        bg: "brand.black",
                        color: "white",
                      }}
                      sx={{ border: "none" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Heading size="md" color="brand.light">
                          {nav.name}
                        </Heading>
                      </Box>
                      {nav?.subMenus ? (
                        <AccordionIcon color="brand.light" fontSize="large" />
                      ) : null}
                    </AccordionButton>
                    {nav.subMenus && (
                      <AccordionPanel
                        display="flex"
                        flexDirection="column"
                        px={0}
                      >
                        {nav.subMenus?.map((sub) => {
                          return (
                            <Link
                              id="link"
                              href={`/${sub.slug}`}
                              key={sub.slug}
                            >
                              <Box as="div" flex={1} textAlign="left">
                                <Heading
                                  size="xs"
                                  color="brand.light"
                                  p={2}
                                  casing="title"
                                >
                                  {sub.name}
                                </Heading>
                              </Box>
                            </Link>
                          );
                        })}
                      </AccordionPanel>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
