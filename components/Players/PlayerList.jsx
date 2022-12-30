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

  const [players, setPlayers] = useState(sortByPosition(list));

  // TODO: uncomment when search is implemented
  // const handleChange = (e) => setSearch(e.target.value);

  const { forwards, backs } = splitForwardsAndBacks(players);

  return (
    <Flex direction="column" spacing="8" bg="brand.white">
      <Stack direction="column" spacing="16">
        {/* TODO: uncomment when search is implemented */}
        {/* <Box px={16} pt={8}>
          <SearchBar value={search} handleChange={handleChange} type={type} />
        </Box> */}
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
