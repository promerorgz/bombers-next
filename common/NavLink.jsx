import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link as ChakraLink,
  LinkBox,
  Box,
} from "@chakra-ui/react";
import useNav from "../lib/useNav";

const NavLink = ({ id, nav, onClick }) => {
  const navName = nav.name || nav.title;
  const { subMenus } = useNav();
  return navName === "more" ? (
    <Accordion
      allowToggle
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        color: "white",
      }}
    >
      <AccordionItem
        sx={{
          textAlign: "center",
          borderWidth: 0,
          borderColor: "transparent",
          justifyContent: "center",
        }}
      >
        <AccordionButton
          sx={{ border: "none", textAlign: "center" }}
          _expanded={{
            borderWidth: 0,
            borderColor: "transparent",
            justifyContent: "center",
          }}
        >
          <Box
            justifyContent="center"
            textAlign="center"
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
            More
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {subMenus.map((item) => (
            <NavLink id={item.id} nav={item} onClick={onClick} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ) : (
    <LinkBox
      id={id}
      w="100%"
      my="8"
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
        key={navName}
        href={navName === "home" ? "/" : `/${nav.slug}`}
        passHref
        style={{ textAlign: "center", color: "teal" }}
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
          {navName.toUpperCase()}
        </ChakraLink>
      </Link>
    </LinkBox>
  );
};

export default NavLink;
