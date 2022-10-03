import { Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default styled(Text)`
  margin: 0 auto 1.2rem;
  max-width: 100%;
  font-size: 3.5rem;
  line-height: 3.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  @supports (-webkit-background-clip: text) or
    (-webkit-text-fill-color: transparent) {
    background: linear-gradient(
      90deg,
      var(--chakra-colors-brand-superblack),
      var(--chakra-colors-brand-black)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
`;

export const ArticleSummary = styled(Text)`
  margin: 0 auto 4rem;
  max-width: 66.8rem;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: lighter;
`;
