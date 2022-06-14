import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";

const DonateButton = ({ onApprove }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [donationAmount, setDonationAmount] = useState("10");
  const [customAmount, setCustomAmount] = useState(0);
  const [value, setValue] = useState(10);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: { ...options, intent: "capture" },
    });
  }, []);

  useEffect(() => {
    setValue(donationAmount === "custom" ? customAmount : donationAmount);
  }, [donationAmount, customAmount]);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value,
                },
              },
            },
            items: [
              {
                name: "Donation to St. Louis Bombers",
                quantity: "1",
                unit_amount: {
                  currency_code: "USD",
                  value,
                },
                category: "DONATION",
              },
            ],
          },
        ],
      })
      .then((orderId) => orderId);
  };

  const handleChange = (value) => setDonationAmount(value);
  const handleCustomAmount = (e) => {
    e.preventDefault();
    setCustomAmount(e.currentTarget.value);
    setDonationAmount("custom");
  };

  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        color="brand.light"
        alignItems="center"
      >
        <RadioGroup
          defaultValue={10}
          value={donationAmount}
          onChange={handleChange}
        >
          <SimpleGrid direction="row" spacing={4} columns={[3, 3, 3, 5]}>
            <Radio value={"10"}>$10</Radio>
            <Radio value={"20"}>$20</Radio>
            <Radio value={"50"}>$50</Radio>
            <Radio value={"100"}>$100</Radio>
            <Radio value={"custom"}>
              <InputGroup size="sm" ml="4" borderRadius="8">
                <InputLeftAddon
                  children="$"
                  bg="brand.medium"
                  color="brand.light"
                />
                <Input
                  w="60%"
                  type="number"
                  placeholder="enter amount"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  color="brand.light"
                ></Input>
              </InputGroup>
            </Radio>
          </SimpleGrid>
        </RadioGroup>
      </Flex>
      <PayPalButtons
        forceReRender={[value]}
        style={{
          color: "gold",
          layout: "vertical",
          label: `donate`,
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      ></PayPalButtons>
    </>
  );
};

export default DonateButton;
