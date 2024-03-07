import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type TabType = {
  id: string;
  title: string;
  href: string;
  icon: IconProp;
};
export type TabSectionType = {
  id: string;
  title: string;
  href: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
};

export type TabsProps = {
  sections: Array<TabSectionType>;
  tabList: Array<TabType>;
};
