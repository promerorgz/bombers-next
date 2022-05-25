import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import { PayPalButtons } from "@paypal/react-paypal-js";
import useBp from "../theme/useBp";

const pay = () => {
  const [success, setSuccess] = useState(false);
  const [isDesktop] = useBp();
  const [direction, setDirection] = useState("row");

  const onApprove = (data, actions) => {
    alert(data.subscriptionID);
    setSuccess(true);
  };

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-9NL41251R87142636MDWJ6MI",
    });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "10.00",
          },
        },
      ],
    });
  };

  useEffect(() => {
    setDirection(isDesktop ? "row" : "column");
  }, [isDesktop]);

  return (
    <Layout seo={{ metaTitle: "Pay" }}>
      <Stack minH="100vh" direction={direction} spacing="0">
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
            minH="10%"
            maxH="25%"
          >
            Pay dues below. There is an option to sign up for a monthly
            subscription or you can pay in full
          </Heading>
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
        <Stack minH="100%" w="100%" bg="brand.black" p="8" spacing="8">
          <Heading color="brand.light" size="xl">
            Donations
          </Heading>
          <Heading
            fontFamily="Staatliches"
            fontWeight="300"
            size="md"
            color="brand.medium"
            minH="10%"
            maxH="25%"
          >
            If you would like to donate you can reach out to us or click on the
            paypal below
          </Heading>
          <PayPalButtons
            style={{
              color: "gold",
              layout: "vertical",
              label: "donate",
            }}
            createOrder={createOrder}
            onApprove={onApprove}
          ></PayPalButtons>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default pay;
