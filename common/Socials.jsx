import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import VenmoIcon from "../icons/Venmo";

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
    md: "xl",
    lg: "2x",
    xl: "3x",
  }[size];
  return (
    <>
      {socials.map((page) => {
        return (
          <ChakraLink m="2" href={page.url} target="_blank" key={page.url}>
            {page.name === "venmo" ? (
              <VenmoIcon size={size || "lg"} color={iconColor || "white"} />
            ) : (
              <FontAwesomeIcon
                color={iconColor || "white"}
                size={iconSize || "2x"}
                icon={page.icon}
                // style={{ color: "white" }}
              ></FontAwesomeIcon>
            )}
          </ChakraLink>
        );
      })}
    </>
  );
};

export default Socials;
