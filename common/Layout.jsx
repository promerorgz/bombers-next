import { Flex, Text, Heading, Container, Box } from "@chakra-ui/react";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import Seo from "./Seo";
import { styleUtils } from "../utils";

const Layout = ({ children, sponsors, seo, header, margin, bg, id }) => {
  const navs = [
    {
      name: "about",
      id: "about",
      slug: "about",
    },
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

    {
      name: "youth",
      id: "youth",
      slug: "youth",
    },
    {
      name: "shop",
      id: "shop",
      slug: "shop",
    },
    {
      name: "more",
      id: "more",
      slug: "more",
    },
    { name: "Pay", id: "pay", slug: "pay" },
  ];
  return (
    <div id={id}>
      <Seo seo={seo} />
      <Box display="flex" flexDirection="column" bg={bg}>
        <Nav navs={navs} />
        <Box
          style={{
            [styleUtils.breakpoint("gt", "mobileS")]: {
              marginTop: 150,
            },
          }}
        >
          {header && (
            <Heading m="8" as="h1" size="4xl">
              {header}
            </Heading>
          )}

          {children}
        </Box>
        <Footer navs={navs} sponsors={sponsors} />
      </Box>
    </div>
  );
};

export default Layout;
