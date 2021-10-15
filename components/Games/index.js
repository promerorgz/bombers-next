import { Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import GameCard from "./GameCard";

const Games = ({ games = [] }) => {
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

  return (
    <Grid
      h="auto"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      m={8}
    >
      {gameCards.map((game) => (
        <GridItem
          key={game.title}
          colSpan={[1, 2, 2, 1, 1]}
          rowSpan={[2, 1, 1, 2, 2]}
        >
          <GameCard {...game} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Games;
