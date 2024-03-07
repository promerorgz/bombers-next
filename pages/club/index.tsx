import IndexLayout from "../../src/components/IndexLayout";
import Layout from "../../src/components/Layout";
import useNav from "../../src/hooks/useNav";
import React from "react";

const ClubIndex = () => {
  const { navs } = useNav("club");
  const subMenus = navs[0].subMenus;

  return (
    <Layout
      header="club"
      seo={{ metaTitle: "Club", metaDescription: "St. Louis Bombers" }}
    >
      <IndexLayout items={subMenus}></IndexLayout>
    </Layout>
  );
};

export default ClubIndex;
