import { Heading, Stack } from "@chakra-ui/react";
import Hero from "../common/Hero";
import ContactForm from "../components/Contact/ContactForm";
import Layout from "../components/Layout";

const contact = () => {
  const props = {
    text: "Contact Us",
    buttons: [],
    image: "images/d1_pic.jpeg",
    size: "lg",
  };
  return (
    <Layout seo={{ metaTitle: "Contact Us" }}>
      <Hero {...props}></Hero>
      <Stack p="8" spacing="8">
        <Heading size="xl" color="brand.black">
          Any questions or comments? Leave us a message!
        </Heading>
        <ContactForm />
      </Stack>
    </Layout>
  );
};

export default contact;
