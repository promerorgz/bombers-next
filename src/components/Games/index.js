import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useBp from "../../../theme/useBp";
import GameCard from "./GameCard";

const Games = ({ games = [] }) => {
  return (
    <Stack
      h="auto"
      w="99%"
      spacing={2}
      m={4}
      justifyContent="space-
      evenly"
      alignItems="center"
      id="game-container"
    ></Stack>
  );
};

export default Games;
