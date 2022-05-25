import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";
import { sortBy } from "lodash";
import React, { useCallback, useState, useEffect } from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import ArticleCard from "../../components/Articles/ArticleCard";
import useBp from "../../theme/useBp";

const News = ({ articles, categories }) => {
  const [selectedTab, setSelectedTab] = useState("Latest");
  const [size, setSize] = useState("md");

  const onTabChange = useCallback((e, d) => {
    setSelectedTab(e);
  }, []);

  const [isDesktop] = useBp();

  useEffect(() => {
    setSize(isDesktop ? "md" : "xl");
  }, [isDesktop]);

  return (
    <Layout seo={{ metaTitle: "Articles" }}>
      <Hero
        text="Articles"
        image="/images/mcb-hero.jpeg"
        size={isDesktop ? "md" : "xl"}
        contentLink={size === "xl" ? "#articles" : false}
      />
      <Tabs
        variant="line"
        size="lg"
        colorScheme="gray"
        value={selectedTab}
        onChange={onTabChange}
        isFitted
        id="articles"
      >
        <TabList>
          <Tab
            fontFamily="Big Shoulders Display"
            fontSize="xl"
            fontWeight="bold"
          >
            Latest
          </Tab>
          {categories.map((category) => (
            <Tab
              fontSize="xl"
              fontWeight="bold"
              fontFamily="Big Shoulders Display"
              textTransform="capitalize"
              key={category.id}
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            {
              <SimpleGrid
                columns={1}
                m={[0, 0, 2, 2, 2]}
                spacing="8"
                minChildWidth="200px"
                maxChildWidth="400px"
              >
                {articles.length
                  ? sortBy(articles, (article) => article.id).map((item) => {
                      return (
                        <ArticleCard
                          article={item}
                          style={{
                            maxHeight: "300px",
                          }}
                        ></ArticleCard>
                      );
                    })
                  : "No Articles"}
              </SimpleGrid>
            }
          </TabPanel>
          {categories.map((category) => {
            return (
              <TabPanel textTransform="capitalize">
                <SimpleGrid
                  m={[0, 0, 2, 2, 4]}
                  spacing="8"
                  minChildWidth="300px"
                >
                  {category.articles.length
                    ? category.articles.map((article) => {
                        return (
                          <ArticleCard
                            article={article}
                            // highlight={category.articles.length === 1}
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

// [{ category: "news", articles: [] }];
