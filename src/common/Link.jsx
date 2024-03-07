import { Button } from "@chakra-ui/react";
import { toLower } from "lodash";
import NextLink from "next/link";

const Link = ({ as, href, children, ...props }) => {
  return (
    <NextLink as={as} href={toLower(href)} passHref legacyBehavior>
      <Button
        variant={props.variant || "outline"}
        color="brand.black"
        fontFamily="Montserrat"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="sm"
        _hover={{
          color: "#212121",
          textDecoration: "none",
        }}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
