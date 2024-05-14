import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

const Container = styled.div`
  min-height: 80vh;
  height: 100%;
  background-color: var(
    ${(props: PageContentProps) =>
      props.darkMode
        ? "--chakra-colors-brand-dark"
        : "--chakra-colors-brand-light"}
  );
`;

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 148rem; */
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

type PageContentProps = {
  darkMode?: boolean;
};
const PageContent = ({
  children,
  darkMode,
}: PropsWithChildren<PageContentProps>) => {
  return (
    <Container darkMode={darkMode}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default PageContent;
