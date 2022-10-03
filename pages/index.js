import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import Articles from "../components/Articles";
import { fetchAPI } from "../lib/api";
import useBp from "../theme/useBp";
import Games from "../components/Games";
import { isEmpty } from "lodash";
import SliderHero from "../common/SliderHero";
import NewsReel from "components/NewsReel";

const Home = (props) => {
  const { articles, homepage, sponsors, sliders } = props;

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
    <Layout sponsors={sponsors} seo={homepage.seo} bg="brand.light">
      {!isEmpty(sliders) ? (
        <SliderHero size="lg" slides={sliders?.content} />
      ) : null}
      <NewsReel articles={articles} />
      <VStack direction="column" justifyContent="center">
        {sponsors.length && <Sponsors sponsors={sponsors || []} />}
      </VStack>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, homepage, sponsors] = await Promise.all([
    fetchAPI("/articles?status=published&_sort=publishedAt:asc"),
    fetchAPI("/homepage"),
    fetchAPI("/sponsors"),
  ]);

  return {
    props: {
      articles,
      homepage,
      sponsors,
    },
    revalidate: 60,
  };
}

export default Home;
