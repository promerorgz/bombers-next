import React from "react";
import { HeroContainer, PlayerName, PlayerPic } from "./styles";

const PlayerBanner = (props) => {
  return (
    <HeroContainer>
      <PlayerName>{props.name || "name"}</PlayerName>
      <PlayerPic>
        <picture>
          <source srcSet="/" media="yea sorry meyearighttgbiegegewg" />
        </picture>
      </PlayerPic>
    </HeroContainer>
  );
};

export default PlayerBanner;
