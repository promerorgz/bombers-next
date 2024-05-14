import { Center, Heading, Text, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pic from "../../../src/common/Pic";
import Layout from "../../../src/common/Layout";
import useBp from "../../../theme/useBp";
import { getPosition } from "../../../src/components/Players/utils";
import PlayerInfo from "../../../src/components/Players/PlayerInfo";
import { fetchAPI } from "src/lib/api";

const Player = ({ player }) => {
  const [direction, setDirection] = useState("row");
  const [isDesktop] = useBp();

  useEffect(() => {
    setDirection(isDesktop ? "row" : "column");
  }, [isDesktop]);

  const inQuotes = (string) => (string ? `"${string}"` : "");

  const text = `${player?.first_name} ${inQuotes(player?.nickname)} ${
    player?.last_name
  }`;

  const position = getPosition(player?.position);

  return (
    <Layout
      seo={{ metaTitle: `${player?.first_name} ${player?.last_name}` }}
      header={text}
      subheader={position}
      cover={{
        url: player?.hoverPic?.url,
      }}
    >
      {/* <Hero backButton text={text} /> */}
      <Stack minH="100%" w="100%" bg="brand.light" spacing="0">
        <Stack direction={direction} spacing="4" m="0" bg={"gradient.regular"}>
          <Center flex={1}>
            <Pic
              fit={player?.picture?.size > 3000 ? "cover" : "contain"}
              image={player?.picture}
              size="xl"
            />
          </Center>
          <Center flex={1} p={8} lineHeight={2}>
            <Text
              color="brand.lightSecondary"
              size="lg"
              textTransform="capitalize"
              fontWeight="hairline"
            >
              {player?.bio}
            </Text>
          </Center>
          {player?.bio}
        </Stack>
        <PlayerInfo w="50%" player={player} />
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

    fallback: true,
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
