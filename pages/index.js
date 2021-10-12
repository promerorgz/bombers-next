import {
  SimpleGrid,
  Grid,
  GridItem,
  HStack,
  Box,
  Stack,
  Flex,
  Link,
} from "@chakra-ui/layout";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { groupBy } from "lodash";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import Seo from "../common/Seo";
import Articles from "../components/Articles/articles";
import Games from "../components/Games";
import PaypalButton from "../components/Paypal/paypal-button";
import Sponsors from "../components/Sponsors";
import { fetchAPI } from "../lib/api";

const Home = (props) => {
  const { articles, categories, homepage, games, sponsors, ...rest } = props;

  const buttons = [
    {
      display: "Shop",
      link: "/shop",
    },
    {
      display: "Contact",
      link: "/contact",
    },
  ];

  return (
    <Layout categories={categories} seo={homepage.seo} bg="brand.light">
      <Seo seo={homepage.seo} />
      <Hero
        text="St. Louis Bombers Rugby Club"
        image="images/nationals17.jpg"
        buttons={buttons}
      />
      <SimpleGrid m="0" p="2" bg="brand.light">
        <Games games={games || []} />
        <Grid
          py="8"
          h="auto"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={16}
          mt="-50px"
        >
          <GridItem
            // colStart={[2, 2, 2, 3, 2]}
            // colEnd={[4, 4, 4, 4, 4]}
            mx={8}
            rowSpan={[1, null, 2]}
            colSpan={[5, 5, 5, 5, 5]}
            // colSpan={[10, 10, 10, 10, 10]}
          >
            <Flex
              justifyContent="space-between"
              alignContent="baseline"
              direction="row"
            >
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
                News
              </Heading>
              <Heading
                as="a"
                size="l"
                fontFamily="Big Shoulders Display"
                fontWeight="700"
                textTransform="uppercase"
                // mb="8"
                textDecoration="underline"
                textUnderlineOffset="10px"
              >
                <Link href="/news">see more</Link>
              </Heading>
            </Flex>
            <Articles articles={articles}></Articles>
          </GridItem>
        </Grid>
        <Box mx={-8} my={8} p={50} bg="brand.white">
          <Sponsors sponsors={sponsors} />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    categories,
    homepage,
    games,
    players,
    coaches,
    sponsors,
  ] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games"),
    fetchAPI("/players"),
    fetchAPI("/coaches"),
    fetchAPI("/sponsors"),
  ]);

  console.log({
    articles,
    categories,
    homepage,
    games,
    players,
    coaches,
    sponsors,
  });
  return {
    props: {
      articles,
      categories,
      homepage,
      games,
      players,
      coaches,
      sponsors,
    },
    revalidate: 1,
  };
}

export default Home;
