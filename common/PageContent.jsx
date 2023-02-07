import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  background-color: var(--chakra-colors-brand-black);
  padding: 0 1.6rem 0.1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 148rem;
  margin: 0 auto;
  position: relative;
  padding: 0;
  ::before {
    content: "";
    display: block;
  }
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const PageContent = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default PageContent;
