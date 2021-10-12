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
  background-size: cover;
  background-image: ${(props) => `linear-gradient(
      120deg,
      #000 40%,
      #00000060 40%,
      #00000060 50%,
      transparent 50%,
      transparent
    ),
    url(${props.image});`};
`;
const Hero = ({ text, buttons = [], image, size }) => {
  return (
    <Diagonal image={image} size={size}>
      <Flex
        direction="row"
        align="center"
        justify="space-evenly"
        width={["50%", "100%", "100%", "50%"]}
      >
        <Box>
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
      <Box flex="1" color="transparent">
        o
      </Box>
    </Diagonal>
  );
};

export default Hero;
