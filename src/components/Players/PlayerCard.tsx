import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Card from "common/Card";
import React from "react";
import { getPosition } from "./utils";

const PlayerCard = ({ size, url, bg, division, position, displayName }) => {
  return (
    <Card
      key={displayName}
      radius="8px"
      id="team-card"
      as={`/team/${division}/${url}`}
      link={"/team/[division]/[slug]"}
      styles={{
        minHeight: "370px",
        height: "auto",
        maxWidth: "300px",
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: size > 3000 ? "cover" : "contain",
        backgroundColor: "gray",
      }}
      bg={bg}
      border="1px solid #e2e2e2"
    >
      <Box
        style={{
          background: `linear-gradient(
185deg,rgba(0,0,0,0) 20%,rgba(0,0,0,.9) 80%)`,
          height: "70%",
          zIndex: 98,
          width: "100%",
          position: "absolute",
          overflow: "hidden",
          bottom: 0,
          verticalAlign: "baseline",
          display: "flex",
        }}
      >
        <Flex
          id="text-content"
          p="0 0 16px 20px"
          direction="column"
          w="100%"
          alignSelf="flex-end"
        >
          <Heading
            m={0}
            color="brand.white"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="2em"
          >
            {displayName}
          </Heading>
          <Text color="brand.meta" textTransform="capitalize" fontWeight="300">
            {getPosition(position)}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};

export default PlayerCard;
