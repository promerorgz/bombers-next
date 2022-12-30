import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import Card from "../../common/Card";
import { getPosition } from "./utils";
import classes from "./players.module.css";

const List = ({ players, noClick, title }) => {
  return !players ? (
    <>Nothing found here</>
  ) : (
    <Box m={[0, 0, 0, 8, 16]} id="players-list">
      <Heading m={[8, 16]}>{title}</Heading>
      <SimpleGrid columns={[1, 1, 3]} spacing={10} m={[0, 0, 8, 16]}>
        {players?.length ? (
          players?.map((player) => {
            const { picture, hoverPic } = player;

            const background = picture?.url || "/images/defaultpic.png";

            const hoverBg = hoverPic?.url || picture?.url;

            return (
              <Card
                key={`${player?.first_name}-${player?.last_name}-card`}
                radius="8px"
                id="player-card"
                as={`/team/${player?.division?.toLowerCase()}/${player?.slug}`}
                link={noClick ? "" : "/team/[division]/[id]"}
                styles={{
                  minHeight: "370px",
                  height: "auto",
                  maxWidth: "300px",
                  display: "flex",
                  justifyContent: "space-around",
                  cursor: noClick ? "inherit" : "pointer",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "gray",
                }}
                bg={background}
                bgProps={{
                  width: 300,
                  alt: `${player?.first_name}-${player?.last_name}`,
                }}
                hoverBg={hoverBg}
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
                      as="p"
                      color="brand.light"
                      fontWeight="medium"
                      textTransform="uppercase"
                      fontSize="xl"
                      className={classes.highlight}
                    >
                      {getPosition(player.position)}
                    </Heading>

                    <Heading
                      m={0}
                      color="brand.white"
                      fontWeight="bold"
                      textTransform="uppercase"
                      wordSpacing="6px"
                      fontSize="2em"
                    >
                      {player.first_name}
                    </Heading>
                    <Heading
                      m={0}
                      color="brand.white"
                      fontWeight="bold"
                      textTransform="uppercase"
                      wordSpacing="6px"
                      fontSize="2em"
                    >
                      {player.last_name}
                    </Heading>
                  </Flex>
                </Box>
              </Card>
            );
          })
        ) : (
          <Heading as="h5">no players found</Heading>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default List;
