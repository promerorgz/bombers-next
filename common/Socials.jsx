import { Flex, Button, Stack } from "@chakra-ui/react";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import VenmoIcon from "../icons/Venmo";
import Link from "next/link";

const Socials = ({ color, size }) => {
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

  const iconColor = {
    dark: "#242424",
    light: "#e2e2e2",
  }[color];

  const iconSize = {
    sm: "lg",
    md: "1x",
    lg: "2x",
    xl: "3x",
  }[size];

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={5}
    >
      {socials.map((page) => {
        return (
          <Link href={page?.url} target="_blank" key={page?.url} passHref>
            <Button variant="link" as="a" pb="3" m="2">
              {page.name === "venmo" ? (
                <VenmoIcon size={size || "lg"} color={iconColor || "white"} />
              ) : (
                <FontAwesomeIcon
                  color={iconColor || "white"}
                  size={iconSize || "1x"}
                  icon={page.icon}
                />
              )}
            </Button>
          </Link>
        );
      })}
    </Stack>
  );
};

export default Socials;
