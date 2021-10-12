import { Flex, Text, Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import Nav from "./Nav";
import Hero from "./Hero";

const Layout = ({ children, categories, seo, header, margin, bg }) => {
  return (
    <Flex height="100vh" direction="column" bg={bg}>
      <Nav categories={categories} />
      <Box m={margin ? 8 : 0}>
        {header && (
          <Heading mb="8" as="h1" size="4xl">
            {header}
          </Heading>
        )}
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
