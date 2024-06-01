import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Socials = ({
  color,
  size,
}: {
  color?: "dark" | "light" | string;
  size?: "sm" | "md" | "lg" | "xl" | string;
}) => {
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
  ];

  const iconColor = {
    dark: "#242424",
    light: "#e2e2e2",
  }[color || "light"];

  const iconSize = {
    sm: "lg",
    md: "1x",
    lg: "2x",
    xl: "3x",
  }[size || "md"];

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <HStack spacing={size === "xl" ? 8 : 0}>
        {socials.map((page) => {
          return (
            <Link
              href={page?.url}
              key={page?.url}
              passHref
              legacyBehavior
            >
              <Button variant="link" as="a" pb="3" target="_blank">
                {page.name === "venmo" ? (
                  <></>
                ) : (
                  <FontAwesomeIcon
                    color={iconColor || "white"}
                    fontSize={iconSize || "1x"}
                    icon={page.icon}
                  />
                )}
              </Button>
            </Link>
          );
        })}
      </HStack>
    </Stack>
  );
};

export default Socials;
