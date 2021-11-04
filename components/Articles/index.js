import {
  SimpleGrid,
  Flex,
  Stack,
  Box,
  Center,
  Heading,
} from "@chakra-ui/layout";
import { Link as ChakraLink, Button, Text } from "@chakra-ui/react";
import { indexOf } from "lodash";
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import _slice from "lodash/slice";
import Link from "next/link";

const Articles = ({ articles, isDesktop }) => {
  const [latest, setLatest] = useState({});
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    setLatest(articles[articles.length - 1]);
    setAllArticles(_slice(articles, 1, 6));
  }, [articles]);

  return (
    <Center flexDirection="column" p="8">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p="4"
      >
        <Heading size="2xl">Articles</Heading>
        <Link href="/news">
          <ChakraLink>See All</ChakraLink>
        </Link>
      </Stack>
      <Stack
        spacing="8"
        w="99%"
        margin="8"
        justifyContent="space-evenly"
        alignContent="space-around"
        flexWrap="wrap"
      >
        <ArticleCard
          isDesktop={isDesktop}
          highlight={isDesktop}
          article={latest}
          key={`article__left__${latest?.slug}`}
        />
        <SimpleGrid minChildWidth="300px" spacing={4}>
          {allArticles.map((article, i) => {
            return (
              <ArticleCard
                styles={{ maxHeight: 500 }}
                article={article}
                key={`article__left__${article?.slug}`}
              />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Center>
  );
};

export default Articles;
