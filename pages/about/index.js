import React from "react";
import Hero from "../../common/Hero";
import Layout from "../../components/Layout";
import useBp from "../../theme/useBp";

const About = () => {
  const [isDesktop] = useBp();

  return (
    <Layout>
      <Hero text="St Louis Bombers History" size={isDesktop ? "md" : "xl"} />
    </Layout>
  );
};

export default About;
