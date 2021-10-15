import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../common/Layout";
import Hero from "../common/Hero";
import PaypalButton from "../components/Paypal/paypal-button";
import {
  SimpleGrid,
  Center,
  Text,
  HStack,
  Divider,
  Heading,
  Stack,
  Flex,
  Box,
} from "@chakra-ui/react";
import ContactForm from "../components/Contact/ContactForm";
import Socials from "../common/Socials";

const contact = () => {
  const props = {
    text: "Contact Us",
    buttons: [],
    image: "images/mcb-hero.jpeg",
    size: "md",
  };
  return (
    <Layout>
      <Hero {...props}></Hero>
      <Stack m="8" spacing="8">
        <Heading size="2xl" color="brand.black">
          Any questions or comments? Leave us a message!
        </Heading>
        <ContactForm />
        <Flex justifyContent="space-evenly" alignItems="center">
          <Divider />
          <Box flexGrow="1" width="70%" m="8">
            <Heading size="lg" color="brand.black">
              Or try us on social media
            </Heading>
          </Box>
          <Divider />
        </Flex>
        <HStack justifyContent="center" alignItems="center" spacing="8">
          <Socials color="dark" size="xl" />
        </HStack>
      </Stack>
    </Layout>
  );
};

export default contact;
