import {
  Box,
  Button,
  Flex,
  LinkBox,
  Stack,
  Text,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Pic from "../common/Pic";
import Link from "next/link";
import useBp from "../theme/useBp";

const heightSizes = {
  sm: "20vh",
  md: "40vh",
  lg: "70vh",
  xl: "100vh",
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
                    <Link href={link || ""}>
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
  );
};

export default Hero;
