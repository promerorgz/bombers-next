import React from "react";
import { Stack, Heading, Center } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import getCountryCodes from "../../../utils/getCountryCode";

const PlayerInfo = ({ data }) => {
  return (
    <>
      <Stack direction="column" p="8" spacing="4" justifyContent="center">
        {data?.map(({ label, value }) => {
          return (
            <Stack
              alignItems="flex-start"
              display="flex"
              spacing="4"
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
                  <ReactCountryFlag svg countryCode={getCountryCodes(value)} />
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
