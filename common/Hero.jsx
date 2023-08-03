import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import Image from "next/legacy/image";

const heightSizes = {
  sm: "20vh",
  md: "30vh",
  lg: "40vh",
  xl: "50vh",
  "2xl": "75vh",
  full: "100vh",
};

const HeroContainer = styled.div`
  font-family: "Montserrat";
  font-weight: 900;
  line-height: 65px;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => heightSizes[props.size] || "50vh"};
  ${(props) =>
    props.parallax
      ? ` 
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
      : ""}
  opacity:0.4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => (props.bg ? "contain" : "cover")};
  background-image: ${(props) =>
    props.bg ||
    `linear-gradient(
      120deg,
      #00000060 40%,
      #00000060 40%,
      #00000060 50%,
      #00000060 50%,
      #00000060
    ),
    url(${props.image});`};
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
}) => {
  return <>
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
            >
              {text}
            </Text>
          )}
          {secondaryText && (
            <Text
              fontSize="xl"
              casing="uppercase"
              as="b"
              color="brand.medium"
              textAlign={direction === "column" ? "center" : "flex-start"}
            >
              {secondaryText}
            </Text>
          )}
        </Stack>
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
        </Stack>
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
  </>;
};

export default Hero;
