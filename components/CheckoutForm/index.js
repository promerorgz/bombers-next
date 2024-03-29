import React, { useState } from "react";

import CustomDonationInput from "../CustomDonationInput";
import StripeTestCards from "../StripeTestCards";

import getStripe from "../../utils/getStripe";
import { fetchPostJSON } from "../../utils/apiHelpers";
import { formatAmountForDisplay } from "../../utils/stripeHelpers";

export const config = {
  CURRENCY: "usd",
  // Set your amount limits: Use float for decimal currencies and
  // Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
  MIN_AMOUNT: 10.0,
  MAX_AMOUNT: 5000.0,
  AMOUNT_STEP: 5.0,
};

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: input.customDonation,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomDonationInput
        className="checkout-style"
        name={"customDonation"}
        value={input.customDonation}
        min={config.MIN_AMOUNT}
        max={config.MAX_AMOUNT}
        step={config.AMOUNT_STEP}
        currency={config.CURRENCY}
        onChange={handleInputChange}
      />
      <StripeTestCards />
      <button
        className="checkout-style-background"
        type="submit"
        disabled={loading}
      >
        Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
      </button>
    </form>
  );
};

export default CheckoutForm;
