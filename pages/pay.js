import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import PaypalButton from "../components/Paypal/paypal-button";
import { PayPalButtons } from "@paypal/react-paypal-js";

const pay = () => {
  const [success, setSuccess] = useState(false);

  const onApprove = (data, actions) => {
    alert(data.subscriptionID);
    setSuccess(true);
  };

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-9NL41251R87142636MDWJ6MI",
    });
  };

  return (
    <Layout>
      <Flex minH="100vh">
        <Stack minH="100%" w="100%" bg="brand.medium" p="8" spacing="8">
          <Heading color="brand.light" size="xl">
            Current Players
          </Heading>
          <Heading
            color="brand.light"
            fontFamily="Staatliches"
            fontWeight="300"
            size="md"
            color="brand.black"
          >
            Pay dues below. There is an option to sign up for a monthly
            subscription or you can pay in full
          </Heading>
          {false && <PaypalButton />}
          <PayPalButtons
            style={{
              color: "blue",
              layout: "vertical",
              label: "subscribe",
            }}
            createSubscription={createSubscription}
            onApprove={onApprove}
          ></PayPalButtons>
        </Stack>
        <Box minH="100%" w="100%" bg="brand.black">
          hello
        </Box>
      </Flex>
    </Layout>
  );
};

export default pay;
