import {
  Box,
  Button,
  Flex,
  HStack,
  LinkBox,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
<<<<<<< Updated upstream:src/components/Navbar/navs/DesktopNav.tsx
import Link from "../../../common/Link";
import useNav from "../../../hooks/useNav";
import NavLogo from "../../../common/NavLogo";
=======
import Link from "common/Link";
import useNav from "hooks/useNav";
import NavLogo from "../NavLogo";
import { useState } from "react";
import { sub } from "date-fns";
>>>>>>> Stashed changes:components/Navbar/navs/DesktopNav.jsx

const DesktopNav = () => {
  const { navs } = useNav();

  const [submenuOpen, setSubmenuOpen] = useState("");
  const openSubmenu = (e) => {
    setSubmenuOpen(e.target.id);
  };

  const closeSubmenu = (e) => {
    setSubmenuOpen("");
  };

  return (
    <>
      <Flex
        id="desktop-nav-container"
        bg="brand.light"
        minH={120}
        display={["none", "none", "flex", "flex"]}
        justifyContent={["space-evenly", "center", "center", "space-evenly"]}
      >
<<<<<<< Updated upstream:src/components/Navbar/navs/DesktopNav.tsx
        {/* bombers logo */}
        <Box id="desktop-logo" display={["none", "none", "none", "flex"]}>
          <NavLogo />
        </Box>
        <HStack flex="1" spacing={2} justifyContent={"flex-end"}>
          {navs?.map(
            (nav) =>
              !nav.hide && (
                <div key={nav.id}>
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
                    {!nav.subMenus?.length ? (
                      <Link
                        key={nav.name}
                        as={`/${nav.slug}`}
                        href={`/${nav.slug}`}
                        passHref
                      >
                        {nav.name.toUpperCase()}
                      </Link>
                    ) : (
                      <Popover trigger="hover">
                        <PopoverTrigger>
                          <Button
                            as={"a"}
                            href={`/${nav.slug}`}
=======
        <Flex
          id="nav-items-container"
          direction="column"
          flex={2}
          grow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Flex id="main-menu" flex="1">
            <HStack
              flex="1"
              spacing={2}
              size="150px"
              justifyContent={"center"}
              minH="70px"
            >
              {navs?.map(
                (nav) =>
                  !nav.hide && (
                    <>
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
                        {!nav.subMenus?.length ? (
                          <Link
                            variant="menu"
                            key={nav.name}
                            href={`/${nav.slug}`}
                            passHref
                            id="menu-link"
                            fontSize="lg"
                          >
                            {nav.name}
                          </Link>
                        ) : (
                          <Button
                            id={nav.id}
                            onMouseEnter={openSubmenu}
>>>>>>> Stashed changes:components/Navbar/navs/DesktopNav.jsx
                            color="brand.black"
                            fontFamily="Montserrat"
                            variant="menu"
                            fontWeight="bold"
                            fontSize="lg"
                            _hover={{
                              color: "#212121",
                              textDecoration: "none",
                            }}
                          >
                            {nav.name}
                          </Button>
<<<<<<< Updated upstream:src/components/Navbar/navs/DesktopNav.tsx
                        </PopoverTrigger>
                        <PopoverContent maxWidth={220}>
                          {nav.subMenus?.map((sub) => {
                            return (
                              <PopoverBody
                                as={"a"}
                                zIndex={100}
                                color="brand.black"
                                fontFamily="Montserrat"
                                textTransform="uppercase"
                                fontWeight="bold"
                                fontSize="sm"
                                _hover={{
                                  color: "#212121",
                                  textDecoration: "none",
                                }}
                                key={sub.name}
                                href={`/${sub.slug}`}
                              >
                                {sub.name || sub.slug}
                              </PopoverBody>
                            );
                          })}
                        </PopoverContent>
                      </Popover>
                    )}
                  </LinkBox>
                </div>
              )
          )}
        </HStack>
=======
                        )}
                      </LinkBox>
                    </>
                  )
              )}
            </HStack>
          </Flex>
          <Flex id="subitem-menu" bg="brand.white" flex="1" width="100%">
            <Box
              mt="-50px"
              id="desktop-logo"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <NavLogo size={[100, 100]} logoOnly />
            </Box>
            <HStack
              spacing={2}
              size="150px"
              justifyContent={"center"}
              maxW="700px"
            >
              {submenuOpen &&
                navs
                  .find((nav) => nav.id === submenuOpen)
                  ?.subMenus.map((sub) => {
                    return (
                      <Link
                        variant="menu"
                        key={sub.name}
                        href={`/${sub.slug}`}
                        passHref
                        id="menu-link"
                      >
                        {sub.name}
                      </Link>
                    );
                  })}
            </HStack>
          </Flex>
        </Flex>
>>>>>>> Stashed changes:components/Navbar/navs/DesktopNav.jsx
      </Flex>
    </>
  );
};

export default DesktopNav;
