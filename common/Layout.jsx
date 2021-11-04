import { Flex, Text, Heading, Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import Seo from "./Seo";

const Layout = ({ children, sponsors, seo, header, margin, bg }) => {
  const navs = [
    {
      name: "articles",
      id: "articles",
      slug: "articles",
    },
    {
      name: "schedule",
      id: "schedule",
      slug: "schedule",
    },
    {
      name: "team",
      id: "team",
      slug: "team",
    },
    {
      name: "contact",
      id: "contact",
      slug: "contact",
    },
    // {
    //   name: "photos",
    //   id: "photos",
    //   slug: "photos",
    // },
    // {
    //   name: "more",
    //   id: "more",
    //   slug: "more",
    // },
    {
      name: "shop",
      id: "shop",
      slug: "shop",
    },
  ];
  return (
    <>
      <>
        <Seo seo={seo} />
        <Box display="flex" flexDirection="column" bg={bg}>
          <Nav navs={navs} />
          <Box m={margin ? 8 : 0}>
            {header && (
              <Heading mb="8" as="h1" size="4xl">
                {header}
              </Heading>
            )}

            {children}
          </Box>
          <Footer navs={navs} sponsors={sponsors} />
        </Box>
      </>
    </>
  );
};

export default Layout;
