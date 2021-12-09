import React, { useState, useCallback, useEffect } from "react";
import Layout from "../../common/Layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import PlayerList from "../../components/Players/playerList";
import Hero from "../../common/Hero";
import useBp from "../../theme/useBp";

const Team = ({ players, coaches }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [heroSize, setHeroSize] = useState("md");
  const [isDesktop] = useBp();

  useEffect(() => {
    setHeroSize(isDesktop ? "lg" : "xl");
  }, [isDesktop]);

  const onTabChange = useCallback((e) => {
    setSelectedTab(e);
  }, []);

  const defaultObject = { d1: [], d3: [], staff: coaches || [] };
  const { d1, d3, staff } = players.length
    ? players?.reduce((acc, player) => {
        let d3 = [];
        let d1 = [];
        if (player.division === "D3") {
          d3.push(player);
        }
        if (player.division === "D1") {
          d1.push(player);
        }
        return { ...acc, d1: [...d1, ...acc.d1], d3: [...d3, ...acc.d3] };
      }, defaultObject)
    : defaultObject;

  const tabs = ["Bombers DI", "Bombers DIII", "Coaches & Staff"];

  return (
    <Layout seo={{ metaTitle: "Team" }}>
      <Hero
        text="Players"
        image="/images/nationals17.jpg"
        size={heroSize}
        contentLink={heroSize === "xl" ? "#players" : false}
      ></Hero>
      <Tabs
        id="players"
        variant="line"
        isFitted={true}
        isLazy
        size="lg"
        value={selectedTab}
        onChange={onTabChange}
        defaultIndex={selectedTab}
      >
        <TabList>
          {tabs.map((tab) => (
            <Tab
              fontFamily="Big Shoulders Display"
              fontWeight="bold"
              fontSize="xl"
              _selected={{ bg: "brand.black", color: "brand.white" }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <PlayerList list={d1}></PlayerList>
          </TabPanel>
          <TabPanel>
            <PlayerList list={d3}></PlayerList>
          </TabPanel>
          <TabPanel>
            <PlayerList list={staff} staff></PlayerList>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box minH="20vh"></Box>
    </Layout>
  );
};

export default Team;
