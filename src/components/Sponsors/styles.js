import styled from "styled-components";

export const SponsorContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 10.5rem;
  padding: 2rem 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  align-items: center;
  width: 100%;
  background: var(--chakra-colors-brand-white);
  @media (max-width: 640px) {
    flex-wrap: nowrap;
    height: auto;
  }

  .sponsor_image {
    /* opacity: 0.4; */
    width: 100px;
    height: 100px;
    @media (max-width: 640px) {
      /* width: 40px; */
      /* height: 40px; */
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
  justify-content: space-evenly;
  gap: 2.4rem;
`;
