import { formatAmountForStripe } from "../../../utils/stripeHelpers";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

console.log({ stripe });
export const config = {
  CURRENCY: "usd",
  // Set your amount limits: Use float for decimal currencies and
  // Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
  MIN_AMOUNT: 10.0,
  MAX_AMOUNT: 5000.0,
  AMOUNT_STEP: 5.0,
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const amount = req.body.amount;
    console.log({ amount });
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= config.MIN_AMOUNT && amount <= config.MAX_AMOUNT)) {
        throw new Error("Invalid amount.");
      }
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: "donate",
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Custom amount donation",
            amount: formatAmountForStripe(amount, config.CURRENCY),
            currency: config.CURRENCY,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/donate-with-checkout`,
      };
      console.log({ params });
      const checkoutSession = await stripe.checkout.sessions.create(params);

      console.log({ checkoutSession });
      res.status(200).json(checkoutSession);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
