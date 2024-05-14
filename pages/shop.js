import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../src/common/Layout";

const Shop = () => {
  return (
    <Layout seo={{ metaTitle: "Team Store" }}>
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

export default Shop;
