import { chunk, concat } from "lodash";

const useFeatures = (items) => {
  const featured = items
    .filter((article) => article.highlight)
    .sort((a, b) => b.publishedAt - a.publishedAt);

  console.log({ len: featured.length });

  if (featured.length === 3) {
    return featured;
  }

  if (featured.length > 3) {
    return chunk(featured, 3)[0];
  }

  if (featured.length < 3 && featured.length > 0) {
    const additional = chunk(items, 3 - featured.length);
    return concat(featured, additional).sort((a, b) => a.featured - b.featured);
  }
  if (featured.length === 0) return [...items[0], ...items[1], ...items[2]];
};

export default useFeatures;
