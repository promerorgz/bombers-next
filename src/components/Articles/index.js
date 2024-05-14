import {
  Box,
  Link as ChakraLink,
  Divider,
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
        <Link href="/articles" passHref legacyBehavior>
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
        direction="column"
      >
        {articles.map((article, i) => {
          return (
            <>
              <ArticleCard
                styles={{ maxHeight: 500 }}
                article={article}
                key={`article__left__${article?.slug}`}
              />
              <Divider />
            </>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Articles;
