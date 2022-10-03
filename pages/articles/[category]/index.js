import { SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "components/Articles/ArticleCard";
import styled from "styled-components";
import Layout from "../../../components/Layout";
import { fetchAPI } from "../../../lib/api";

const ArticleHeader = styled.div`
  font-size: 44px;
  color: white;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(33, 33, 33, 1) 35%,
    rgba(48, 48, 48, 1) 100%
  );
  padding: 16px;
  border: 4px solid white;
  width: 100%;
  text-align: center;
`;

const defaultArticle = {
  image: {
    url: "",
  },
  title: "",
  description: "",
  author: {},
  published_at: "",
  content: "",
};

const Article = ({ articles }) => {
  console.log({ articles });

  return (
    <Layout seo={{}} mainBg="brand.black">
      {articles.map((article) => (
        <SimpleGrid m={[0, 0, 2, 2, 4]} spacing="8" minChildWidth="300px">
          {articles.length
            ? articles.map((article) => {
                return (
                  <ArticleCard
                    article={article}
                    href="/articles/"
                    // highlight={category.articles.length === 1}
                  ></ArticleCard>
                );
              })
            : `No ${category.name} article`}
        </SimpleGrid>
      ))}
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");
  console.log({ categories });

  return {
    paths: categories.map(({ name }) => ({
      params: {
        category: name,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log({ params });
  const articles = await fetchAPI(
    `/articles?[category.name]=${params.category}&status=published`
  );

  console.log({ articles });
  return {
    props: { articles },
    revalidate: 60 * 60 * 60,
  };
}

export default Article;
