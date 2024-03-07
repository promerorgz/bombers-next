import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Nav from "./Navbar";
import Seo from "../common/Seo";
import Hero from "../common/Hero";
import { Sponsors } from "../types/sponsors";
import { PropsWithChildren, useEffect } from "react";
import { SeoType } from "../types/seoTypes";
import randomImage from "../../utils/randomImage";

type LayoutProps = {
  sponsors?: Array<Sponsors>;
  seo: SeoType;
  header?: string;
  subheader?: string;
  bg?: string;
  mainBg?: string;
  id?: string;
  cover?: {
    full?: boolean;
    url: string;
    size?: string;
    alternativeText?: string;
  };
};

const Layout = ({
  children,
  sponsors,
  seo,
  header,
  subheader,
  bg,
  mainBg,
  cover,
  id,
}: PropsWithChildren<LayoutProps>) => {
  const heroSize = useBreakpointValue(["xl", "xl", "2xl", "3xl", "4xl"]);

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      let frame: number;
      return (...params: any) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = `${window.scrollY}`;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
      capture: true,
    });

    // Update scroll position for first time
    storeScroll();
  }, []);

  return (
    <Box id={id} h="100%">
      <Seo seo={seo} />
      <Flex direction="column" bg={bg} id="layout">
        <Nav as="nav" />
        <Box
          id="main"
          as="main"
          h="100%"
          minH="90vh"
          flex="1 0 100%"
          maxH={1200}
          overflowY="scroll"
          bg={mainBg || "brand.light"}
          mt={["100px", 0, "100px", "100px", "100px"]}
        >
          {(header || cover) && (
            <Hero
              parallax
              bg={cover?.url || `/static/${randomImage()}`}
              text={header}
              size={cover.full ? "full" : cover?.size || heroSize}
              direction="row"
              textAlign="flex-start"
              secondaryText={subheader}
            ></Hero>
          )}
          {children}
        </Box>
        <Footer sponsors={sponsors} />
      </Flex>
    </Box>
  );
};

export default Layout;
