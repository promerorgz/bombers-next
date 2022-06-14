import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import Socials from "../common/Socials";
import ContactForm from "../components/Contact/ContactForm";

const contact = () => {
  const props = {
    text: "Contact Us",
    buttons: [],
    image: "images/d1_pic.jpeg",
    size: "lg",
    contentLink: "#form",
  };
  return (
    <Layout seo={{ metaTitle: "Contact Us" }}>
      <Hero {...props}></Hero>
      <Stack p="8" spacing="8" id="form">
        <Heading size="2xl" color="brand.black">
          Any questions or comments? Leave us a message!
        </Heading>
        <ContactForm />
        <Flex justifyContent="center" alignItems="center">
          <Box flexGrow="1" width="70%" m="8">
            <Heading size="lg" color="brand.black">
              Or try us on social media
            </Heading>
          </Box>
        </Flex>
        <HStack justifyContent="center" alignItems="center" spacing="8">
          <Socials color="dark" size="xl" />
        </HStack>
      </Stack>
    </Layout>
  );
};

export default contact;
