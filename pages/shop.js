import { SimpleGrid, Box, Center, Text } from "@chakra-ui/react";
import { Container } from "next/app";
import React from "react";
import Layout from "../common/Layout";
import Hero from "../common/Hero";

const shop = () => {
  return (
    <Layout>
      <Hero text="Shop" buttons={[]} image="" size="md" />
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
