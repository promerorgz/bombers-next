import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React, { useCallback, useState } from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import ArticleCard from "../../components/Articles/ArticleCard";
import { groupBy, uniq, sortBy } from "lodash";

const News = ({ articles, categories }) => {
  const [selectedTab, setSelectedTab] = useState("Latest");
  const byCategory = articles.reduce((acc, article) => {
    const category = article.category.name;
    const newObj = { ...article, category: article.category.name };
    return [...acc, newObj];
  }, []);

  const grouped = groupBy(byCategory, "category");

  const g = Object.entries(grouped).reduce((acc, [k, v]) => {
    return [...acc, v];
  }, []);

  const onTabChange = useCallback((e, d) => {
    setSelectedTab(e);
  }, []);

  return (
    <Layout margin>
      <Tabs
        variant="line"
        size="md"
        colorScheme="gray"
        value={selectedTab}
        onChange={onTabChange}
      >
        <TabList>
          <Tab>Latest</Tab>
          {categories.map((category) => (
            <Tab textTransform="capitalize" key={category.id}>
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid m="8" spacing="8" minChildWidth="300px">
              {sortBy(articles, (article) => article.id)
                .reverse()
                .map((item) => {
                  return (
                    <ArticleCard
                      article={item}
                      style={{
                        maxHeight: "300px",
                      }}
                    ></ArticleCard>
                  );
                })}
            </SimpleGrid>
          </TabPanel>
          {categories.map((category) => {
            console.log({ category });
            return (
              <TabPanel textTransform="capitalize">
                <SimpleGrid m="8" spacing="8" minChildWidth="300px">
                  {category.articles.length
                    ? category.articles.map((article) => {
                        return (
                          <ArticleCard
                            article={article}
                            highlight={category.articles.length === 1}
                          ></ArticleCard>
                        );
                      })
                    : `No ${category.name} article`}
                </SimpleGrid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default News;

[{ category: "news", articles: [] }];
