import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  ResponsiveValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import Image from "next/image";
<<<<<<< Updated upstream:src/common/Hero.tsx
import React from "react";

type ButtonProps = {
  display: string;
  link: string;
  color: string;
};

type HeroProps = {
  text?: string;
  secondaryText?: string;
  buttons?: Array<ButtonProps>;
  image?: string;
  size?: string | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  textAlign?: ResponsiveValue<any>;
  bg?: string;
  direction?: "column" | "row";
  contentLink?: string;
  parallax?: boolean;
};
=======
>>>>>>> Stashed changes:common/Hero.jsx

const heightSizes = {
  sm: "20vh",
  md: "30vh",
  lg: "40vh",
  xl: "50vh",
  "2xl": "65vh",
  "3xl": "75vh",
  full: "100vh",
};

const HeroContainer = styled.div`
  position: absolute;
  font-family: "Montserrat";
  font-weight: 900;
  line-height: 65px;
  text-transform: uppercase;
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
    props.bg
      ? ` background-repeat: no-repeat;
  background-position: inherit;
  background-size: cover;
  background-image: linear-gradient(
      120deg,
      #00000060 40%,
      #00000060 40%,
      #00000060 50%,
      #00000060 50%,
      #00000060
    ),url(${props.bg});`
      : ""}
`;

const Hero = ({
  text,
  secondaryText,
  buttons = [],
  image,
  size = "xl",
  textAlign,
  bg,
  direction,
  contentLink,
  parallax,
<<<<<<< Updated upstream:src/common/Hero.tsx
}: HeroProps) => {
  return (
    <>
      <HeroContainer size={size} bg={bg} parallax={parallax}>
        {image && (
          <Image
            fill
            src={image}
            alt="hero-image"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.4,
            }}
          ></Image>
        )}
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
            alignItems="flex-start"
            id="hero-text-container"
          >
            {text && (
              <Text
                lineHeight={1}
                fontSize="4xl"
                casing="capitalize"
                as="b"
                color="white"
                align={textAlign}
=======
}) => {
  return (
    <>
      <HeroContainer image={image} size={size} bg={bg} parallax={parallax}>
        <Image
          fill
          src={image}
          alt="hero-image"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <Flex
          direction={direction}
          alignItems="center"
          spacing="16"
          p="8"
          justifyContent="space-evenly"
          w="100%"
        >
          <Stack spacing="1" direction="column">
            {text && (
              <Text
                fontSize="5xl"
                casing="uppercase"
                as="b"
                color="white"
                textAlign={textAlign}
>>>>>>> Stashed changes:common/Hero.jsx
              >
                {text}
              </Text>
            )}
            {secondaryText && (
              <Text
<<<<<<< Updated upstream:src/common/Hero.tsx
                lineHeight={1}
                fontSize="lg"
                fontWeight="400"
                casing="capitalize"
                as="p"
                color="brand.light"
=======
                fontSize="xl"
                casing="uppercase"
                as="b"
                color="brand.medium"
                textAlign={direction === "column" ? "center" : "flex-start"}
>>>>>>> Stashed changes:common/Hero.jsx
              >
                {secondaryText}
              </Text>
            )}
          </Stack>
<<<<<<< Updated upstream:src/common/Hero.tsx
          {buttons.length ? (
            <Stack
              id="hero-buttons-container"
              display="flex"
              spacing={4}
              w="100%"
              direction="row"
              alignItems="center"
              justifyContent="center"
              marginTop={8}
            >
              {buttons?.map(({ link, display, color }) => {
=======
          <Stack
            display="flex"
            spacing={4}
            w="100%"
            direction="row"
            alignItems="center"
            justifyContent="center"
            marginTop={8}
          >
            {buttons &&
              buttons?.map(({ link, display, color }) => {
>>>>>>> Stashed changes:common/Hero.jsx
                return (
                  <Link href={link || ""} key={link} passHref legacyBehavior>
                    <Button
                      variant="solid"
                      as="a"
                      size="md"
                      color={color || "brand.dark"}
                      textDecoration="none"
                      _hover={{
                        backgroundColor: "#e2e2e2",
                        color: "#212121",
                      }}
                    >
                      {display}
                    </Button>
                  </Link>
                );
              })}
<<<<<<< Updated upstream:src/common/Hero.tsx
            </Stack>
          ) : null}
=======
          </Stack>
>>>>>>> Stashed changes:common/Hero.jsx
        </Flex>
        {contentLink && (
          <Center
            alignItems="center"
            w="100%"
            position="relative"
            top="10px"
            id="scroll-into-view"
          >
            <ScrollIntoView
              style={{
                marginTop: 4,
              }}
              selector={contentLink}
              smooth
              alignToTop={false}
              scrollOptions={{
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              }}
            >
              <ChevronDownIcon color="brand.white" w={8} h={8} />
            </ScrollIntoView>
          </Center>
        )}
      </HeroContainer>
    </>
  );
};

export default Hero;
