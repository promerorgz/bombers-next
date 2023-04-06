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
import useNav from "hooks/useNav";
import Link from "common/Link";
import { useRouter } from "next/router";
import NavLogo from "../NavLogo";

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
          bg="gradient.regular"
          minW="100%"
          maxH={"120px"}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex flex="2" justifyContent="flex-start" w="100%">
            <NavLogo size="sm" color="brand.light" disableGutters />
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
        <Box
          minH="7vw"
          bg="linear-gradient(
        180deg,
        var(--chakra-colors-brand-dark) -30%,
        transparent
      )"
        ></Box>
      </Box>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={["xs", "md", "lg", "xl"]}
        colorScheme="gray"
      >
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
            <Accordion>
              {navs.map((nav) => {
                return (
                  <AccordionItem borderTopWidth={0} borderBottomWidth={0}>
                    <h3>
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
                      >
                        <Box flex="1" textAlign="left">
                          <Heading size="md" color="brand.light">
                            {nav.name}
                          </Heading>
                        </Box>
                        {nav?.subMenus ? <AccordionIcon /> : null}
                      </AccordionButton>
                    </h3>
                    {nav.subMenus && (
                      <AccordionPanel>
                        {nav.subMenus?.map((sub) => {
                          return (
                            <Link href={`/${sub.slug}`}>
                              <Heading
                                size="xs"
                                color="brand.light"
                                p={2}
                                casing="title"
                              >
                                {sub.name}
                              </Heading>
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
