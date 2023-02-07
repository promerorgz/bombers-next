import React from "react";
import { HeaderTitle, SectionHeader, StyledSection } from "./styles";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Section = ({ rounded, subtitle, children, titles }) => {
  return (
    <StyledSection rounded={rounded}>
      <SectionHeader>
        {titles.length ? (
          <HeaderTitle>
            <Menu flip>
              <MenuButton rightIcon={<ChevronDownIcon />} as={Button}>
                {titles[0]}
              </MenuButton>
              <MenuList>
                {titles.map((title) => {
                  return <MenuItem key={title}>{title} </MenuItem>;
                })}
              </MenuList>
            </Menu>
            <span className="subtitle">{` ${subtitle}`}</span>
          </HeaderTitle>
        ) : null}
      </SectionHeader>
      {children}
    </StyledSection>
  );
};

export default Section;
