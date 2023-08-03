import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useMediaQuery,
} from "@chakra-ui/react";
import Card from "common/Card";
import Hero from "common/Hero";
import { Pic } from "common/index";
import PageContent from "common/PageContent";
import Games from "components/Games";
import NewsReel from "components/NewsReel";
import Section from "components/Section";
import Image from "next/image";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import media from "utils/styleUtils";
import Countdown from "react-countdown";
import { format } from "date-fns";

const Home = (props) => {
  const { articles, homepage, d1Results, d1Upcoming, d3Results, d3Upcoming } =
    props;

  const countdownDate = new Date(d1Upcoming[0]?.date || d3Upcoming[0]?.date);
  console.log({ d1Results, d1Upcoming, d3Results, d3Upcoming });

  return (
    <Layout seo={homepage.seo} bg="brand.light">
      <Box display={media.mobileOnly} bg="black">
        <Hero
          direction="column"
          image="/images/DSC_0885.jpg"
          size="2xl"
          textAlign="start"
          text=""
          buttons={[
            {
              link: "/contact",
              display: "See more",
            },
          ]}
        />
      </Box>
      <NewsReel articles={articles} />
      <PageContent>
        <Section
          rounded
          title="Next up"
          subtitle={
            <Countdown
              date={countdownDate}
              renderer={({ days, hours, minutes, seconds, completed }) => (
                <span>
                  {completed
                    ? "done"
                    : `${days}:${hours}:${minutes}:${seconds}`}
                </span>
              )}
            ></Countdown>
          }
        ></Section>
        <Section title={"DI"} subtitle="Matches">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            h="300px"
            overflowX="scroll"
          >
            {d1Results.map((game) => {
              const [day, dow, month, year] = format(
                new Date(game.date),
                "dd EEEE MMMM yyyy"
              ).split(" ");
              return (
                <GridItem>
                  <Box>
                    <>
                      <header
                        style={{
                          margin: "-0.1rem",
                          padding: "0.7rem 1.4rem 0.6rem",
                          backgroundColor: "#181733",
                          display: "flex",
                          color: "#fff",
                        }}
                      >
                        <h3
                          style={{
                            lineHeight: "1rem",
                            wordSpacing: "0.6rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 400,
                              lineHeight: "3.2rem",
                              fontSize: "4rem",
                              display: "inline-block",
                            }}
                          >
                            {day}
                          </span>
                          <span
                            style={{
                              textTransform: "uppercase",
                              display: "inline-block",
                              wordSpacing: "normal",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 400,
                                display: "block",
                                fontSize: "1.8rem",
                                lineHeight: "1.6rem",
                              }}
                            >
                              {dow}
                            </span>
                            <span
                              style={{
                                fontWeight: 200,
                                display: "block",
                                fontSize: "1.8rem",
                                lineHeight: "1.6rem",
                              }}
                            >
                              {month}
                            </span>
                          </span>
                        </h3>
                      </header>
                      <div>{game.date}</div>
                      <Flex direction="row">
                        <Image
                          sizes={`${media.breakpoint("gt", "laptop")} ${
                            game.home.logo.url
                          }
                          ${media.breakpoint("gt", "tablet")} ${
                            game.home.logo.formats.medium?.url
                          }
                          ${media.breakpoint("gt", "mobile")} ${
                            game.home.logo.formats.small?.url
                          }
                          `}
                          width="100px"
                          height="100px"
                          src={game.home.logo?.url}
                        />
                        <Box>
                          {game.home_score} - {game.away_score}
                        </Box>
                        <Image
                          width="100px"
                          height="100px"
                          src={game.away.logo.formats?.small?.url}
                        ></Image>
                      </Flex>
                      <Box>{game.location}</Box>
                      <div>
                        <div></div>
                        <div></div>
                      </div>
                    </>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Section>
        <Section title={"D3"} subtitle="Matches">
          <Games division="1" status="result" />
        </Section>
      </PageContent>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, homepage, d1Results, d1Upcoming, d3Results, d3Upcoming] =
    await Promise.all([
      fetchAPI("/articles?status=published&_sort=publishedAt:asc&_limit=3"),
      fetchAPI("/homepage"),
      fetchAPI("/games?division=d1&finished=true&_sort=date:asc&_limit=3"),
      fetchAPI("/games?division=d1&finished=false&_sort=date:asc&_limit=3"),
      fetchAPI("/games?division=d3&finished=true&_sort=date:asc&_limit=3"),
      fetchAPI("/games?division=d3&finished=false&_sort=date:asc&_limit=3"),
    ]);

  return {
    props: {
      articles,
      homepage,
      d1Results,
      d1Upcoming,
      d3Results,
      d3Upcoming,
    },
    revalidate: 60,
  };
}

export default Home;
