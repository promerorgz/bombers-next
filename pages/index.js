import { css } from "@emotion/react";
import PageContent from "common/PageContent";
import Games from "components/Games";
import NewsReel from "components/NewsReel";
import Section from "components/Section";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import { fetchAPI } from "../lib/api";

const Home = (props) => {
  const { articles, homepage, sponsors, games } = props;

  return (
    <Layout sponsors={sponsors} seo={homepage.seo} bg="brand.light">
      <NewsReel articles={articles} />
      <Sponsors sponsors={sponsors || []} />
      <PageContent>
        <Section
          rounded
          titles={["Bombers DI", "Bombers DIII"]}
          subtitle="Matches"
        >
          <Games games={games} />
        </Section>
      </PageContent>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, homepage, sponsors, games] = await Promise.all([
    fetchAPI("/articles?status=published&_sort=publishedAt:asc"),
    fetchAPI("/homepage"),
    fetchAPI("/sponsors"),
    fetchAPI("/games"),
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
