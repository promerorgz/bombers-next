import { Avatar } from "@chakra-ui/avatar";
import { Stack, Box, Wrap, WrapItem, Heading } from "@chakra-ui/layout";
import React from "react";
import Pic from "../../common/Pic";

const Sponsors = ({ sponsors }) => {
  return (
    <>
      <Heading
        as="h3"
        size="2xl"
        fontFamily="Big Shoulders Display"
        fontWeight="700"
        textTransform="uppercase"
        mb="8"
        textDecoration="underline"
        textUnderlineOffset="10px"
      >
        Sponsors
      </Heading>
      <Wrap spacing={8} align="center" justifyContent="space-evenly">
        {sponsors.map((sponsor) => {
          const image = { ...sponsor.image, alternativeText: sponsor.name };

          return (
            sponsor.level === "gold" && (
              <WrapItem key={sponsor.name}>
                <Pic image={image} size="3xs"></Pic>
              </WrapItem>
            )
          );
        })}
      </Wrap>
    </>
  );
};

export default Sponsors;
