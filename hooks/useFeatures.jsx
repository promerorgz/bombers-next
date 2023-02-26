import { chunk, concat } from "lodash";

const useFeatures = (items) => {
  const featured = items
    .filter((article) => article.highlight)
    .sort((a, b) => a.publishedAt - b.publishedAt);

  if (featured.length === 3) {
    return featured;
  }

  if (featured.length > 3) {
    return chunk(featured)[0];
  }

  if (featured.length < 3 && featured.length > 0) {
    const additional = chunk(items, 2)[0];
    console.log({ additional });
    return concat(featured, additional).sort((a, b) => a.featured - b.featured);
  }
  if (featured.length === 0) return items;
};

export default useFeatures;
