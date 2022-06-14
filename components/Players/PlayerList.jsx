import { Flex, Stack, Box } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../../common/SearchBar";
import List from "./List";
import { matches, splitForwardsAndBacks } from "./utils";

const PlayerList = ({ list = [], type }) => {
  const sortByPosition = useCallback(
    (playerList) => {
      return playerList.sort((a, b) => {
        const sortBy = type === "coaches-and-staff" ? "id" : "position";
        return a[sortBy] - b[sortBy];
      });
    },
    [type]
  );

  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState(sortByPosition(list));

  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
    if (search === "") {
      setPlayers(sortByPosition(list));
    }

    const foundPlayers = list.filter((player) => {
      return player.nickname
        ? matches(player.first_name, search) ||
            matches(player.last_name, search) ||
            matches(player?.nickname, search)
        : matches(player?.first_name, search) ||
            matches(player?.last_name, search);
    });
    setPlayers(foundPlayers);
    return () => setPlayers(sortByPosition(list));
  }, [search, list, sortByPosition]);

  const { forwards, backs } = splitForwardsAndBacks(players);

  return (
    <Flex direction="column" spacing="8" bg="brand.white">
      <Stack direction="column" spacing="16">
        <Box px={16} pt={8}>
          <SearchBar value={search} handleChange={handleChange} type={type} />
        </Box>
        {type === "coaches-and-staff" ? (
          <List players={players} title="Coaches and Staff" noClick />
        ) : (
          <>
            <List players={forwards} title="Forwards" />
            <List players={backs} title="Backs" />
          </>
        )}
      </Stack>
    </Flex>
  );
};

export default PlayerList;
