/* eslint-disable no-unused-vars */
import { Flex, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import List from "./List";
import { splitForwardsAndBacks } from "./utils";

const PlayerList = ({ list = [], type }) => {
  console.log({ list, type });
  const sortByPosition = useCallback(
    (playerList = []) => {
      console.log({ playerList });
      return playerList?.sort((a, b) => {
        const sortBy = type === "coaches-and-staff" ? "id" : "position";
        return a[sortBy] - b[sortBy];
      });
    },
    [type]
  );

  const players = sortByPosition(list || []);

  const { forwards, backs } = splitForwardsAndBacks(players);

  return (
    <Flex direction="column" spacing="8" bg="brand.white">
      <Stack direction="column" spacing="16">
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
