import {
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {
  return (
    <Box flexDirection="column" w="100%">
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        w="100%"
        p="8"
      >
        <Link href="/articles" passHref>
          <ChakraLink>
            <Text fontFamily="Helvetica Neue">See All</Text>
          </ChakraLink>
        </Link>
      </Stack>
      <Stack
        spacing="8"
        w="99%"
        justifyContent="space-evenly"
        alignContent="space-around"
        flexWrap="wrap"
      >
        <SimpleGrid spacing={4} columns={[1, 2, 2]} w="100%">
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
    </Box>
  );
};

export default Articles;
