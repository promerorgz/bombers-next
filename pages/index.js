import NewsReel from "components/NewsReel";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import { fetchAPI } from "../lib/api";

const Home = (props) => {
  const { articles, homepage, sponsors } = props;

  return (
    <Layout sponsors={sponsors} seo={homepage.seo} bg="brand.light">
      <NewsReel articles={articles} />
      <Sponsors sponsors={sponsors || []} />
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
