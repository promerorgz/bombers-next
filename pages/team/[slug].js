import React from "react";
import Layout from "../../common/Layout";
import Hero from "../../common/Hero";
import { useRouter } from "next/router";
import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/tabs";
import {
  Stack,
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  Box,
  Divider,
  Code,
} from "@chakra-ui/react";

const Player = ({ players }) => {
  const router = useRouter();
  const inQuotes = (string) => `"${string}"`;

  const playerBg = `linear-gradient(315deg, #404040 0%, #212121 74%)`;
  const player = players.find((player) => player.slug === router.query.slug);
  const text = `${player.first_name} ${inQuotes(player.nickname) || null} ${
    player.last_name
  }`;
  const startPic =
    `${process.env.strapi}${player.picture.url}` || "images/defaultpic.png";

  return (
    <Layout>
      <Hero text={text} size="sm" startPic={startPic} bg={playerBg}></Hero>
      <Stack>
        <Flex flexGrow="1" p="4" px="16" boxShadow="md">
          <Text
            fontFamily="Big Shoulders Display"
            m={0}
            fontWeight="bold"
            fontSize="xl"
          >
            Profile
          </Text>
        </Flex>
        <Box m="auto" minW="90%">
          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            <GridItem colSpan={[2, 1, 1, 1, 2, 2]}>
              <Stack>
                <Heading as="h3" size="xl">
                  Bio
                </Heading>
                <Box boxShadow="md" borderRadius="sm">
                  {player.bio}
                </Box>
              </Stack>
            </GridItem>
            <GridItem colSpan={[1, 1, 1, 1, 1, 1]}>
              <Stack>
                <Heading as="h3" size="xl">
                  Info
                </Heading>
                <Stack boxShadow="md" borderRadius="sm">
                  <pre>{JSON.stringify(player, null, 2)}</pre>
                  <Text>Date of Birth</Text>
                  <Heading size="lg">{player.date_of_birth}</Heading>
                  <Divider></Divider>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Player;
