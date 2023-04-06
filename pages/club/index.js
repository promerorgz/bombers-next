import IndexLayout from "components/IndexLayout";
import Layout from "components/Layout";
import useNav from "hooks/useNav";
import React from "react";

const ClubIndex = () => {
  const { subMenus } = useNav("club");

  return (
    <Layout title="club" seo={{ metaTitle: "Club" }}>
      <IndexLayout items={subMenus}></IndexLayout>
    </Layout>
  );
};

export default ClubIndex;
