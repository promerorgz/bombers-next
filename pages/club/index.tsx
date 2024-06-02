import IndexLayout from "../../src/components/IndexLayout";
import Layout from "../../src/common/Layout";
import useNav from "../../src/hooks/useNav";
import React from "react";

const ClubIndex = () => {
  const { navs } = useNav("club");
  // TODO: reestablish useNav
  // const subMenus = navs[0].subMenus;

  //temporary
  const subMenus = [
    {
      name: "history",
      id: "history",
      slug: "club/history",
      bg: "/static/legends_3.jpeg",
    },
    {
      name: "board",
      id: "board",
      slug: "club/board",
      bg: "",
    },
    {
      name: "youth rugby",
      id: "youth-rugby",
      slug: "club/youth-rugby",
      bg: "/static/jets_mark.jpg",
    },
    // {
    //   name: "bombers career center",
    //   id: "youth-rugby",
    //   slug: "club/career-center",
    //   bg: "",
    // },
  ]

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
