import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginButton = () => {
  return (
    <Flex>
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
  );
};

export default LoginButton;
