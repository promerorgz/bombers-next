import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import Card from "../../common/Card";
import GameInfo from "./GameInfo";

const GameCard = ({ title = "", link = "", direction = "row", games = [] }) => {
  const styles = {
    backgroundColor: "#121212",
    boxShadow: "0 1px 4px #151515",
    display: "grid",
    alignItems: "stretch",
  };

  return (
    <Box
      position="relative"
      top="-100px"
      width="100%"
      maxW="2xl"
      p="4"
      minH="360px"
      h="100%"
    >
      <Card styles={styles} link={link} h="100%" id="game-card">
        <Center justifyContent="space-between" p="4">
          <Flex flexGrow="1">
            <Heading size="xl" color="brand.light" m="0">
              {title}
            </Heading>
          </Flex>
          <Button variant="link" size="xs" color="tomato" ml="4">
            see all {title}
          </Button>
        </Center>
        <Stack direction={direction} h="100%" w="100%">
          {games
            .slice(0, 2)
            .sort(
              (a, b) =>
                Number(a.division.split("d")[1]) -
                Number(b.division.split("d")[1])
            )
            .map(
              ({
                home,
                away,
                location,
                date,
                home_score,
                away_score,
                division,
                slug,
                finished,
              }) => {
                const gameInfo = {
                  homeTeam: { ...home, score: home_score },
                  awayTeam: { ...away, score: away_score },
                  location,
                  date,
                  finished,
                  slug,
                  division,
                };

                return (
                  <Fragment key={slug || `${home.name}-vs-${away.name}`}>
                    <GameInfo
                      {...gameInfo}
                      division={division}
                      preview
                    ></GameInfo>
                  </Fragment>
                );
              }
            )}
        </Stack>
      </Card>
    </Box>
  );
};

export default GameCard;
