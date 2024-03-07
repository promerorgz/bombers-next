/* eslint-disable no-unused-vars */
import { SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "src/components/Articles/ArticleCard";
import styled from "styled-components";
import Layout from "../../../src/components/Layout";
import { fetchAPI } from "../../../src/lib/api";

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

const Article = ({ articles, category }) => {
  return (
    <Layout seo={{ mainTitle: category }} header={category}>
      <SimpleGrid m={[0, 0, 2, 2, 4]} spacing="8" minChildWidth="300px">
        {articles.map((article) => {
          return (
            <ArticleCard article={article} href="/articles/"></ArticleCard>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

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
  const articles = await fetchAPI(
    `/articles?[category.name]=${params.category}&status=published`
  );

  return {
    props: { articles, category: params.category },
    revalidate: 60 * 60 * 60,
  };
}

export default Article;
