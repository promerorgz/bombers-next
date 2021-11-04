import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Link,
  VStack,
  HStack,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Socials from "./Socials";
import Pic from "./Pic";
import Sponsors from "../components/Sponsors";

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

const Footer = ({ navs = [], sponsors }) => {
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
        {navs?.map((nav) => {
          return (
            <FooterListItem key={nav.name}>
              <Link
                fontFamily="Big Shoulders Display"
                fontSize="xl"
                fontWeight="bold"
                textTransform="uppercase"
                color="brand.light"
              >
                {nav.name}
              </Link>
            </FooterListItem>
          );
        })}
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
          <Link color="inherit" href="https://stlbombers.com/">
            St. Louis Bombers Rugby Football Club
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
