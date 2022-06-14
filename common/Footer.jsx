import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Link as ChakraLink,
  VStack,
  HStack,
  Divider,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Socials from "./Socials";
import Pic from "./Pic";
import Sponsors from "../components/Sponsors";
import Link from "next/link";
import useNav from "../lib/useNav";

const FooterListItem = ({ children, justifyContent, ...props }) => {
  return (
    <Flex
      justifyContent={justifyContent || "flex-start"}
      flexGrow="1"
      w="100%"
      {...props}
    >
      {children}
    </Flex>
  );
};

const Footer = ({ sponsors }) => {
  const { navs } = useNav();
  return (
    <>
      <VStack spacing="4" bg="brand.black" p="4">
        <FooterListItem>
          <Pic
            src="/images/white_logo.png"
            style={{ height: 50, width: 50 }}
            fit="contain"
          />
        </FooterListItem>
        <FooterListItem>
          <Socials size="md" />
        </FooterListItem>
        <FooterListItem>
          <Divider />
        </FooterListItem>
        <FooterListItem>
          <Grid templateColumns="repeat(1, 1fr)" gap={2}>
            {navs?.map((nav) => {
              return (
                <GridItem id={nav.slug}>
                  <Link href={`/${nav?.slug}`} passHref>
                    <ChakraLink
                      fontFamily="Big Shoulders Display"
                      fontSize="xl"
                      fontWeight="bold"
                      textTransform="uppercase"
                      color="brand.light"
                    >
                      {nav.name}
                    </ChakraLink>
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
        </FooterListItem>
        <FooterListItem>
          <Divider />
        </FooterListItem>
        <FooterListItem justifyContent="center">
          {sponsors && <Sponsors sponsors={sponsors} forFooter />}
        </FooterListItem>
      </VStack>
      <Flex
        justifyContent="flex-start"
        bg="brand.medium"
        p="8"
        alignItems="center"
      >
        <HStack
          fontFamily="Big Shoulders Display"
          letterSpacing="wide"
          fontWeight="bold"
          color="brand.light"
        >
          <Text m={0}>Copyright © </Text>
          <Link href="https://stlbombers.com/">
            <ChakraLink color="inherit">
              St. Louis Bombers Rugby Football Club
            </ChakraLink>
          </Link>{" "}
          <Text>
            {new Date().getFullYear()}
            {"."}
          </Text>
        </HStack>
      </Flex>
    </>
  );
};

export default Footer;
