import { Heading, HStack, Stack, Center, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import Pic from "../../common/Pic";
import useBp from "../../theme/useBp";
import getPosition from "../../utils/getPosition";
import PlayerInfo from "./components/PlayerInfo";

const defaultPlayer = {
  first_name: "",
};
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
  const startPic = player?.picture?.url
    ? player?.picture?.url
    : "/images/defaultpic.png";

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
      value: player?.nationality || "United States",
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
    <Layout seo={{ metaTitle: `${player.first_name} ${player.last_name}` }}>
      <Hero
        backButton
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
            {inQuotes(player.bio)}
          </Heading>
        </Center>
        <Stack direction={direction} spacing="4" mt={0} id="kkck">
          <Center>
            <Pic src={player?.hoverPic?.url} />
          </Center>
          <PlayerInfo data={data} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Player;
