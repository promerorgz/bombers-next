import {
  Box,
  Divider,
  Flex,
  Stack,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import GameInfo from "../../../components/Games/GameInfo";

const Schedule = ({ upcoming }) => {
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate =
      date.toLocaleDateString("en-US", { weekday: "short" }) +
      " " +
      date.toLocaleDateString("en-US", { month: "short" }) +
      " " +
      date.toLocaleDateString("en-US", { day: "2-digit" });
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return {
      date: formattedDate,
      time,
    };
  };

  const isBombers = (team) => team === "Bombers";
  const isHome = (homeTeam) => isBombers(homeTeam);

  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {upcoming.map((game) => {
        const gameInfoProps = {
          homeTeam: {
            name: game.home.name,
            logo: game.home.logo,
            score: game.home_score,
          },
          awayTeam: {
            name: game.away.name,
            logo: game.away.logo,
            score: game.away_score,
          },
          date: game.date,
          location: game.location,
          preview: false,
        };

        return (
          <AccordionItem key={game.slug}>
            <AccordionButton
              _expanded={{ bg: "brand.800", color: "brand.400" }}
            >
              <Stack
                direction="row"
                textAlign="left"
                alignItems="center"
                justifyContent="start"
                w="100%"
              >
                <Box>
                  <Text
                    m={0}
                    fontWeight="light"
                    fontSize="md"
                    textTransform="uppercase"
                    fontFamily="body"
                  >
                    {formatDateTime(game.date).date}
                  </Text>
                </Box>
                <Divider size="xl" orientation="vertical"></Divider>
                <Box flex="1">
                  <Text
                    m={0}
                    fontWeight="bold"
                    fontSize="lg"
                    textTransform="uppercase"
                    fontFamily="body"
                  >
                    {isHome(game?.home?.name)
                      ? `${game?.home?.name} - ${game?.away?.name}`
                      : `${game?.away?.name} @ ${game?.home?.name}`}
                  </Text>
                </Box>
                <AccordionIcon />
              </Stack>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <GameInfo {...gameInfoProps} />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Schedule;
