import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Pic from "../common/Pic";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import SliderHero from "./SliderHero";
import ScrollIntoView from "react-scroll-into-view";

const heightSizes = {
  sm: "20vh",
  md: "30vh",
  lg: "40vh",
  xl: "50vh",
  full: "100vh",
};
const Diagonal = styled.div`
  font-family: "Montserrat";
  margin-top: 200px;
  font-weight: 900;
  line-height: 65px;
  text-transform: uppercase;
  display: flex;
  flex-direction: ${({ backButton }) => (backButton ? "column" : "row")};
  align-items: flex-end;
  padding: 1%;
  min-height: ${(props) => heightSizes[props.size] || "50vh"};
  ${(props) =>
    props.parallax
      ? ` 
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
      : ""}
  background-repeat: no-repeat;
  background-position: right;
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
  startPic,
  bg,
  direction,
  contentLink,
  backButton,
  parallax,
}) => {
  const router = useRouter();
  const picProps = startPic?.startsWith("/")
    ? { src: startPic }
    : {
        image: {
          url: startPic,
          alternativeText: text,
          name: text,
        },
        size: "sm",
      };

  const handleGoBack = () => {
    return router.back();
  };

  return (
    <>
      <Diagonal
        image={image}
        size={size}
        bg={bg}
        backButton={backButton}
        parallax={parallax}
      >
        {backButton && (
          <Center justifyContent="flex-start" w="100%">
            <Button onClick={handleGoBack} variant="link">
              <ChevronLeftIcon color="brand.white" w={8} h={8} />
              <Text fontSize="xl">{"Back"}</Text>
            </Button>
          </Center>
        )}
        {(text || secondaryText || buttons.length || startPic) && (
          <Flex direction="row" align="center" justify="space-evenly">
            <Stack direction={direction} alignItems="center" spacing="16" p="8">
              {startPic && (
                <Box position="relative" top="55px">
                  <Pic {...picProps}></Pic>
                </Box>
              )}
              {(text || secondaryText || buttons.length) && (
                <Box ml="8">
                  {(text || secondaryText) && (
                    <Stack spacing="1" direction="column">
                      {text && (
                        <Text
                          fontSize="5xl"
                          casing="uppercase"
                          as="b"
                          color="white"
                          textAlign={
                            direction === "column" ? "center" : "flex-start"
                          }
                        >
                          {text}
                        </Text>
                      )}
                      {secondaryText && (
                        <Text
                          fontSize="3xl"
                          casing="uppercase"
                          as="b"
                          color="brand.medium"
                          textAlign={
                            direction === "column" ? "center" : "flex-start"
                          }
                        >
                          {secondaryText}
                        </Text>
                      )}
                    </Stack>
                  )}
                  <Stack
                    spacing={4}
                    direction="row"
                    align="center"
                    marginTop={8}
                  >
                    {buttons &&
                      buttons?.map(({ link, display, color }) => {
                        return (
                          <Link href={link || ""} key={link}>
                            <Button
                              as="a"
                              colorScheme="gray"
                              size="md"
                              color={color || "brand.light"}
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
                </Box>
              )}
            </Stack>
          </Flex>
        )}
        {console.log({ contentLink })}
        {contentLink && (
          <Center
            alignItems="flex-end"
            w="100%"
            position="relative"
            top="0px"
            id="scroll-into-view"
          >
            <ScrollIntoView
              selector={contentLink}
              smooth
              alignToTop
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              }}
            >
              <ChevronDownIcon color="brand.white" w={8} h={8} />
            </ScrollIntoView>
          </Center>
        )}
      </Diagonal>
    </>
  );
};

export default Hero;
