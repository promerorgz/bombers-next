import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  background-color: var(--chakra-colors-brand-light);
  box-shadow: var(--chakra-colors-shadow-1);
  margin: 10px;
`;

export const TabContentWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  height: auto;
  color: var(-chakra-colors-brand-medium);
  transition: all 0.45s ease-in-out;
  padding: 12px 24px;
`;

export const TabContent = styled.section`
  display: block;
  font-size: 1rem;
  padding: 24px 8px;
  width: 400px;
  height: 540px;
  transition: all 0.45s ease-in-out;

  h2 {
    color: var(--chakra-colors-brand-medium);
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 8px;
  }
  img {
    max-width: 300px;
    width: 80%;
    flex-grow: 1;
  }
`;

export const Tabs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  a {
    position: relative;
    display: flex;
    text-decoration: none;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: var(--chakra-colors-brand-medium);
    overflow: hidden;
    text-align: left;
    justify-content: start;
    height: 90px;
    padding: 0px 24px;
    width: 350px;
    align-items: center;
    gap: 16px;
  }
  a img {
    height: 20px;
    width: 20px;
  }
  a svg {
    width: 36px;
    height: 36px;
    stroke: var(--chakra-colors-brand-medium);
  }

  .active,
  a:hover {
    font-weight: 700;
    outline: none;
    color: var(--chakra-colors-brand-light);
    border-right: 3px solid var(--chakra-colors-brand-light);
  }

  .active svg,
  a:hover svg {
    stroke: var(--chakra-colors-brand-light);
  }
`;
