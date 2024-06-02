import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export type NavLogoProps = {
  size?: "sm" | "md" | "lg" | "xl" | string;
  color?: string;
  logoOnly?: boolean;
  disableGutters?: boolean;
  styles?: any;
};

const defaultProps: NavLogoProps = {
  size: "md",
  color: "default",
  logoOnly: false,
  disableGutters: false,
};

const NavLogo = ({
  size,
  color,
  logoOnly,
  disableGutters,
  styles,
}: NavLogoProps) => {
  const dims = {
    sm: [30, 30],
    md: [50, 50],
    lg: [70, 70],
    xl: [90, 90],
    undefined: [null, null],
  };

  const [height, width] = typeof size === "string" ? dims[size] : size;

  const display = logoOnly ? "none" : "flex";

  return (
    <Center
      minW="100px"
      p={disableGutters ? 0 : 4}
      display="flex"
      flexDirection="column"
      position="relative"
      textDecoration="none"
      transition="width .2s,opacity .2s ease-in-out .2s"
      zIndex={30}
      sx={{ ...styles }}
    >
      <Link href={`/`} passHref legacyBehavior>
        <ChakraLink
          display="flex"
          flex-grow="1"
          position="relative"
          width="100%"
          justifyContent="flex-start"
          align-items="center"
          transition="height .2s"
          _hover={{
            color: "inherit",
            outline: 0,
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <Flex direction="row" alignItems="center" justifyContent="flex-start">
            <Box mr={logoOnly ? 0 : 3}>
              <img
                className="logo-img"
                src={
                  color === "brand.light"
                    ? "/static/logos/white_logo.png"
                    : "/static/logos/logo.png"
                }
                alt="Home"
                height={height}
                width={width}
              />
            </Box>
            <Stack
              alignItems="flex-start"
              spacing={0}
              fontWeight="extrabold"
              display={display}
            >
              <Heading
                className="logo-heading"
                size={{
                  base: size || "md",
                  sm: size || "md",
                  md: size || "md",
                  lg: size || "lg",
                  xl: size || "xl",
                }}
                mr={size === "sm" ? 1 : 0}
                mb={0}
                color={color || "inherit"}
                whiteSpace={"pre-wrap"}
              >
                {"Saint Louis\nBombers Rugby"}
              </Heading>

              {/* <Heading
                className="logo-heading"
                size={{
                  base: size || "md",
                  sm: size || "md",
                  md: size || "md",
                  lg: size || "lg",
                  xl: size || "xl",
                }}
                color={color || "inherit"}
              >
                Bombers Rugby
              </Heading> */}
            </Stack>
          </Flex>
        </ChakraLink>
      </Link>
    </Center>
  );
};

NavLogo.defaultProps = defaultProps;
export default NavLogo;
