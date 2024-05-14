import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../../src/common/Card";
import Layout from "../../src/common/Layout";

const TeamHome = () => {
  const teams = [
    {
      displayName: "Division 1",
      url: "d1",
      bg: "/static/d1_team.jpeg",
    },
    {
      displayName: "Division 2",
      url: "d3",
      bg: "/static/d3TeamPhoto.JPG",
    },
    {
      displayName: "Coaches & Staff",
      url: "coaches-and-staff",
      bg: "/static/coach_pic1.jpeg",
    },
    {
      displayName: "Legends",
      url: "legends",
      bg: "/static/jk_legends_pic.jpeg",
    },
  ];
  return (
    <Layout seo={{ metaTitle: "Team" }} header="Players and Staff">
      <SimpleGrid
        h="100%"
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={[0, 0, 5, 10]}
        m={[0, 0, 8, 16]}
      >
        {teams.map((team) => {
          return (
            <Card
              key={`${team.url}`}
              radius="8px"
              id="team-card"
              as={`/team/${team?.url}`}
              link={"/team/[division]"}
              styles={{
                minHeight: "370px",
                height: "auto",
                maxWidth: "300px",
                display: "flex",
                justifyContent: "space-around",
                cursor: "pointer",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "gray",
              }}
              bg={team.bg}
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
                    wordSpacing="6px"
                    fontSize="2em"
                  >
                    {team.displayName}
                  </Heading>
                </Flex>
              </Box>
            </Card>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default TeamHome;
