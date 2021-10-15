import {
  Box,
  Button,
  Flex,
  Link,
  LinkBox,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Pic from "../common/Pic";

const heightSizes = {
  sm: "20vh",
  md: "40vh",
  lg: "70vh",
};
const Diagonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  min-height: ${(props) => heightSizes[props.size] || "70vh"};
  background-repeat: no-repeat;
  background-position: right;
  background-size: ${(props) => (props.bg ? "contain" : "cover")};
  background-image: ${(props) =>
    props.bg ||
    `linear-gradient(
      120deg,
      #000 40%,
      #00000060 40%,
      #00000060 50%,
      transparent 50%,
      transparent
    ),
    url(${props.image});`};
`;
const Hero = ({ text, buttons = [], image, size, startPic, bg }) => {
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
      <Flex
        direction="row"
        align="center"
        justify="space-evenly"
        // width={["50%", "100%", "100%", "50%"]}
      >
        {startPic && (
          <Box position="relative" top="55px">
            <Pic {...picProps}></Pic>
          </Box>
        )}
        <Box ml="2">
          <Text
            fontSize="5xl"
            casing="uppercase"
            as="b"
            color="white"
            style={{ marginBottom: 12 }}
          >
            {text}
          </Text>
          <Stack spacing={4} direction="row" align="center" marginTop={8}>
            {buttons &&
              buttons?.map(({ link, display, color }) => {
                return (
                  <LinkBox key={`link_${link}`}>
                    <Link
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        colorScheme="gray"
                        size="md"
                        color={color || "brand.light"}
                        href={link || ""}
                        textDecoration="none"
                        _hover={{
                          backgroundColor: "#e2e2e2",
                          color: "#212121",
                        }}
                      >
                        {display}
                      </Button>
                    </Link>
                  </LinkBox>
                );
              })}
          </Stack>
        </Box>
      </Flex>
    </Diagonal>
  );
};

export default Hero;
