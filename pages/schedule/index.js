import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { groupBy } from "lodash";
import React, { useState } from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import Seo from "../../common/Seo";
import useBp from "../../theme/useBp";
import Results from "./components/Results";
import Schedule from "./components/Schedule";
import ScheduleTabs from "./components/ScheduleTabs";

const schedule = ({ games }) => {
  const { d1, d3 } = groupBy(games, "division");
  const [isDesktop] = useBp();
  const seo = {
    metaTitle: "game",
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <Hero
        text="Schedule"
        image="/images/nationals17.jpg"
        size={isDesktop ? "md" : "xl"}
      />
      <Tabs
        isFitted
        size="lg"
        colorScheme="gray"
        fontWeight="bold"
        fontFamily="Big Shoulders Display"
        fontSize="xl"
        color="brand.black"
      >
        <TabList>
          <Tab>Bombers DI</Tab>
          <Tab>Bombers DIII</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ScheduleTabs games={d1}></ScheduleTabs>
          </TabPanel>
          <TabPanel>
            <ScheduleTabs games={d3}></ScheduleTabs>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default schedule;
