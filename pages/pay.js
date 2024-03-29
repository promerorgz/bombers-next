/* eslint-disable no-unused-vars */
import { Heading, Stack } from "@chakra-ui/react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Layout from "components/Layout";
import DonateButton from "components/Pay/DonateButton";
import React, { useEffect, useState } from "react";
import useBp from "theme/useBp";

const Pay = () => {
  const [_success, setSuccess] = useState(false);

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

          <DonateButton onApprove={onApprove}></DonateButton>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Pay;
