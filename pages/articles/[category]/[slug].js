/* eslint-disable no-unused-vars */
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import Mdx from "src/common/Mdx";
import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../../../src/common/Hero";
import Layout from "../../../src/common/Layout";
import Pic from "../../../src/common/Pic";
import { fetchAPI } from "../../../src/lib/api";
import { getStrapiMedia } from "../../../src/lib/media";
import useBp from "../../../theme/useBp";
import ArticleTitle, {
  ArticleSummary,
} from "../../../src/components/Articles/ArticleTitle";
import {
  ContentTag,
  ContentTime,
  HeroTileMeta,
} from "src/components/NewsReel/styles";
import { enUS } from "date-fns/locale";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookMessengerIcon,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";

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

const Article = ({ article, context }) => {
  const [isDesktop] = useBp();
  const router = useRouter();

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
      Component: ContentTag,
      content: article?.category?.name || "Story",
    },
    {
      name: "publishedAt",
      type: "dateTag",
      Component: ContentTime,
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
    <Layout
      cover={{ url: imageUrl, alternativeText: article.description }}
      seo={seo}
      mainBg="brand.black"
    >
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
            <ArticleTitle fontSize={["2xl", "3xl", "4xl"]}>
              {article?.title}
            </ArticleTitle>
            <ArticleSummary as="p">{article?.description}</ArticleSummary>
            <Flex gap="4" alignItems="center">
              <Box>
                <Pic
                  image={article.author?.picture || ""}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                w="100%"
              >
                <Box>
                  <p>By {article?.author?.name || "Anonymous"}</p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    {format(new Date(article.publishedAt), "PPPp")}
                  </p>
                </Box>
              </Box>
            </Flex>
            <Flex py="8" gap="4px">
              <EmailShareButton>
                <EmailIcon size={32} round></EmailIcon>
              </EmailShareButton>
              <FacebookShareButton
                url={`${process.env.HOST_URL || "http://localhost:3000"}${
                  router.asPath
                }`}
                quote={"Dummy text!"}
                hashtag="#muo"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`${process.env.HOST_URL || "http://localhost:3000"}${
                  router.asPath
                }`}
                quote={"Dummy text!"}
                hashtag="#muo"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <WhatsappShareButton>
                <WhatsappIcon size={32} round></WhatsappIcon>
              </WhatsappShareButton>
              <FacebookMessengerShareButton>
                <FacebookMessengerIcon size={32} round></FacebookMessengerIcon>
              </FacebookMessengerShareButton>
            </Flex>
            <Divider size="1px" variant="solid" m="8" color="brand.black" />
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
    // refetch every hr
    revalidate: 3600000,
  };
}

export default Article;
