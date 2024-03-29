import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Drawer from "../../common/Drawer";
import NavLink from "../../common/NavLink";
import Socials from "../../common/Socials";
import NavLogo from "./NavLogo";

const TopNav = ({ navs }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showSub, setShowSub] = useState(false);

  const handleMenuOpen = () => setIsOpen(true);
  const onClose = () => {
    setShowSub(false);
    setIsOpen(false);
  };

  return (
    <HStack
      minH={["50px", "75px", "50px", "50px"]}
      bg="gradient.regular"
      flexGrow="2"
      justifyContent="flex-start"
      id="topbar"
    >
      <Flex
        w="100%"
        display={["none", "none", "flex", "flex"]}
        mx={8}
        justifyContent="space-between"
      >
        <Socials />
        <Menu>
          <MenuButton as={Button} size="default" variant="expandy">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </MenuButton>
          <MenuList>
            <MenuItem
              color="brand.black"
              fontFamily="Montserrat"
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="sm"
              textAlign="right"
              _hover={{
                color: "#212121",
                textDecoration: "none",
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              color="brand.black"
              fontFamily="Montserrat"
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="sm"
              textAlign="right"
              _hover={{
                color: "#212121",
                textDecoration: "none",
              }}
              href={"/pay"}
            >
              Dues
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box id="mobile-view" display={["flex", "flex", "flex", "none"]} w="100%">
        <Flex my="1" px="4" justifyContent="space-between" alignItems="center">
          <Flex flexGrow="1" justifyContent="flex-start">
            <IconButton
              size="xl"
              aria-label="menu-button"
              variant="link"
              fontSize="20px"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={handleMenuOpen}
            />
          </Flex>
          <Flex flexGrow="2" justifyContent="center" w="100%">
            <NavLogo size="sm" color="brand.light" />
          </Flex>
          <Flex flexGrow="1" justifyContent="flex-end">
            <Button
              variant="outline"
              isRound
              _hover={{
                borderColor: "brand.highlight",
                bg: "brand.light",
              }}
              leftIcon={<FontAwesomeIcon icon={faUser} />}
              size="sm"
            >
              Members
            </Button>
          </Flex>
        </Flex>
        {isOpen && (
          <Drawer position="left" onClose={onClose} show={isOpen} size="lg">
            {navs.length &&
              navs?.map((nav) => (
                <NavLink nav={nav} id={nav.slug} onClick={onClose} />
              ))}
          </Drawer>
        )}
      </Box>
    </HStack>
  );
};

export default TopNav;
