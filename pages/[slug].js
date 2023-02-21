import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Form from "../common/Form";
import Hero from "../common/Hero";
import Pic from "../common/Pic";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";

const DynamicPage = ({ page }) => {
  return (
    <Layout margin seo={page.seo}>
      {page.block.map((block) => {
        return {
          "sections.hero": (
            <Hero
              text={block?.title}
              size={block.size || "xl"}
              secondaryText={block.subTitle}
              // image={block.image}
              bg={block.background}
              // backButton={block.backButton}
              buttons={block.buttons}
              contentLink={block.contentLink}
              // direction={block.direction}
              // startPic={block.startPic}
            />
          ),
          "sections.section": (
            <>
              {block.display && (
                <Flex flexDirection="column" m="8" p="8" gap="8">
                  <Heading>{block.title}</Heading>
                  <Flex
                    gap={8}
                    justifyContent="space-evenly"
                    alignItems="center"
                    w="100%"
                  >
                    <Stack
                      w="100%"
                      direction={
                        block.imagePosition === "right" ? "row" : "row-reverse"
                      }
                      minH="50vh"
                    >
                      <Box w="50%" h="100%">
                        <ReactMarkdown>{block.content}</ReactMarkdown>
                      </Box>
                      <Box w="50%" h="100%">
                        <Pic borderRadius="10px" src={block.image || ""}></Pic>
                      </Box>
                    </Stack>
                  </Flex>
                  <div>
                    {block.links.map((link) => (
                      <Link href={`/${link.link}`} passHref>
                        <a>{link.title}</a>
                      </Link>
                    ))}
                  </div>
                </Flex>
              )}
            </>
          ),
          "sections.form": (
            <Form fields={block.field} title={block.title}></Form>
          ),
        }[block.__component];
      })}
    </Layout>
  );
};

export async function getStaticPaths() {
  const pages = await fetchAPI("/pages");

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug || "/404",
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [page] = (await fetchAPI(`/pages?slug=${params.slug}`)) || {};

  return {
    props: { key: page.id, page },
    revalidate: 60,
  };
}

export default DynamicPage;
