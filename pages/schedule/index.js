import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { groupBy } from "lodash";
import React, { useState } from "react";
import Layout from "../../common/Layout";
import Results from "./components/Results";
import Schedule from "./components/Schedule";
import ScheduleTabs from "./components/ScheduleTabs";

const schedule = ({ games }) => {
  const { d1, d3 } = groupBy(games, "division");

  return (
    <Layout header="Schedule" margin>
      <Tabs variant="solid-rounded" isFitted size="sm" colorScheme="gray">
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
