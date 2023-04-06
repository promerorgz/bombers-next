import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import Pic from "../common/Pic";

const heightSizes = {
  sm: "20vh",
  md: "30vh",
  lg: "40vh",
  xl: "50vh",
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
  justify-content: flex-end;
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
  parallax,
}) => {
  return (
    <>
      <HeroContainer image={image} size={size} bg={bg} parallax={parallax}>
        <Flex
          direction={direction}
          alignItems="center"
          justifyContent="space-around"
          spacing="16"
          p="8"
        >
          <Box>
            <Stack spacing="1" direction="column">
              {text && (
                <Text fontSize="5xl" casing="uppercase" as="b" color="white">
                  {text}
                </Text>
              )}
              {secondaryText && (
                <Text
                  fontSize="3xl"
                  casing="uppercase"
                  as="b"
                  color="brand.medium"
                  textAlign={direction === "column" ? "center" : "flex-start"}
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
