import { Heading } from "@chakra-ui/layout";
import { groupBy, map } from "lodash";
import React from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
// import { groupBy, uniq } from "lodash";

const News = ({ articles }) => {
  const byCategory = articles.reduce((acc, article) => {
    const category = article.category.name;
    const newObj = { ...article, category: article.category.name };
    return [...acc, newObj];
  }, []);

  const grouped = groupBy(byCategory, "category");

  const g = Object.entries(grouped).reduce((acc, [k, v]) => {
    return [...acc, v];
  }, []);
  return (
    <Layout>
      <Hero text="News & Articles" size="sm"></Hero>
      {map(grouped, (article, i, o) => {
        return article.map((thing) => {
          return (
            <>
              <Heading as="h1" size="2xl" key={thing.title}>
                heading {i}
              </Heading>
              <div key={thing.slug}>{thing.title}</div>
            </>
          );
        });
      })}
    </Layout>
  );
};

export default News;

[{ category: "news", articles: [] }];
