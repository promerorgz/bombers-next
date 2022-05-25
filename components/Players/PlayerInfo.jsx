import React from "react";
import { Stack, Heading, Center, Box } from "@chakra-ui/react";
import { getFlag, getPosition } from "./utils";
import { formatDate } from "../../utils";

const PlayerInfo = ({ player }) => {
  const data = [
    {
      label: "Date of Birth",
      value: formatDate(player?.date_of_birth, "long"),
    },
    {
      label: "Age",
      value: formatDate(player?.date_of_birth, "age"),
    },
    {
      label: "Height",
      value: player.height,
    },
    {
      label: "Weight",
      value: player.weight,
    },
    {
      label: "Nationality",
      value: player?.nationality || "United States",
    },
    {
      label: "Hometown",
      value: player?.hometown,
    },
    {
      label: "Position(s)",
      value: getPosition(player.position),
    },
  ];
  return (
    <>
      <Stack
        direction="column"
        p="8"
        spacing="4"
        justifyContent="center"
        minW="40%"
      >
        {data?.map(({ label, value }) => {
          return (
            <Stack
              alignItems="baseline"
              display="flex"
              spacing="3"
              direction="row"
            >
              <Heading color="brand.black" size="lg" as="div" minW="80px">
                {label}:
              </Heading>
              <Heading
                as="div"
                color="brand.medium"
                fontFamily="Staatliches"
                fontWeight="light"
                size="lg"
                minH="10%"
                maxH="25%"
              >
                {value}
              </Heading>

              <Center>
                {label === "Nationality" && (
                  <Heading
                    as="div"
                    color="brand.medium"
                    fontFamily="Staatliches"
                    fontWeight="light"
                    size="lg"
                    minH="10%"
                    maxH="25%"
                  >
                    {getFlag(value)}
                  </Heading>
                )}
              </Center>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default PlayerInfo;
