import { Grid, GridItem, Stack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import useBp from "../../theme/useBp";
import GameCard from "./GameCard";

const Games = ({ games = [] }) => {
  const [direction, setDirection] = useState("row");
  const allGames = games || [];
  const upcoming = games.length
    ? allGames?.filter((game) => !game.finished)
    : [];
  const played = games.length ? allGames?.filter((game) => game.finished) : [];

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
  }, []);

  return (
    <Stack
      h="auto"
      w="99%"
      spacing={4}
      m={4}
      direction={isDesktop ? "row" : "column"}
      justifyContent="space-evenly"
      alignContent="space-around"
      flexWrap="wrap"
    >
      {gameCards.map((game) => (
        <GameCard
          {...game}
          key={game.title}
          width={isDesktop ? "50%" : "100%"}
          direction={isDesktop ? "row" : "column"}
        />
      ))}
    </Stack>
  );
};

export default Games;
