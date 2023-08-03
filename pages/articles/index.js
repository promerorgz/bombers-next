import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";
import { fetchAPI } from "lib/api";
import { sortBy } from "lodash";
import React, { useCallback, useState, useEffect } from "react";
import Hero from "../../common/Hero";
import Layout from "../../components/Layout";
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
        fontFamily="Montserrat"
        variant="line"
        size="lg"
        colorScheme="gray"
        value={selectedTab}
        onChange={onTabChange}
        isFitted
        id="articles"
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
        <TabPanels>
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
                <SimpleGrid
                  m={[0, 0, 2, 2, 4]}
                  spacing="8"
                  minChildWidth="300px"
                >
                  {category.articles.length
                    ? category.articles.map((article) => {
                        return (
                          <ArticleCard
                            href={"/articles/"}
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

export async function getStaticProps() {
  const categories = (await fetchAPI(`/categories`)) || {};

  return {
    props: { categories },
    revalidate: 60,
  };
}

export default News;

// [{ category: "news", articles: [] }];
