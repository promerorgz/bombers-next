import { Text } from "@chakra-ui/react";
import styled from "styled-components";
import vars from "../../../theme/themeVariables";

export const HeroTileTitleStylesXs = {
  fontSize: "1.8rem",
  padding: "0 0.8rem",
};
export const HeroTileTitleStylesSm = {
  fontSize: "1.8rem",
};

export const HeroTileTitleStylesMd = {
  color: vars.color.highlight,
};

export const HeroTileTitleStylesLg = {
  maxWidth: "60rem",
  fontSize: "2.2rem",
  willChange: "color",
  transition: "color 0.2s",
};

export const HeroTileTitleStylesXl = {
  width: "20vw",
  transform: "scale(2)",
  transitionDelay: "0.1s",
  flex: "1 0 25%",
};

export const HeroTileTitleSx = [
  {},
  HeroTileTitleStylesXs,
  HeroTileTitleStylesSm,
  HeroTileTitleStylesMd,
  HeroTileTitleStylesLg,
  HeroTileTitleStylesXl,
];

export const HeroTileTitle_hover = [
  {
    margin: "0 auto",
    fontFamily: '"Montserrat",  sans-serif',
    fontWeight: "bold",
    color: "white",
    transition: "transform 0.5s",
    transformOrigin: "bottom",
    fontSize: "var(--chakra-fontSizes-md)",
    lineHeight: "1.1",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    padding: "0 2rem",
    transform: "scale(2)",
    transitionDelay: ".1s",
    zIndex: 30,
  },
];

export default styled(Text)`
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: ${vars.color.white};
  transition: transform 0.2s;
  transform-origin: bottom;
  font-size: var(--chakra-fontSizes-md);
  line-height: 1.1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 0 2rem;
`;
