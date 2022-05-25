import React from "react";
import Hero from "../../common/Hero";
import Layout from "../../common/Layout";
import useBp from "../../theme/useBp";

const Youth = () => {
  const [isDesktop] = useBp();

  return (
    <Layout>
      <Hero
        text="Youth Rugby"
        image="/images/nationals17.jpg"
        size={isDesktop ? "md" : "xl"}
      />
    </Layout>
  );
};

export default Youth;
