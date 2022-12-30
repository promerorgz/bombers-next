import { Box, Flex, Heading } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Nav from "../components/Navbar";
import Seo from "../common/Seo";

const Layout = ({
  children,
  sponsors,
  seo,
  header,
  margin,
  bg,
  mainBg,
  id,
}) => {
  return (
    <Box id={id} h="100%">
      <Seo seo={seo} />
      <Flex direction="column" bg={bg} id="layout">
        <Nav as="nav" />
        <Box
          id="main"
          as="main"
          h="100%"
          flex="1 0 100%"
          bg={mainBg || "brand.light"}
          mt={[100, "80px", "80px", 200]}
        >
          {header && (
            <Heading m="8" as="h1" size={["2xl", "xl", "2xl", "3xl", "4xl"]}>
              {header}
            </Heading>
          )}
          {children}
        </Box>
        <Footer sponsors={sponsors} as="footer" id="footer" />
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
