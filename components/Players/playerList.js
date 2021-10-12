import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { Text, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../../common/Card";

const PlayerList = ({ list = [], staff }) => {
  const forwards = list?.filter(
    (player) => player.position > 0 && player.position <= 8
  );
  const backs = list?.filter((player) => player.position >= 9);

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
      <Flex
        overflowX="scroll"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        whiteSpace="nowrap"
        /* added width so it would work in the snippet */
      >
        {players.map((player) => {
          const image = {
            name: player.picture.name || "",
            alternativeText: `${player.first_name}-pro-pic`,
            url: player.picture.url || "",
          };

          const style = {
            backgroundImage: `url(${process.env.strapi}${player.picture.url})`,
          };

          return (
            <Card
              key={`${player.first_name}-card`}
              id="player-card"
              link={`/team/${player.id}`}
              styles={{
                minHeight: "370px",
                height: "auto",
                minWidth: "270px",
                maxWidth: "270px",
              }}
              image={image}
              imageProps={{
                h: "100%",
              }}
            >
              <Flex
                id="text-content"
                display="flex"
                bg="brand.800"
                p="4"
                alignContent="end"
                direction="column"
                justifyContent="center"
                w="100%"
                h="fit-content"
                alignSelf="flex-end"
              >
                <Text
                  color="brand.400"
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="capitalize"
                  wordSpacing="6px"
                >
                  {player.first_name} {player.last_name}
                </Text>

                <Text
                  color="brand.400"
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
      </Flex>
    );
  };
  return (
    <Flex direction="column">
      {!staff ? (
        <>
          <Heading as="h2" size="xl" isTruncated>
            Forwards
          </Heading>
          <List players={forwards} />
          <Heading as="h2" size="xl" isTruncated>
            Backs
          </Heading>
          <List players={backs} />
        </>
      ) : (
        <>
          <Heading as="h2" size="xl" isTruncated>
            Staff
          </Heading>
          <List players={list} />
        </>
      )}
    </Flex>
  );
};

export default PlayerList;
