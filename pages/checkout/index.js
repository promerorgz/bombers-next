import Layout from "../../src/components/Layout";
import CheckoutForm from "../../src/components/CheckoutForm";

const DonatePage = () => {
  return (
    <Layout title="Donate with Checkout | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  );
};

export default DonatePage;
