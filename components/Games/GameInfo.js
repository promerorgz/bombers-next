import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Team from "./Team";

const GameInfo = ({
  homeTeam,
  awayTeam,
  date,
  location,
  preview,
  division,
}) => {
  const formatDateTime = (dateTime, format = "") => {
    const date = new Date(dateTime);
    const formats = {
      short: date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      }),
    };
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
      date: format === "" ? formattedDate : formats[format],
      time,
    };
  };

  return preview ? (
    <Stack direction="row">
      <Stack
        direction="column"
        justifyContent="start"
        alignItems="start"
        // pt={8}
      >
        <Text
          as="p"
          color="brand.medium"
          fontFamily="Big Shoulders Display"
          textTransform="uppercase"
          fontWeight="bold"
          m="0"
        >
          {division} - {location} - {formatDateTime(date, "short").date}
        </Text>
        <Team team={homeTeam} preview></Team>
        <Team team={awayTeam} preview></Team>
      </Stack>
    </Stack>
  ) : (
    <Stack direction="row" justifyContent="center" alignItems="start" pt={8}>
      <Team team={homeTeam} preview={preview}></Team>
      {!homeTeam.score && (
        <Stack
          bg={!preview ? "#404040" : "#e2e2e2"}
          borderRadius="8px"
          p="2"
          fontSize="xs"
          alignContent="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box>{formatDateTime(date).time || "FT"}</Box>

          <Flex w="100%" justifyContent="center">
            <Box p="2" fontSize="xs">
              {location}
            </Box>
          </Flex>
        </Stack>
      )}
      <Team team={awayTeam} away preview={preview}></Team>
    </Stack>
  );
};

export default GameInfo;
