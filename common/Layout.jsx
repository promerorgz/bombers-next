import { Box, Heading } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";
import Seo from "./Seo";

const Layout = ({ children, sponsors, seo, header, margin, bg, id }) => {
  return (
    <div id={id}>
      <Seo seo={seo} />
      <Box display="flex" flexDirection="column" bg={bg}>
        <Nav />
        <Box>
          {header && (
            <Heading m="8" as="h1" size="4xl">
              {header}
            </Heading>
          )}

          {children}
        </Box>
        <Footer sponsors={sponsors} />
      </Box>
    </div>
  );
};

export default Layout;
