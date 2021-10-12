import React from "react";
import {
  Badge,
  Box,
  Text,
  SimpleGrid,
  Flex,
  Grid,
  Heading,
  Stack,
  Divider,
  Center,
} from "@chakra-ui/layout";
import { Button, Link, LinkBox, SkeletonText } from "@chakra-ui/react";

import Card from "../../common/Card";
import GameInfo from "./GameInfo";

const GameCard = ({ title = "", link = "", linkDisplay = "", games = [] }) => {
  const styles = {
    backgroundColor: "#121212",
    // backgroundImage:
    //   "linear-gradient(to right bottom, #212121 50%, #7f8c8d 50.3%)",
    boxShadow: "0 1px 4px #151515",
  };

  return (
    <Box position="relative" top="-100px" m="auto">
      <Card styles={styles}>
        <SkeletonText
          w="80%"
          m="auto"
          startColor="brand.medium"
          endColor="brand.dark"
          isLoaded={games.length}
          fadeDuration={0.6}
          speed={1}
        >
          <Stack
            direction="row"
            // m="auto"
            p="8"
            justifyContent="space-around"
            alignItems="center"
          >
            {games.map(
              (
                {
                  home,
                  away,
                  location,
                  date,
                  home_score,
                  away_score,
                  division,
                  slug,
                },
                i
              ) => {
                const gameInfo = {
                  homeTeam: { ...home, score: home_score },
                  awayTeam: { ...away, score: away_score },
                  location: location,
                  date: date,
                };

                return (
                  <>
                    <GameInfo
                      key={slug || `${home.name}-vs-${away.name}`}
                      {...gameInfo}
                      division={division}
                      preview
                    ></GameInfo>
                    {i === 0 && (
                      <Center
                        height="100px"
                        margin="8px"
                        alignItems="center"
                        justifyContent="center"
                        h="180px"
                      >
                        <Divider orientation="vertical" />
                      </Center>
                    )}
                  </>
                );
              }
            )}
          </Stack>
        </SkeletonText>
      </Card>
    </Box>
  );
};

export default GameCard;
