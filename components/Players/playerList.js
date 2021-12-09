import { Box, Flex, HStack, Link, SimpleGrid, Stack } from "@chakra-ui/layout";
import {
  Text,
  Heading,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { sortBy } from "lodash";
import React, { useState, useCallback, useEffect } from "react";
import Card from "../../common/Card";
import getPosition from "../../utils/getPosition";
import { SearchIcon } from "@chakra-ui/icons";

const PlayerList = ({ list = [], staff }) => {
  const sortByPosition = (playerList) => {
    return playerList.sort((a, b) => {
      return staff ? a.id - b.id : a.position - b.position;
    });
  };
  const matches = (string, match) =>
    string.toLowerCase().startsWith(match.toLowerCase());
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState(sortByPosition(list));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setPlayers(sortByPosition(list));
    }

    const foundPlayers = list.filter((player) => {
      return player.nickname
        ? matches(player.first_name, search) ||
            matches(player.last_name, search) ||
            matches(player?.nickname, search)
        : matches(player.first_name, search) ||
            matches(player.last_name, search);
    });
    setPlayers(foundPlayers);
    return () => setPlayers(sortByPosition(list));
  }, [search]);

  const forwards = players.length
    ? players?.filter((player) => player.position > 0 && player.position <= 8)
    : [];
  const backs = players.length
    ? players?.filter((player) => player.position >= 9)
    : [];

  const List = ({ players, noClick }) => {
    return (
      <HStack
        overflowX="scroll"
        overflowY="hidden"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        whiteSpace="nowrap"
        spacing="8"
        ml="5"
        /* added width so it would work in the snippet */
      >
        {players.length ? (
          players?.map((player) => {
            const { picture, hoverPic } = player;

            const background = player.picture?.url
              ? `url(${picture?.url})`
              : "url(/images/defaultpic.png)";
            const hoverBg = hoverPic?.url
              ? `url(${hoverPic?.url || picture?.url})`
              : "url(/images/defaultpic.png)";

            return (
              <Card
                key={`${player.first_name}-${player.last_name}-card`}
                radius="md"
                id="player-card"
                as={`/team/${player?.slug}`}
                link={noClick ? "" : "/team/[id]"}
                styles={{
                  minHeight: "370px",
                  height: "auto",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-around",
                  cursor: noClick ? "inherit" : "pointer",
                }}
                bg={background}
                hoverBg={hoverBg}
                border="1px solid #e2e2e2"
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
          })
        ) : (
          <div>no players found</div>
        )}
      </HStack>
    );
  };
  return (
    <Flex direction="column" spacing="8" bg="brand.white">
      {!staff ? (
        <Stack direction="column" spacing="16">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              onChange={handleChange}
              value={search}
              type="text"
              placeholder="Find Player"
              size="lg"
              variant="filled"
            />
          </InputGroup>
          <Heading as="h2" size="xl" isTruncated my="8">
            Forwards ({forwards.length})
          </Heading>
          <List players={forwards} />
          <Heading as="h2" size="xl" isTruncated my="8">
            Backs ({backs.length})
          </Heading>
          <List players={backs} />
        </Stack>
      ) : (
        <>
          <Heading as="h2" size="xl" isTruncated my="8">
            Staff
          </Heading>
          <List players={list} noClick />
        </>
      )}
    </Flex>
  );
};

export default PlayerList;
