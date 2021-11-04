import { Heading, HStack, Stack, Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import useBp from "../../theme/useBp";
import getCountryCodes from "../../utils/getCountryCode";
import getPosition from "../../utils/getPosition";
import ReactCountryFlag from "react-country-flag";

const Player = ({ players }) => {
  const router = useRouter();
  const [direction, setDirection] = useState("row");
  const [isDesktop] = useBp();

  useEffect(() => {
    setDirection(isDesktop ? "row" : "column");
  }, [isDesktop]);

  const inQuotes = (string) => (string ? `"${string}"` : "");

  const playerBg = `linear-gradient(315deg, #404040 0%, #212121 74%)`;
  const player = players.find((player) => player.slug === router.query.slug);
  const text = `${player.first_name} ${inQuotes(player.nickname)} ${
    player.last_name
  }`;
  const startPic =
    `${process.env.strapi}${player?.picture?.url}` || "images/defaultpic.png";

  const formatDate = (date, style) => {
    const dateObject = new Date(date);
    return style === "age"
      ? ~~((Date.now() - dateObject) / 31557600000)
      : dateObject.toLocaleDateString("en-US", {
          dateStyle: style,
        });
  };

  const data = [
    {
      label: "Date of Birth",
      value: formatDate(player?.date_of_birth, "long"),
    },
    {
      label: "Nationality",
      value: player?.nationality,
    },
    {
      label: "Hometown",
      value: player?.hometown,
    },
    {
      label: "Position(s)",
      value: getPosition(player.position),
    },
    {
      label: "Height",
      value: player.height,
    },
    {
      label: "Weight",
      value: player.weight,
    },
  ];
  return (
    <Layout>
      <Hero
        text={text}
        secondaryText={getPosition(player.position)}
        size="sm"
        startPic={startPic}
        bg={playerBg}
        direction={direction}
      />
      {/* <Flex p="4" px="16" boxShadow="md">
          <Heading m={0} size="xl">
            Profile
          </Heading>
        </Flex> */}
      <Stack minH="100%" w="100%" bg="brand.light" spacing="4">
        <Center bg="brand.black" w="100%" p="8">
          <Heading as="quote" color="brand.light">
            "{player.bio}"
          </Heading>
        </Center>

        <Stack direction="column" p="8" spacing="4">
          {data.map(({ label, value }) => {
            return (
              <HStack alignItems="center" display="flex" spacing="4">
                <Heading color="brand.black" size="lg" as="div" minW="80px">
                  {label}:
                </Heading>
                <Heading
                  as="div"
                  color="brand.medium"
                  fontFamily="Staatliches"
                  fontWeight="light"
                  size="lg"
                  minH="10%"
                  maxH="25%"
                >
                  {value}
                </Heading>

                <Center>
                  {label === "Nationality" && (
                    <ReactCountryFlag
                      svg
                      countryCode={getCountryCodes(value)}
                    />
                  )}
                </Center>
              </HStack>
            );
          })}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Player;
