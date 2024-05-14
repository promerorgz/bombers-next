import { SyntheticEvent, useEffect, useState } from "react";
import Tab from "./Tab";
import {
  TabContent,
  TabContentWrapper,
  TabsContainer,
  Tabs as StyledTabs,
} from "./styles";
import { TabsProps } from "./types";

const Tabs = ({ sections, tabList }: TabsProps) => {
  return (
    <TabsContainer>
      <TabsContainer>
        <StyledTabs>
          {tabList.map(({ icon, href, title }, i) => {
            return (
              <Tab
                id={`${title}${i}`}
                icon={icon}
                title={title}
                href={href}
              ></Tab>
            );
          })}
        </StyledTabs>
      </TabsContainer>
      <TabContentWrapper>
        {sections.map(({ title, content }, i) => {
          return (
            <TabContent key={i}>
              <h2>{title}</h2>
              {content}
            </TabContent>
          );
        })}
      </TabContentWrapper>
    </TabsContainer>
  );
};

export default Tabs;
