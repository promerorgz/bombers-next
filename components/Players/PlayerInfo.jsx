import { Center, Heading, Stack } from "@chakra-ui/react";
import { formatDate } from "../../utils";
import { getFlag, getPosition } from "./utils";

const PlayerInfo = ({ player }) => {
  const data = [
    {
      label: "Date of Birth",
      value: player?.date_of_birth
        ? formatDate(player?.date_of_birth, "long")
        : "?",
    },
    {
      label: "Age",
      value: player?.date_of_birth
        ? formatDate(player?.date_of_birth, "age")
        : "?",
    },
    {
      label: "Height",
      value: player?.height || "?",
    },
    {
      label: "Weight",
      value: player?.weight ? `${player?.weight} lbs.` : "?",
    },
    {
      label: "Nationality",
      value: player?.nationality || "United States",
    },
    {
      label: "Hometown",
      value: player?.hometown || "?",
    },
    {
      label: "Position(s)",
      value: getPosition(player?.position || 2),
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
              alignItems="center"
              display="flex"
              spacing="3"
              direction="row"
            >
              <Heading color="brand.black" size="md" as="div" minW="80px">
                {label}:
              </Heading>
              <Heading size="md" textTransform="capitalize" fontWeight="light">
                {value}
              </Heading>

              <Center>
                {label === "Nationality" && (
                  <Heading
                    as="div"
                    color="brand.medium"
                    fontFamily="Montserrat"
                    fontWeight="light"
                    size="md"
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
