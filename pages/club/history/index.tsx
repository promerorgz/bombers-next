import { Box, Heading } from "@chakra-ui/react";
import Mdx from "../../../src/common/Mdx";
import PageContent from "../../../src/common/PageContent";
import Layout from "../../../src/common/Layout";
import { fetchAPI } from "../../../src/lib/api";

const ClubHistory = ({ history }) => {
  return (
    <Layout
      header="Club History"
      cover={{
        url: "/static/legends_3.jpeg",
        alternativeText: "Bombers legends",
      }}
      seo={{
        metaTitle: "Our History",
        shareImage: "/static/legends_3.jpeg",
        metaDescription: "In the St. Louis Rugby Scene since 1962",
      }}
    >
      <PageContent>
        {history?.section?.map((section) => {
          return (
            <Box maxH="100%" my="8" mx="auto" p="8" maxW="5xl">
              <Box>
                <Heading size="xl">{section.title}</Heading>
                <Heading size="sm" color="brand.medium">
                  {section.subtitle}
                </Heading>
              </Box>
              <Box>
                <Mdx>{section.content}</Mdx>
              </Box>
            </Box>
          );
        })}
      </PageContent>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [history] = await Promise.all([fetchAPI("/history")]);

  return {
    props: {
      history,
    },
    revalidate: 60,
  };
}
export default ClubHistory;
