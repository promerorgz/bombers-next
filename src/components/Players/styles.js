const { default: styled } = require("styled-components");

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
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const PlayerName = styled.span`
  opacity: 1;
  transform: translateX(-55%) translateY(0);
  @supports (-webkit-background-clip: text) or
    (-webkit-text-fill-color: transparent) {
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 93%, 0.2),
      hsla(0, 0%, 100%, 0) 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
  font-family: "Big Shoulders Display", Arial, "Helvetica Neue", Helvetica,
    sans-serif;
  font-weight: 400;
  font-size: 3000%;
  font-size: 30vw;
  font-style: italic;
  color: hsla(0, 0%, 100%, 0.1);
  position: absolute;
  line-height: 0.6;
  top: 2rem;
  left: 50%;
  text-transform: uppercase;
  padding: 0 3%;
  opacity: 0;
  transform: translateX(-55%) translateY(2rem);
  transition: opacity 0.5s, transform 0.5s;
`;

export const PlayerPic = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 50%;
  height: 100%;
  width: 100%;

  @media (max-width: 640px) {
    position: relative;
    max-width: 20rem;
    margin: 0 auto;
  }
  @media (max-width: 840px) {
    position: relative;
    max-width: 30rem;
    margin: 0 auto;
  }

  @media (max-width: 1025px) {
    left: 2rem;
    max-width: 47%;
  }
`;
