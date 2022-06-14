import { Center, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Hero from "../../../common/Hero";
import Layout from "../../../common/Layout";
import Pic from "../../../common/Pic";
import useBp from "../../../theme/useBp";
import { getPosition } from "../../../components/Players/utils";
import PlayerInfo from "../../../components/Players/PlayerInfo";
import { fetchAPI } from "lib/api";
import BgImage from "common/BgImage";

const Player = ({ player }) => {
  const router = useRouter();
  const [direction, setDirection] = useState("row");
  const [isDesktop] = useBp();

  useEffect(() => {
    setDirection(isDesktop ? "row" : "column");
  }, [isDesktop]);

  const inQuotes = (string) => (string ? `"${string}"` : "");

  const playerBg = `linear-gradient(315deg, #404040 0%, #212121 74%)`;
  const text = `${player?.first_name} ${inQuotes(player?.nickname)} ${
    player?.last_name
  }`;
  const startPic = player?.picture?.url
    ? player?.picture?.url
    : "/images/defaultpic.png";

  return (
    <Layout seo={{ metaTitle: `${player?.first_name} ${player?.last_name}` }}>
      <Hero
        backButton
        text={text}
        secondaryText={getPosition(player?.position)}
        size="sm"
        startPic={startPic}
        bg={playerBg}
        direction={direction}
      />
      <Stack minH="100%" w="100%" bg="brand.light" spacing="0">
        <Center bg="brand.black" w="100%" p="8">
          <Heading as="quote" color="brand.light">
            {inQuotes(player?.bio)}
          </Heading>
        </Center>
        <Stack direction={direction} spacing="4" m="0" id="kkck">
          <Center w="50%">
            <BgImage src={player?.hoverPic?.url} />
          </Center>
          <PlayerInfo w="50%" player={player} />
        </Stack>
      </Stack>
    </Layout>
  );
};

export async function getStaticPaths() {
  const players = await fetchAPI("/players");
  return {
    paths: players.map((player) => ({
      params: {
        division: player?.division?.toString().toLowerCase() || "d1",
        slug: player?.slug || "shawn-caradine",
      },
    })),

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [player] = (await fetchAPI(`/players?slug=${params.slug}`)) || {};
  return {
    props: { player },
    revalidate: 60,
  };
}

export default Player;
