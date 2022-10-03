import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Layout";
import PlayerList from "../../../components/Players/PlayerList";
import Sponsors from "../../../components/Sponsors";
import { fetchAPI } from "../../../lib/api";

const Players = ({ list, division }) => {
  const routes = [
    { display: "D1", url: "d1" },
    { display: "D3", url: "d3" },
    { display: "Staff", url: "coaches-and-staff" },
    // { display: "Board", url: "board" },
    // { display: "Legends", url: "legends" },
  ];

  const router = useRouter();

  return (
    <>
      <Layout seo={{ metaTitle: router.query.division.toUpperCase() }} margin>
        <Stack direction="horizontal" ml={16}>
          {routes.map(({ url, display }) => {
            const isCurrentRoute = router?.query?.division === url;
            return (
              <Link href={`/team/${url}`} passHref>
                <ChakraLink m={8}>
                  <Text
                    sx={{
                      fontWeight: isCurrentRoute ? 800 : 400,
                    }}
                  >
                    {display}
                  </Text>
                </ChakraLink>
              </Link>
            );
          })}
        </Stack>
        <PlayerList list={list} type={division} />
        <Sponsors />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["/team/d1", "/team/d3", "/team/coaches-and-staff", "/team/alumni"],
    fallback: true,
  };
}

export async function getStaticProps({ params, ...ctx }) {
  const { division } = params;
  const isPlayers = division === "d1" || division === "d3";
  const urlMap = {
    "coaches-and-staff": "/coaches",
    alumni: "/alumni",
  };
  const list = await fetchAPI(
    isPlayers ? `/players?division=${division.toUpperCase()}` : urlMap[division]
  );
  return { props: { list, division } };
}

export default Players;
