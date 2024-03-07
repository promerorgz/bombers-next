import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li``;
const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
