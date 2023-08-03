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
  ];

  const router = useRouter();

  return <>
    <Layout
      seo={{ metaTitle: router?.query?.division?.toUpperCase() }}
      margin
    >
      <Stack
        direction="horizontal"
        gap={3}
        overflowX="scroll"
        bg="brand.white"
        position="relative"
        padding="24px 8px 0"
        maxW="100%"
      >
        {routes.map(({ url, display }) => {
          const isCurrentRoute = router?.query?.division === url;
          return (
            <Link href={`/team/${url}`} passHref legacyBehavior>
              <ChakraLink
                px="8"
                borderRadius=".2rem"
                color="brand.medium"
                bg="brand.white"
                _active={{
                  textDecoration: "none",
                }}
                sx={{
                  minWidth: 120,
                  maxWidth: 120,
                  textAlign: "center",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "1.2rem",
                  padding: "2px 8px",
                  transition: "background-color .2s ease, color .2s ease",
                  zIndex: 10,
                }}
              >
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
  </>;
};

export async function getStaticPaths() {
  return {
    paths: ["/team/d1", "/team/d3", "/team/coaches-and-staff"],
    fallback: false,
  };
}

export async function getStaticProps({ params, ...ctx }) {
  const { division } = params;
  const isPlayers = division === "d1" || division === "d3";

  const list = await fetchAPI(
    isPlayers ? `/players?division=${division.toUpperCase()}` : `/${division}`
  );
  return {
    props: { list, division },
  };
}

export default Players;
