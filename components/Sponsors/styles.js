import styled from "styled-components";

export const SponsorContainer = styled.div`
  height: 10.5rem;
  padding: 0 0.8rem;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  width: 100%;
  background: var(--chakra-colors-gradient-background);
  @media (max-width: 640px) {
    flex-wrap: wrap;
    height: auto;
  }

  .sponsor_image {
    opacity: 0.4;
    margin-left: 2.8rem;
    width: 100px;
    height: 100px;
    @media (max-width: 640px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const SponsorsTitle = styled.h4`
  font-size: 0.8rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 3.6rem;
  padding-right: 2.4rem;
  letter-spacing: 0.1rem;
  border-right: 0.1rem solid hsla(0, 0%, 100%, 0.2);
  white-space: nowrap;
  font-family: "Montserrat", Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  @media (max-width: 640px) {
    border-right: none;
  }
`;

export const SponsorList = styled.div`
  display: flex;
  flex-direction: row;
`;
