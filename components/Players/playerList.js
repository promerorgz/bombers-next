import { Box, Flex, HStack, Link, SimpleGrid } from "@chakra-ui/layout";
import { Text, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../../common/Card";

const PlayerList = ({ list = [], staff }) => {
  const forwards = list.length
    ? list?.filter((player) => player.position > 0 && player.position <= 8)
    : [];
  const backs = list.length
    ? list?.filter((player) => player.position >= 9)
    : [];

  const getPosition = (position) => {
    return {
      1: "Loose Head Prop",
      2: "Hooker",
      3: "Tight Head Prop",
      4: "Lock",
      5: "Lock",
      6: "Flanker",
      7: "Flanker",
      8: "8",
      9: "Scrum-half",
      10: "Fly-half",
      11: "Wing",
      12: "Inside Center",
      13: "Outside Center",
      14: "Wing",
      15: "Fullback",
    }[position];
  };

  const List = ({ players }) => {
    return (
      <HStack
        overflowX="scroll"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        whiteSpace="nowrap"
        spacing="8"
        /* added width so it would work in the snippet */
      >
        {players.map((player) => {
          const image = {
            name: player.picture.name || "",
            alternativeText: `${player.first_name}-pro-pic`,
            url: player.picture?.url || "",
          };

          const background =
            `url(${process.env.strapi}${player?.picture?.url})` ||
            "/images/defaultpic.png";
          const hoverBg =
            `url(${process.env.strapi}${
              player?.hoverPic ? player?.hoverPic?.url : player.picture?.url
            })` || "/images/defaultpic.png";

          return (
            <Card
              key={`${player.first_name}-card`}
              radius="md"
              id="player-card"
              link={`/team/${player.id}`}
              styles={{
                minHeight: "370px",
                height: "auto",
                width: "270px",
                display: "flex",
                justifyContent: "space-around",
              }}
              bg={background}
              hoverBg={hoverBg}
            >
              <Flex
                id="text-content"
                display="flex"
                bg="brand.black"
                color="brand.light"
                p="4"
                borderRadius="xl"
                alignContent="end"
                direction="column"
                justifyContent="center"
                w="100%"
                h="fit-content"
                alignSelf="flex-end"
              >
                <Text
                  m={0}
                  color="brand.white"
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="capitalize"
                  wordSpacing="6px"
                  fontSize="lg"
                >
                  {player.first_name} {player.last_name}
                </Text>

                <Text
                  m={0}
                  color="brand.light"
                  textAlign="center"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  {staff ? player.position : getPosition(player.position)}
                </Text>
              </Flex>
            </Card>
          );
        })}
      </HStack>
    );
  };
  return (
    <Flex direction="column" spacing="8">
      {!staff ? (
        <>
          <Heading as="h2" size="xl" isTruncated my="8">
            Forwards
          </Heading>
          <List players={forwards} />
          <Heading as="h2" size="xl" isTruncated my="8">
            Backs
          </Heading>
          <List players={backs} />
        </>
      ) : (
        <>
          <Heading as="h2" size="xl" isTruncated my="8">
            Staff
          </Heading>
          <List players={list} />
        </>
      )}
    </Flex>
  );
};

export default PlayerList;
