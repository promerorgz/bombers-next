import { Box } from "@chakra-ui/react";
import PageContent from "src/common/PageContent";
import NewsReel from "../src/components/NewsReel";
import Section from "src/components/Section";
import Hero from "../src/common/Hero";
import Layout from "../src/components/Layout";
import { fetchAPI } from "../src/lib/api";

const Home = (props) => {
  const { articles, homepage, highlight } = props;

  return (
    <Layout seo={homepage.seo} bg="brand.light">
      <PageContent>
        {/* TODO: Uncomment when articles are ready */}
        <Section
          padding="0px 0px"
          height="80vh"
          style={{
            alignItems: "flex-start",
          }}
        >
          <NewsReel articles={articles} />
        </Section>

        <Section bg="dark"></Section>
        <Section bg="dark"></Section>
      </PageContent>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    homepage,
    d1Results,
    d1Upcoming,
    d3Results,
    d3Upcoming,
    homeCta,
  ] = await Promise.all([
    fetchAPI("/articles?status=published&_sort=publishedAt:asc&_limit=3"),
    fetchAPI("/homepage"),
    fetchAPI("/games?division=d1&finished=true&_sort=date:asc&_limit=3"),
    fetchAPI("/games?division=d1&finished=false&_sort=date:asc&_limit=3"),
    fetchAPI("/games?division=d3&finished=true&_sort=date:asc&_limit=3"),
    fetchAPI("/games?division=d3&finished=false&_sort=date:asc&_limit=3"),
    fetchAPI("/home-cta"),
  ]);

  return {
    props: {
      articles,
      homepage,
      d1Results,
      d1Upcoming,
      d3Results,
      d3Upcoming,
      highlight: homeCta.content,
    },
    revalidate: 60,
  };
}

export default Home;
