import React from "react";
import Layout from "../../../src/common/Layout";
import PlayerList from "../../../src/components/Players/PlayerList";
import Sponsors from "../../../src/components/Sponsors";
import { fetchAPI } from "../../../src/lib/api";
import { startCase } from "lodash";

const Players = ({ list, division }) => {
  const covers = {
    d1: "/static/d1_team.jpeg",
    d3: "/static/d3TeamPhoto.JPG",
    "coaches-and-staff": "/static/coach_pic1.jpeg",
    legends: "/static/jk_legends_pic.jpeg",
  };
  return (
    <>
      <Layout
        header={`Bombers ${startCase(division)}`}
        cover={{
          url: covers[division],
          size: "xl",
          alternativeText: `${division} team pic`,
        }}
        seo={{ metaTitle: division }}
        margin
      >
        <PlayerList list={list} type={division} />
        <Sponsors />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/team/d1", "/team/d3", "/team/coaches-and-staff"],
    fallback: false,
  };
}

export async function getStaticProps({ params, ...ctx }) {
  const { division } = params;

  const list = await fetchAPI(
    ["d1", "d3"].includes(division)
      ? `/players?division=${division.toUpperCase()}`
      : `/coaches`
  );
  return {
    props: { list, division },
  };
}

export default Players;
