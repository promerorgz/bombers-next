import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
