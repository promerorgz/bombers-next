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
