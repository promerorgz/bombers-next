import { Box, Flex, ResponsiveValue, Stack, Text } from "@chakra-ui/react";
import { Image as ImageType } from "src/types/imageTypes";
import styled from "styled-components";
import Link from "../common/Link";

type ButtonProps = {
  display: string;
  url?: string;
  color?: string;
  card?: boolean;
};

type HeroProps = {
  title?: string;
  subTitle?: string;
  links?: Array<ButtonProps>;
  image?: ImageType;
  size: string | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  textAlign?: ResponsiveValue<any>;
  bg?: string;
  direction?: "column" | "row";
  contentLink?: string;
  parallax?: boolean;
};

const heightSizes = {
  sm: "20vh",
  md: "30vh",
  lg: "40vh",
  xl: "50vh",
  "2xl": "65vh",
  "3xl": "75vh",
  full: "90vh",
};

const HeroContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props: HeroProps) => heightSizes[props.size] || "50vh"};
  ${(props: HeroProps) =>
    props.parallax
      ? ` 
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
      : ""}
  ${(props: HeroProps) =>
    props.image
      ? ` background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      120deg,
      #00000060 40%,
      #00000060 40%,
      #00000060 50%,
      #00000060 50%,
      #00000060
    ),url(${props.image.url});`
      : ""}
`;

const Hero = ({
  title,
  subTitle,
  links = [],
  image,
  size = "xl",
  textAlign = "center",
  bg,
  direction,
  contentLink,
  parallax,
}: HeroProps) => {
  return (
    <>
      <HeroContainer size={size} image={image} parallax={parallax}>
        <Flex
          direction={direction}
          alignItems="center"
          gap="16"
          p="8"
          justifyContent={textAlign || "flex-start"}
          w="100%"
        >
          <Stack
            spacing="1"
            direction="column"
            alignItems="center"
            id="hero-text-container"
          >
            {subTitle && (
              <Text
                letterSpacing="3px"
                fontWeight="normal"
                backgroundClip="text"
                lineHeight={1}
                fontSize="64px"
                casing="uppercase"
                fontFamily="Big Shoulders Display"
                color="brand.light"
                align={textAlign}
              >
                {subTitle}
              </Text>
            )}
            {title && (
              <Text
                letterSpacing="3px"
                fontWeight="bolder"
                backgroundClip="text"
                lineHeight={1}
                fontSize="96px"
                casing="uppercase"
                fontFamily="Big Shoulders Display"
                color="white"
                align={textAlign}
              >
                {title}
              </Text>
            )}
          </Stack>
          <Box>
            {links.length &&
              links.map((link) => {
                return (
                  <Link variant="solid" as="a" href={link.url} target="_blank">
                    {link.display}
                  </Link>
                );
              })}
          </Box>
        </Flex>
      </HeroContainer>
    </>
  );
};

export default Hero;
