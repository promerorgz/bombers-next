import { Grid, GridItem, Stack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import useBp from "../../theme/useBp";
import GameCard from "./GameCard";
import { toDate, fromUnixTime, isAfter } from "date-fns";

const Games = ({ games = [] }) => {
  const isAfterToday = (date) => {
    const dateToCompare = new Date(date).getTime();
    const today = new Date().getTime();
    return today <= dateToCompare;
  };
  const [direction, setDirection] = useState("row");

  const upcoming =
    games.length && games.filter(({ date }) => isAfterToday(date));
  const played =
    games.length && games.filter(({ date }) => !isAfterToday(date));

  const gameCards = [
    {
      games: upcoming || [],
      title: "Upcoming",
      link: "/schedule",
      linkDisplay: "Schedule",
    },
    {
      games: played || [],
      title: "Results",
      link: "/schedule",
      linkDisplay: "Results",
    },
  ];

  const [isDesktop] = useBp();

  useEffect(() => {
    setDirection(isDesktop ? "row" : "column");
  }, [isDesktop]);

  return (
    <Stack
      h="auto"
      w="99%"
      spacing={2}
      m={4}
      direction={direction}
      justifyContent="space-evenly"
      alignItems="center"
      id="game-container"
    >
      {gameCards.map((game) => (
        <GameCard
          {...game}
          key={game.title}
          width={isDesktop ? "50%" : "100%"}
          direction={direction}
        />
      ))}
    </Stack>
  );
};

export default Games;
