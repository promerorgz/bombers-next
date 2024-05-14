import { Box, Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import MatchTeams from "components/Games/MatchTeams";
import PageContent from "src/common/PageContent";
import Hero from "../src/common/Hero";
import Layout from "../src/common/Layout";
import Section from "../src/components/Section";
import { fetchAPI } from "../src/lib/api";
import Utils from "../utils/Utils";

const NextMatchText = styled(Box)`
  color: "#fff";
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  .next-match__text--date {
    margin-bottom: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 8px;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    .next-match__text--date {
      margin-right: 30px;
      gap: 34px;
    }
  }
  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const NextMatchFont = styled(Box)<{ size?: "xs" | "sm" | "md" | "lg" }>`
  margin-right: ${(props) =>
    ({
      xs: "0px",
      sm: "0px",
      md: "32px",
      lg: "52px",
    }[props.size || "xs"])};
  line-height: ${(props) =>
    ({
      xs: "20px",
      sm: "22px",
      md: "26px",
      lg: "34px",
    }[props.size || "xs"])};
  font-weight: ${(props) => (props.size !== "lg" ? "400" : "700")};
  font-size: ${(props) =>
    ({
      xs: "12px",
      sm: "16px",
      md: "18px",
      lg: "26px",
    }[props.size || "xs"])};
  color: var(--chakra-colors-brand-light);
  width: 100%;
  padding: ${(props) =>
    ({
      xs: "0 4px",
      sm: "0 8px",
      md: "0 12px",
      lg: "0 15px",
    }[props.size || "xs"])};
  flex: 1;
`;

const Home = (props) => {
  const { articles, homepage, highlight, d1Upcoming } = props;
  const { getLongDate } = new Utils();
  return (
    <Layout seo={homepage.seo} bg="brand.light" id="homepage">
      <PageContent>
        <Hero size="3xl" {...highlight} direct></Hero>
        <Section
          bg="brand.dark"
          padding="0px"
          style={{ display: "flex", height: "150px", justifyContent: "center" }}
          align="center"
        >
          <Box
            py="24px"
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            maxW="1180px"
            w="100%"
            mx={8}
          >
            <NextMatchFont size="lg">Next Up: </NextMatchFont>
            <MatchTeams match={d1Upcoming[0]} />
            <NextMatchText flex="2" className="next-match__text--date">
              <Flex gap="3" flex="2">
                <NextMatchFont size="sm" color="white">
                  {getLongDate(d1Upcoming[0].date)[0]}
                </NextMatchFont>
                <NextMatchFont size="sm" color="white">
                  {getLongDate(d1Upcoming[0].date)[1]}
                </NextMatchFont>
              </Flex>
            </NextMatchText>
            <NextMatchText flex="2">
              <NextMatchFont size="md" color="white">
                {d1Upcoming[0].location}
              </NextMatchFont>
            </NextMatchText>
            <Box flex="1">
              <Button variant="outline">Watch Info</Button>
            </Box>
          </Box>
        </Section>
      </PageContent>

      <Section
        bg="light"
        padding="0px 0px"
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <NewsReel articles={articles} /> */}
      </Section>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    homepage,
    // d1Results,
    d1Upcoming,
    // d3Results,
    // d3Upcoming,
    homeCta,
  ] = await Promise.all([
    fetchAPI("/articles?status=published&_sort=publishedAt:asc&_limit=3"),
    fetchAPI("/homepage"),
    // fetchAPI("/games?division=d1&finished=true&_sort=date:asc&_limit=3"),
    fetchAPI("/games?division=d1&finished=false&_sort=date:asc&_limit=1"),
    // fetchAPI("/games?division=d3&finished=true&_sort=date:asc&_limit=3"),
    // fetchAPI("/games?division=d3&finished=false&_sort=date:asc&_limit=3"),
    fetchAPI("/home-cta"),
  ]);

  return {
    props: {
      articles,
      homepage,
      // d1Results,
      d1Upcoming,
      // d3Results,
      // d3Upcoming,
      highlight: homeCta?.content || null,
    },
    revalidate: 60,
  };
}

export default Home;
