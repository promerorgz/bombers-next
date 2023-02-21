/* eslint-disable no-unused-vars */
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import Mdx from "common/Mdx";
import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../../../common/Hero";
import Layout from "../../../components/Layout";
import Pic from "../../../common/Pic";
import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";
import useBp from "../../../theme/useBp";
import ArticleTitle, { ArticleSummary } from "components/Articles/ArticleTitle";
import { HeroTileMeta } from "components/NewsReel/styles";
import { enUS } from "date-fns/locale";

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
  const [heroSize, setHeroSize] = useState("xs");

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  useEffect(() => {
    setHeroSize(isDesktop);
  }, [isDesktop]);

  const meta = [
    {
      name: "category",
      type: "categoryTag",
      content: article?.category?.name || "Story",
    },
    {
      name: "publishedAt",
      type: "dateTag",
      content: formatDistanceToNow(new Date(article?.publishedAt), {
        addSuffix: true,
        locale: {
          ...enUS,
          formatDistance: (unit, count) => {
            switch (true) {
              case unit === "xDays":
                return `${count} d`;

              case unit === "aboutXDays":
                return `${count} days ago`;

              case unit === "aboutXHours":
                return `${count} hrs ago`;
              case unit === "aboutXYears":
                return `${count} years ago`;

              case unit === "xMinutes":
                return `${count} min ago`;

              case unit === "xMonths":
                return `${count} mo. ago`;
              case unit === "aboutXMonths":
                return `${count} mo. ago`;

              case unit === "xSeconds":
                return "just now";

              case unit === "xYears":
                return `${count} y`;

              default:
                return "%d hours";
            }
          },
        },
      }),
    },
  ];

  return (
    <Layout seo={seo} mainBg="brand.black">
      <Hero
        parallax
        size={heroSize}
        image={imageUrl}
        downArrow={!isDesktop}
        contentLink={`#${article?.uid}` || "#start"}
      ></Hero>
      <>
        <Flex
          bg="brand.light"
          py="70px"
          justifyContent="flex-start"
          h="100%"
          id={article?.uid || "start"}
          borderRadius="20px 20px 0 0"
          position="relative"
          top="-10px"
          w="100%"
          m="auto"
        >
          <Box w="70%" m="auto" p="8" h="100%">
            <HeroTileMeta
              justify="flex-start"
              margin="8px"
              padding="0"
              color="meta"
            >
              {meta.map((item) => (
                <div className={item?.type || "dateTag"} key={item.name}>
                  {item.content}
                </div>
              ))}
            </HeroTileMeta>
            <ArticleTitle as="h1">{article?.title}</ArticleTitle>
            <ArticleSummary as="p">{article?.description}</ArticleSummary>
            <Flex gap="4" alignItems="center">
              <Box>
                {
                  <Pic
                    image={article.author?.picture || ""}
                    style={{
                      position: "static",
                      borderRadius: "50%",
                      height: 30,
                    }}
                  />
                }
              </Box>
              <Box>
                <p>By {article?.author?.name || "Anonymous"}</p>
                <p className="uk-text-meta uk-margin-remove-top">
                  {format(new Date(article.publishedAt), "PPPp")}
                </p>
              </Box>
            </Flex>
            <Divider size="1px" variant="solid" m="8" />
            <Flex
              justifyContent="flex-start"
              m="auto"
              alignItems="flex-start"
              direction="column"
            >
              {article?.tagline && (
                <Heading as="h3" size="lg" color="brand.highlight" my="4">
                  {article.tagline || ""}
                </Heading>
              )}
              <Box textAlign="justify" mb="10" pb="10">
                <Mdx>{article?.content}</Mdx>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.uid,
        category: article.category.name,
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
    revalidate: 60 * 60 * 60,
  };
}

export default Article;
