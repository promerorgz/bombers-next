import React from "react";
import Layout from "../src/common/Layout";
import ContactForm from "../src/components/Contact/ContactForm";
import { Heading, Stack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Layout
      header="Contact Us"
      cover={{
        url: "/static/d1_team.jpeg",
        alternativeText: "contact page team image",
      }}
      seo={{ metaTitle: "Contact Us", metaDescription: "Contact the club" }}
    >
      <Stack p="8" spacing="8" maxW="5xl" m="auto">
        <Heading size="xl" color="brand.black">
          Any questions or comments? Leave us a message!
        </Heading>
        <ContactForm />
      </Stack>
    </Layout>
  );
};

export default Contact;
