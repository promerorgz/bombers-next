import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import { groupBy } from "lodash";
import React from "react";
import Hero from "../../src/common/Hero";
import Layout from "../../src/common/Layout";
import useBp from "../../theme/useBp";
import ScheduleTabs from "./components/ScheduleTabs";
import { fetchAPI } from "../../src/lib/api";

const Schedule = ({ games }) => {
  const { d1, d3 } = groupBy(games, "division");
  const [isDesktop] = useBp();
  const seo = {
    metaTitle: "Schedule",
  };
  return (
    <Layout seo={seo}>
      {/* <Hero
        text="Schedule"
        image="/images/nationals17.jpg"
        size={isDesktop ? "md" : "xl"}
        contentLink="#schedule"
      /> */}
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
            <Tab>Bombers DII</Tab>
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

export async function getStaticProps() {
  // Run API calls in parallel
  const [games] = await Promise.all([fetchAPI("/games")]);

  return {
    props: {
      games,
    },
    revalidate: 60,
  };
}

export default Schedule;
