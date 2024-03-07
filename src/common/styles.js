import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const offset = "2rem";

export const HeroSlider = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  background: ${(props) => props.theme.main};
`;

export const SlideShow = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: ${offset};
  #slides-main {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      z-index: 100;
    }

    .slide-image {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
      z-index: -1;
    }
  }
  #slides-aux {
    position: relative;
    top: 1.25rem;
    width: 100%;

    .slide-title {
      position: absolute;
      z-index: 300;
      font-size: 4vw;
      font-weight: 700;
      line-height: 1.3;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
    }
  }
`;

export const Info = styled.div`
  position: relative;
  flex: 1;
  padding: ${offset};
  background-color: #fff;
`;

export const FormatMd = styled(Box)`
  margin: 12px auto;
  padding: 12px 24px;
  ol {
    list-style-type: inherit;
  }
  li::marker {
    content: attr("data-icon");
    list-style-type: square;
    font-family: var(--chakra-fonts-menuItem-fontFamily);
    display: inline-block;
    color: var(--chakra-colors-brand-black);
    font-weight: bold;
    font-size: larger;
    margin: 2px;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  row-gap: 16px;
`;

export const FooterImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Copyright = styled(Box)`
  display: grid;
  color: var(--chakra-colors-brand-white);
  ${(props) => ({
    ...props,
  })}
`;

export const FooterLinks = styled.div`
  display: grid;
  align-items: center;
  row-gap: 20px;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  & ul {
    display: grid;
    row-gap: 8px;
    list-style: none;
    align-content: center;

    & li:first-child {
      font-size: 1.25rem;
      color: var(--chakra-colors-brand-light);
      font-weight: bold;
    }
    & li:not(:first-child) {
      color: var(--chakra-colors-brand-white);
      cursor: pointer;
    }
  }
  @media (min-width: 648px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  justify-content: center;

  & svg {
    padding: 0.75rem;
    height: calc(32px + $padding);
    width: calc(32px + $padding);
    padding: $padding;
    border-radius: 50%;
    background-color: #42555f;
    color: var(--chakra-colors-brand-white);
    cursor: pointer;
  }
`;

export const FooterContainer = styled(Box)`
  background: #263238;
  color: #fff;
  /* $text-secondary-clr: #cccccc; */
  width: 100%;
  display: grid;
  row-gap: 2rem;
  padding: 1rem 1.5rem;
  position: relative;

  @media (min-width: 648px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1012px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    padding: 1rem calc((100vw - 1440px) / 2);
  }
`;
