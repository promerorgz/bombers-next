import {
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { fetchAPI } from "lib/api";
import { sortBy } from "lodash";
import React, { useCallback, useState } from "react";
import ArticleCard from "../../src/components/Articles/ArticleCard";
import Layout from "../../src/components/Layout";

const News = ({ articles, categories }) => {
  const [selectedTab, setSelectedTab] = useState("Latest");

  const onTabChange = useCallback((e, d) => {
    setSelectedTab(e);
  }, []);

  return (
    <Layout
      header="Articles"
      seo={{
        metaTitle: "Articles",
        metaDescription: `${selectedTab} articles`,
      }}
      cover={{
        url: "/static/mcb-hero.jpeg",
        alternativeText: "McBride cover photo",
      }}
    >
      <Tabs
        fontFamily="Montserrat"
        align="center"
        variant="line"
        size="lg"
        colorScheme="gray"
        value={selectedTab}
        onChange={onTabChange}
        id="article-tabs"
        defaultIndex={0}
      >
        <TabList>
          <Tab fontSize="xl" fontWeight="bold">
            Latest
          </Tab>
          {categories.map((category) => (
            <Tab
              fontSize="xl"
              fontWeight="bold"
              fontFamily="Montserrat"
              textTransform="capitalize"
              key={category.id}
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels my="24px">
          <TabPanel>
            {articles.length
              ? sortBy(articles, (article) =>
                  new Date(article.publishedAt).toLocaleDateString("en")
                ).map((item) => <ArticleCard article={item} />)
              : "No Articles"}
          </TabPanel>
          {categories.map((category) => {
            return (
              <TabPanel textTransform="capitalize">
                {category.articles.length
                  ? category.articles.map((article) => {
                      return (
                        <ArticleCard
                          href={"/articles/"}
                          article={article}
                        ></ArticleCard>
                      );
                    })
                  : `No ${category.name} article`}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = (await fetchAPI(`/categories`)) || {};

  return {
    props: { categories },
    revalidate: 60,
  };
}

export default News;

// [{ category: "news", articles: [] }];
