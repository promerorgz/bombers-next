import {
  SimpleGrid,
  Flex,
  Stack,
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";
import { indexOf } from "lodash";
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import _dropRight from "lodash/dropRight";
import Link from "next/link";

const Articles = ({ articles, isDesktop }) => {
  return (
    <Center flexDirection="column">
      {/* <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        p="4"
      >
        <Heading size="2xl">Articles</Heading>
        <Link href="/articles     ">
          <ChakraLink>See All</ChakraLink>
        </Link>
      </Stack> */}
      <Stack
        spacing="8"
        w="99%"
        margin="8"
        justifyContent="space-evenly"
        alignContent="space-around"
        flexWrap="wrap"
      >
        <SimpleGrid minChildWidth="300px" spacing={4}>
          {articles.map((article, i) => {
            return (
              <ArticleCard
                highlight={article?.highlight || false}
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
