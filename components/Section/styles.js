import styled from "@emotion/styled";

export const StyledSection = styled.section`
  position: relative;
  padding: 3.4rem 3.4rem 4.4rem;
  border-radius: ${({ rounded }) => {
    return rounded ? `1.2rem 1.2rem 0 0` : "none";
  }};
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #efefef;
`;

export const SectionHeader = styled.header`
  display: flex;
  margin-bottom: 2.5rem rem;
  text-align: center;
`;

export const HeaderTitle = styled.h3`
  gap: 4px;
  text-align: left;
  flex: 0 0 auto;
  margin-right: 11.8rem;
  margin-bottom: 0;
  font-size: 3.6rem;
  margin-bottom: 2rem;
  color: var(--chakra-colors-brand-medium);
  font-family: var(--chakra-fonts-header-fontFamily);
  font-weight: var(--chakra-fonts-header-fontWeight);
  @supports (-webkit-background-clip: text) or
    (-webkit-text-fill-color: transparent) {
    background: var(--chakra-colors-gradient-background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  }
  span.subtitle {
    font-family: var(--chakra-fonts-header-fontFamily);
    font-weight: 400;
  }
`;

export const Countdown = styled.div``;
