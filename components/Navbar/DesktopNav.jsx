import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Link from "common/Link";
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
        <HStack flex="1" spacing={2} size="150px" justifyContent="center">
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
                  {!nav.subMenus?.length ? (
                    <Link key={nav.name} href={`/${nav.slug}`} passHref>
                      {nav.name.toUpperCase()}
                    </Link>
                  ) : (
                    <Menu flip>
                      <MenuButton
                        rightIcon={<ChevronDownIcon />}
                        color="brand.black"
                        fontFamily="Montserrat"
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize="sm"
                        _hover={{
                          color: "#212121",
                          textDecoration: "none",
                        }}
                        as={Button}
                      >
                        {nav.name}
                      </MenuButton>
                      <MenuList>
                        {nav.subMenus?.map((sub) => {
                          return (
                            <MenuItem
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
                              {sub.name || sub.title}
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </Menu>
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
