import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 68vh;
  min-height: 35rem;
  position: relative;
  background: var(--chakra-color-background);
  overflow: hidden;
  box-shadow: 0 0.4rem 1.2rem 0 rgb(0 0 0 / 40%);
  display: flex;
  a {
    background-color: transparent;
  }
  img {
    border: 0;
  }
  @media (max-width: 1025px) {
    flex-wrap: wrap;
  }
`;

export const HeroTile = styled.a`
  height: 100%;
  position: relative;
  display: block;
  text-decoration: none;
  box-shadow: 0 0.4rem 1.2rem 0 rgb(0 0 0 / 40%);
  cursor: pointer;
  overflow: hidden;
  transition: width 0.3s;

  :active {
    outline: 0;
  }

  &.hero_tile__large {
    width: 100%;
    flex: 1 0 100%;
  }

  &.hero_tile__small {
    width: 50%;
    flex: 1 0 50%;
  }
  @supports (transition: flex) {
    will-change: flex;
    transition: flex 0.3s;
  }

  @media (max-width: 1025px) {
    height: 50%;

    .hero_tile__description {
      .description {
        display: none;
      }
      opacity: 1;
      max-height: 10rem;
      transition: opacity 0.6s 0.1s, max-height 0.6s;
    }
  }
  @media (min-width: 1025px) {
    width: 25%;
    :hover {
      width: 50%;
      .hero_tile__title {
        transform: scale(2);
        transition-delay: 0.1s;
        font-weight: bold;
      }
      .hero_tile__description {
        opacity: 1;
        max-height: 10rem;
        transition: opacity 0.6s 0.1s, max-height 0.6s;
      }
    }
  }

  @media (min-width: 1025px) {
    @supports (transition: flex) {
      flex: 1 0 25%;
      :hover {
        flex: 1 0 50%;
      }
      .is-active {
        flex: 1 0 50%;
      }
    }
  }

  // XL Screens
  @media (min-width: 1280px) {
    width: 20%;
    :hover {
      width: 60%;
    }
    .is-active {
      width: 60%;
    }
  }

  @media (min-width: 1280px) {
    @supports (transition: flex) {
      flex: 1 0 20%;
      :hover {
        flex: 1 0 60%;
      }
      .is-active {
        flex: 1 0 60%;
      }
    }
  }
`;

export const HeroTileImageContainer = styled.picture`
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

export const HeroTileGradient = styled.div`
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  top: 50%;
  left: -1px;
  right: -1px;
  z-index: 10;
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
      0deg,
      var(--chakra-colors-brand-black) 6rem,
      rgba(8, 14, 31, 0)
    );
  }
`;

export const HeroTitleExplainer = styled.div`
  display: block;
  position: absolute;
  bottom: 2.4rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 51;
  color: #fff;
`;

export const HeroTileTitle = styled.h4`
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #fff;
  transition: transform 0.2s;
  transform-origin: bottom;
  font-size: 1.1rem;
  line-height: 1.1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 0 2rem;
  font-weight: bold;

  @media (min-width: 1025px) {
    width: 20vw;
  }
`;

export const HeroTileDescription = styled.div`
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
  }
`;

export const HeroTileMeta = styled.div`
  text-align: center;
  color: #fff;
`;

export const HeroTileMetaData = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  margin-top: 1rem;
  padding: 0 1rem;
  @media (max-width: 1025px) {
    margin: 0;
  }
`;

export const ContentTag = styled.div`
  color: var(--chakra-colors-brand-highlight);
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  flex: none;
  margin-right: 1rem;
  ::before {
    margin: 0 0.4rem;
    content: "";
    display: inline-block;
    margin-right: 0.7rem;
    width: 0.7rem;
    height: 0.7rem;
    background-color: var(--chakra-colors-brand-highlight);
  }
`;

export const ContentTime = styled.time`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  .contentTimeIcon {
    display: inline-block;
    vertical-align: middle;
    margin-top: 0.1rem;
    margin-right: 0.4rem;
    fill: #fff;
  }
  .contentTimeDate {
    fill: #fff;

    text-align: right;
  }
`;
