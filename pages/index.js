import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import Sponsors from "../components/Sponsors";
import Articles from "../components/Articles";
import { fetchAPI } from "../lib/api";
import useBp from "../theme/useBp";
import Games from "../components/Games";
import { isEmpty } from "lodash";
import SliderHero from "../common/SliderHero";

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

  const [isDesktop, isTablet, isMobile, isDisplayingInBrowser] = useBp();
  const bpProps = { isDesktop, isTablet, isMobile, isDisplayingInBrowser };

  return (
    <Layout sponsors={sponsors} seo={homepage.seo} bg="brand.light">
      {!isEmpty(sliders) ? (
        <SliderHero size="lg" slides={sliders?.content} />
      ) : null}
      <Hero
        text="St. Louis Bombers Rugby Club"
        image="/images/nationals17.jpg"
        buttons={buttons}
        size="full"
      />
      <VStack direction="column" justifyContent="center">
        {/* {games.length && <Games games={games || []} {...bpProps} />} */}
        <Box id="articles" w="80%" m="auto">
          {articles.length && <Articles articles={articles} {...bpProps} />}
        </Box>
        {sponsors.length && <Sponsors sponsors={sponsors || []} {...bpProps} />}
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
