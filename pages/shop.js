import { SimpleGrid, Box, Center, Text } from "@chakra-ui/react";
import { Container } from "next/app";
import React from "react";
import Layout from "../common/Layout";
import Hero from "../common/Hero";
import useBp from "../theme/useBp";

const shop = () => {
  const [isDesktop] = useBp();
  const size = isDesktop ? "md" : "xl";
  return (
    <Layout seo={{ metaTitle: "Team Store" }}>
      <Hero text="Team Store" image="/images/mcb-hero.jpeg" size={size} />
      <SimpleGrid
        columns="1"
        spacing={8}
        m="0"
        p="8"
        bg="gray.light"
        height="100%"
      >
        <Center>
          <Text fontSize="4xl" color="ButtonFace">
            STORE COMING SOON
          </Text>
        </Center>
      </SimpleGrid>
    </Layout>
  );
};

export default shop;
