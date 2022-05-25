import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import { groupBy } from "lodash";
import React from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import useBp from "../../theme/useBp";
import ScheduleTabs from "./components/ScheduleTabs";

const Schedule = ({ games }) => {
  const { d1, d3 } = groupBy(games, "division");
  const [isDesktop] = useBp();
  const seo = {
    metaTitle: "Schedule",
  };
  return (
    <Layout seo={seo}>
      <Hero
        text="Schedule"
        image="/images/nationals17.jpg"
        size={isDesktop ? "md" : "xl"}
        contentLink="#schedule"
      />
      <Box h="100vh">
        <Tabs
          id="schedule"
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
      </Box>
    </Layout>
  );
};

export default Schedule;
