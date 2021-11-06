import { VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import Sponsors from "../components/Sponsors";
import Articles from "../components/Articles";
import { fetchAPI } from "../lib/api";
import useBp from "../theme/useBp";
import Games from "../components/Games";

const Home = (props) => {
  const {
    articles,
    categories,
    homepage,
    games,
    sponsors,
    players,
    ...rest
  } = props;

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
      <Hero
        text="St. Louis Bombers Rugby Club"
        image="/images/nationals17.jpg"
        buttons={buttons}
      />
      <VStack direction="column" justifyContent="center">
        {games.length && <Games games={games || []} {...bpProps} />}
        {sponsors.length && <Sponsors sponsors={sponsors || []} {...bpProps} />}
        {articles.length && <Articles articles={articles} {...bpProps} />}
      </VStack>
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
    fetchAPI("/articles?status=published&_sort=publishedAt:asc"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games?_sort=date:asc"),
    fetchAPI("/players?_sort=position:asc"),
    fetchAPI("/coaches?_sort=id:asc"),
    fetchAPI("/sponsors"),
  ]);

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
