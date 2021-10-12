import { SimpleGrid, Flex } from "@chakra-ui/layout";
import { Link, Button, Text } from "@chakra-ui/react";
import { indexOf } from "lodash";
import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {
  const latestArticle = articles[articles.length - 1];
  const rightArticles = articles
    .slice(0, articles.length - 1)
    .filter((article) => article.slug !== latestArticle.slug)
    .slice(0, 4);

  return (
    <SimpleGrid columns={1} spacing="8">
      <ArticleCard
        highlight
        article={latestArticle}
        key={`article__left__${latestArticle.slug}`}
      />
      <SimpleGrid columns={[2, 1, 1, 2, 2, 2]} spacing={8}>
        {rightArticles.map((article, i) => {
          return (
            <ArticleCard
              styles={{ maxHeight: 500 }}
              article={article}
              key={`article__left__${article.slug}`}
            />
          );
        })}
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default Articles;
