import Link from "../../../common/Link";
import styled from "styled-components";

export const heroTileHoverStylesDefault = {
  zIndex: 20,
};

export const heroTileStyleDefault = {};

export const heroTileHoverStylesLg = {
  ...heroTileHoverStylesDefault,
  width: "50%",
  maxWidth: "50%",
  transform: "scale(2)",
  transitionDelay: "0.2s",
  opacity: 1,
  transition: "opacity 0.6s 0.1s, max-height 0.6s",
  top: "20%",
  flex: "1 0 50%",
};

export const heroTileHoverStylesXl = {
  ...heroTileHoverStylesDefault,
  width: "60%",
  flex: "1 0 60%",
};

export const heroTileStylesXs = {
  marginBottom: "0.4rem",
  fontSize: "0.8rem",
  padding: "0.2rem 0.8rem 0.2rem 0",
  marginLeft: "0.4rem",
  width: "5rem",
};

export const heroTileStylesSm = {
  display: "none",
  fontSize: "1.1rem",
};

export const heroTileStylesMd = {
  order: 2,
  width: "50%",
  flex: "1 0 50%",
  fontSize: "1.8rem",
};

export const heroTileStylesLg = {
  width: "25%",
  minWidth: "25%",
  flex: "1 0 25%",
};
export const heroTileStylesXl = {
  width: "20%",
  minWidth: "20%",
  flex: "1 0 20%",
};
export const heroTileStylesXl_large = {
  width: "20%",
  flex: "1 0 20%",
};

export const HeroTileSx = [
  heroTileStylesXs,
  heroTileStylesSm,
  heroTileStylesMd,
  heroTileStylesLg,
  heroTileStylesXl,
];

export const HeroTile_hover = [
  heroTileHoverStylesDefault,
  heroTileHoverStylesDefault,
  heroTileHoverStylesDefault,
  heroTileHoverStylesDefault,
  heroTileHoverStylesLg,
  heroTileHoverStylesXl,
];
export default styled(Link)`
  height: 100%;
  position: relative;
  display: block;
  text-decoration: none;
  box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  overflow: hidden;
  transition: width 0.3s;
  will-change: flex;
  transition: flex 0.3s;
  min-width: 25%;
  max-width: 50%;

  .disabled {
    pointer-events: none;
  }
`;
