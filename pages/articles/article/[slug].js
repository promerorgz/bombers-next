import {
  Box,
  Divider,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Mdx from "common/Mdx";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../../../common/Hero";
import Layout from "../../../common/Layout";
import Pic from "../../../common/Pic";
import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";
import useBp from "../../../theme/useBp";

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

const Article = ({ article }) => {
  const [isDesktop] = useBp();

  const imageUrl = getStrapiMedia(article?.image);
  const [heroSize, setHeroSize] = useState("md");

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const textVariants = useBreakpointValue({
    base: "2xl",
    xs: "4xl",
    s: "4xl",
    md: "5xl",
    lg: "5xl",
    xl: "6xl",
  });

  useEffect(() => {
    setHeroSize(isDesktop);
  }, [isDesktop]);

  return (
    <Layout seo={seo}>
      <Hero
        size={heroSize}
        image={imageUrl}
        text={article?.title}
        downArrow={!isDesktop}
        contentLink={`#${article?.uid}` || "#start"}
      ></Hero>
      <Flex py="70px" id={article?.uid || "start"}>
        <Box w="75%" m="auto" p="0">
          <Flex className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <Box>
              {article.author.picture && (
                <Pic
                  image={article.author.picture}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )}
            </Box>
            <Box className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                {format(new Date(article.publishedAt), "MM/dd/yyyy")}
              </p>
            </Box>
          </Flex>
          <Divider size="2px" variant="solid" m="8"></Divider>
          {article?.tagline && (
            <Heading as="h2" size="lg">
              {article.tagline}
            </Heading>
          )}
          <Box textAlign="justify" mt="8" color="brand-highlight">
            <Mdx>{article?.content}</Mdx>
          </Box>
          <hr className="uk-divider-small" />
        </Box>
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.uid,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [article] =
    (await fetchAPI(`/articles?uid=${params.slug}&status=published`)) || {};

  return {
    props: { article },
    revalidate: 60,
  };
}

export default Article;
