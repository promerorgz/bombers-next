import { Button } from "@chakra-ui/react";
import { toLower } from "lodash";
import NextLink from "next/link";
import {
  HTMLAttributeAnchorTarget,
  PropsWithChildren,
  ReactElement,
} from "react";

type LinkProps = {
  as: string;
  href: string;
  variant?: "expandy" | "outline" | "solid" | "menu";
  target: HTMLAttributeAnchorTarget;
};

const Link = ({
  as,
  href,
  variant = "solid",
  children,
  target = "_blank",
  ...props
}: PropsWithChildren<LinkProps>): ReactElement => {
  return (
    <NextLink href={toLower(href)} passHref target={target}>
      <Button
        variant={variant}
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
