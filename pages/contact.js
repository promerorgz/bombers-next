import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../common/Layout";
import Hero from "../common/Hero";
import PaypalButton from "../components/Paypal/paypal-button";
import { SimpleGrid, Center, Text } from "@chakra-ui/react";

const contact = () => {
  return (
    <Layout>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
        }}
        spacing={8}
        m="0"
        p="8"
        // bg="gray.light"
        height="100%"
      >
        <Text fontSize="4xl" textTransform="uppercase">
          CONTACT US
        </Text>
        {/* <ContactForm /> */}
      </SimpleGrid>
    </Layout>
  );
};

export default contact;
