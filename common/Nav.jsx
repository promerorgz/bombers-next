import {
  Box,
  Center,
  Flex,
  LinkBox,
  Link as ChakraLink,
  Stack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import VenmoIcon from "../icons/Venmo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DiagonalBg = styled(Flex)`
  background-color: #212121;
  background-image: linear-gradient(135deg, #212121 50% #e2e2e2 50%);
`;

const Nav = ({ categories }) => {
  const navs = [
    {
      name: "news",
      id: "news",
      slug: "news",
    },
    {
      name: "schedule",
      id: "schedule",
      slug: "schedule",
    },
    {
      name: "team",
      id: "team",
      slug: "team",
    },
    {
      name: "contact",
      id: "contact",
      slug: "contact",
    },
    {
      name: "photos",
      id: "photos",
      slug: "photos",
    },
    {
      name: "more",
      id: "more",
      slug: "more",
    },
    {
      name: "shop",
      id: "shop",
      slug: "shop",
    },
  ];

  const socials = [
    {
      name: "facebook",
      url: "https://www.facebook.com/stlbombersrugby",
      icon: faFacebookSquare,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/stl_bombersrfc/",
      icon: faInstagram,
    },
    {
      name: "venmo",
      url: "https://account.venmo.com/u/STLBombersRFC",
      icon: "",
    },
  ];

  return (
    <nav>
      <Stack spacing={0}>
        <Flex
          minH="50px"
          bg="brand.black"
          id="socials"
          flexGrow="1"
          justifyContent="end"
          alignContent="center"
        >
          {socials.map((page) => {
            return (
              <ChakraLink m="2" href={page.url} target="_blank" key={page.url}>
                {page.name === "venmo" ? (
                  <VenmoIcon size="lg" />
                ) : (
                  <FontAwesomeIcon
                    color="white"
                    size="2x"
                    icon={page.icon}
                    // style={{ color: "white" }}
                  ></FontAwesomeIcon>
                )}
              </ChakraLink>
            );
          })}
        </Flex>
        <Flex bg="brand.light" style={{ minHeight: 100 }}>
          <Center w="100px">
            <Link href={`/`}>
              <a>
                <img src="/images/logo.png" alt="Your Name" />
              </a>
            </Link>
          </Center>
          <Center flex="2" size="150px" justifyContent="space-evenly">
            {navs.map((nav) => (
              <ChakraLink
                key={nav.name}
                color="brand.black"
                href={`/${nav.name}`}
                fontFamily="Big Shoulders Display"
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="xl"
                _hover={{
                  color: "#212121",
                  textDecoration: "none",
                }}
              >
                <LinkBox
                  display="flex"
                  alignItems="center"
                  key={nav.id}
                  color="brand.black"
                  _hover={{
                    color: "#212121",

                    borderBottom: "3px solid #212121",
                  }}
                >
                  {nav.name.toUpperCase()}
                </LinkBox>
              </ChakraLink>
            ))}
          </Center>
          <Center p="4" flex="1" justifyContent="flex-end">
            <Button
              borderRadius="8px"
              color="brand.light"
              variant="solid"
              bg="tomato"
              _hover={{
                backgroundColor: "#e2e2e2",
                color: "tomato",
                border: "2px solid tomato",
              }}
            >
              Donate / Dues
            </Button>
          </Center>
        </Flex>
      </Stack>
    </nav>
  );
};

export default Nav;
