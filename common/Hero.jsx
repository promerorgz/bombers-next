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
  flex-direction: ${({ backButton }) => (backButton ? "column" : "row")};
  align-items: center;
  padding: 1%;
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
  const router = useRouter();
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

  const handleGoBack = () => {
    return router.push("/team");
  };

  return (
    <>
      <Diagonal image={image} size={size} bg={bg} backButton={backButton}>
        {backButton && (
          <Center justifyContent="flex-start" w="100%">
            <Button onClick={handleGoBack} variant="link">
              <ChevronLeftIcon color="brand.white" w={8} h={8} />
              <Text fontSize="xl">{"Back to players"}</Text>
            </Button>
          </Center>
        )}
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
