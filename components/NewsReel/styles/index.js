import { Link, Text } from "@chakra-ui/react";
import styled from "styled-components";
import vars from "../../../theme/themeVariables";

export { default as HeroTileTitle } from "./HeroTileTitle";
export { default as HeroTile } from "./HeroTile";

export const HeroTileImageContainer = styled.div`
  height: calc(100% - 6rem);
  position: relative;
  display: block;
  overflow: hidden;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(24, 23, 51, 0.6);
    will-change: opacity;
    transition: opacity 0.2s ease;
  }
  .lazy-load {
    opacity: 0;
  }
  .loaded {
    opacity: 1;
  }
  @media (max-width: 1025px) {
    height: 80%;
    :focus {
      color: #fdc52c;
    }
  }
`;

export const HeroTileImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  font-family: "object-fit: cover; object-position: center";
`;

export const HeroTileExplainer = styled.div`
  display: block;
  position: absolute;
  bottom: 2.4rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 20;
  color: #fff;
  @media (max-width: 400px) {
    bottom: 1.2rem;
  }
`;

export const HeroTileDescription = styled.p`
  max-width: 44rem;
  max-height: 0;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 1rem;
  opacity: 0;
  will-change: opacity, max-height, transform;
  transition: opacity 0.3s 0s, max-height 0.3s;
  ::before {
    content: "";
    display: block;
    height: 1rem;
  }
  @media (min-width: 1025px) {
    opacity: 1;
    max-height: 10rem;
    transition: opacity 0.6s 0.1s, max-height 0.6s;
    color: #fdc52c;
  }
`;

export const HeroTileDescription_hover = [
  { maxHeight: "10rem", transition: "opacity .6s .1s,max-height .6s" },
];

export const HeroTileGradient = styled.div`
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  top: 50%;
  left: -1px;
  right: -1px;
  background: linear-gradient(
    0deg,
    var(--chakra-colors-brand-black) 6rem,
    rgba(8, 14, 31, 0)
  );
  will-change: top;
  transition: top 0.2s;
  @media (min-width: 1025px) {
    top: 20%;
  }
  @media (max-width: 1025px) {
    top: -1px;
    background: linear-gradient(
      180deg,
      rgba(8, 14, 31, 0),
      #080e1f 80%,
      #080e1f
    );
  }
`;

export const HeroTileGradient_hover = [{ top: "20%", zIndex: 20 }];

export const HeroTileMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-size: 1.1rem;
  margin-top: 1rem;
  padding: 0 1rem;
  ${(props) => ({ ...props })}
  @media (max-width: 400px) {
    font-size: 1rem;
  }
  .dateTag {
    text-align: center;
    color: var(--chakra-colors-brand-meta);
    margin-right: 8px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-align: right;
    font-size: small;
    ::before {
      font-family: var(--fa-style-family-classic);
      content: "\f017";
      font-weight: 900;
      display: inline-block;
      margin: 0 0.4rem 0 0;
      margin-right: 8px;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }
  }

  .categoryTag {
    text-align: center;
    color: var(--chakra-colors-brand-highlight);
    margin-right: 8px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: right;
    font-size: small;

    ::before {
      content: "";
      border-radius: 10%;
      margin: 0 0.4rem 0 0;
      background-color: var(--chakra-colors-brand-highlight);
      display: inline-block;
      margin-right: 6px;
      width: 10px;
      height: 10px;
    }
    @media (max-width: 640px) {
      display: none;
    }
  }
`;

export const CarouselHero = styled.div`
  height: 68vh;
  min-height: 35rem;
  position: relative;
  background: var(--chakra-brand-medium);
  overflow: hidden;
  box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.4);
  display: flex;
  @media (max-width: 1025px) {
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  @keyframes p {
    0% {
      transform: scale3d(1.15, 1.15, 1.15);
    }

    to {
      transform: scaleX(1);
    }
  }
  main {
    display: block;
  }
  margin-top: 200px;
  opacity: 1;
  transform-origin: center;
  transition: transform 0.5s ease-out, opacity 0.4s ease-in, top 0.4s ease-out;
  z-index: 30;
`;
