import React from "react";
import Layout from "../../common/Layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PlayerList from "../../components/Players/playerList";

const Team = ({ players, coaches }) => {
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

  return (
    <Layout header="Players" margin>
      <Tabs variant="solid-rounded" isFitted size="sm" colorScheme="gray">
        <TabList>
          <Tab>Bombers DI</Tab>
          <Tab>Bombers DIII</Tab>
          <Tab>Coaches & Staff</Tab>
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
    </Layout>
  );
};

export default Team;
