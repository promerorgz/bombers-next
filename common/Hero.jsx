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
import { ChevronDownIcon } from "@chakra-ui/icons";

const heightSizes = {
  sm: "20vh",
  md: "40vh",
  lg: "70vh",
  xl: "90vh",
};
const Diagonal = styled.div`
  font-family: "Big Shoulders Display";
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  min-height: ${(props) => heightSizes[props.size] || "90vh"};
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

const ScrollButton = styled(ChakraLink)`
  .bounce {
    -webkit-animation: bounce 1s infinite;
    -moz-animation: bounce 1s infinite;
    -o-animation: bounce 1s infinite;
    animation: bounce 1s infinite;
  }
  @keyframes bounce {
    0% {
      bottom: 0px;
    }
    50% {
      bottom: 15px;
    }
    100% {
      bottom: 30;
    }
  }
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
  story,
  downArrow,
  contentLink,
  backButton,
}) => {
  const picProps = startPic?.startsWith("/")
    ? { src: startPic }
    : {
        image: {
          url: startPic,
          alternativeText: text,
          name: text,
        },
        size: "xs",
      };

  return (
    <>
      {backButton && (
        <Center alignItems="flex-start" w="100%" position="relative" top="0px">
          <ChakraLink href={contentLink}>
            <ChevronDownIcon color="brand.white" w={8} h={8} />
          </ChakraLink>
        </Center>
      )}
      <Diagonal image={image} size={size} bg={bg}>
        <Flex direction="row" align="center" justify="space-evenly">
          <Stack direction={direction} alignItems="center" spacing="16" p="8">
            {startPic && (
              <Box position="relative" top="55px">
                <Pic {...picProps}></Pic>
              </Box>
            )}
            <Box ml="2">
              <Stack spacing="1" direction="column">
                <Text fontSize="5xl" casing="uppercase" as="b" color="white">
                  {text}
                </Text>
                {secondaryText && (
                  <Text
                    fontSize="3xl"
                    casing="uppercase"
                    as="b"
                    color="brand.medium"
                  >
                    {secondaryText}
                  </Text>
                )}
              </Stack>
              <Stack spacing={4} direction="row" align="center" marginTop={8}>
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
          </Stack>
        </Flex>
      </Diagonal>
      {contentLink && (
        <Center alignItems="center" w="100%" position="relative" top="-50px">
          <ChakraLink href={contentLink}>
            <ChevronDownIcon color="brand.white" w={8} h={8} />
          </ChakraLink>
        </Center>
      )}
    </>
  );
};

export default Hero;
