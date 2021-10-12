import { fetchAPI } from "../lib/api";

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    categories,
    homepage,
    games,
    players,
    coaches,
  ] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games"),
    fetchAPI("/players"),
    fetchAPI("/coaches"),
  ]);

  return {
    props: { articles, categories, homepage, games, players, coaches },
    revalidate: 1,
  };
}
