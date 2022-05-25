import { Link as ChakraLink, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavLink = ({ nav, onClick }) => {
  return (
    <LinkBox
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      key={nav.id}
      color="brand.black"
      _hover={{
        color: "#212121",
        borderBottom: "3px solid #212121",
      }}
      onClick={onClick}
    >
      <Link
        key={nav.name}
        href={`/${nav.slug}`}
        passHref
        style={{ textAlign: "center" }}
      >
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
  );
};

export default NavLink;
