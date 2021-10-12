import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Team = ({ team: { name, score, logo }, away, preview }) => {
  const uploadsUrl = (url) => `${process.env.strapi}${url}`;

  const direction = away ? "row-reverse" : "row";
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={direction}
        width="100%"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction={preview ? "row-reverse" : direction}
        >
          <Flex flexGrow="1">
            <Text
              fontWeight={name === "Bombers" ? "extrabold" : "normal"}
              my={0}
              mx={2}
              fontSize="2xl"
              fontFamily="Big Shoulders Display"
              textTransform={preview ? "uppercase" : "capitalize"}
              color={preview ? "white" : "inherit"}
            >
              {name}
            </Text>
          </Flex>
          <Box m={4}>
            <Avatar
              bg="brand.200"
              // showBorder
              size="sm"
              name={name}
              src={uploadsUrl(logo?.url || "")}
            />
          </Box>
        </Flex>
        {score && (
          <Box>
            <Text
              color="tomato"
              fontWeight={"extrabold"}
              my={0}
              mx={2}
              fontSize="2xl"
              fontFamily="Big Shoulders Display"
              textTransform="capitalize"
              // bgColor={preview ? "#e2e2e2" : "none"}
              p={2}
            >
              {score}
            </Text>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Team;
