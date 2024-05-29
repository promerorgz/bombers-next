import { fetchAPI } from "../lib/api";
import { useState, useEffect } from "react";

export type NavItem = {
  name: string;
  id: string;
  slug: string;
  subMenus?: Array<NavItem>;
  hide?: boolean;
};

type DefaultNavs = {
  navs: Array<NavItem>;
  subMenus?: Array<NavItem>;
  shortest: number;
};

function useNav(type?: undefined | String | Array<string>): DefaultNavs {
  const [dynamicPages, setDynamicPages] = useState([]);

  useEffect(() => {
    fetchAPI("/pages")
      .then((value) => {
        if (!value) setDynamicPages([]);
        setDynamicPages(value);
      })
      .catch((err) => console.error(err));
  }, []);

  const baseNavs = [
    {
      name: "latest",
      id: "articles",
      slug: "articles",
    },
    {
      name: "schedule",
      id: "schedule",
      slug: "schedule",
    },
    {
      name: "club",
      id: "club",
      slug: "club",
      subMenus: [
        {
          name: "history",
          id: "history",
          slug: "club/history",
          bg: "/static/legends_3.jpeg",
        },
        {
          name: "board",
          id: "board",
          slug: "club/board",
          bg: "",
        },
        // {
        //   name: "youth rugby",
        //   id: "youth-rugby",
        //   slug: "club/youth-rugby",
        //   bg: "/static/jets_mark.jpg",
        // },
        // {
        //   name: "bombers career center",
        //   id: "youth-rugby",
        //   slug: "club/career-center",
        //   bg: "",
        // },
      ],
    },

    {
      name: "team",
      id: "team",
      slug: "team",
      subMenus: [
        {
          name: "Division I",
          id: "d1",
          slug: "team/d1",
        },
        {
          name: "Division III",
          id: "d3",
          slug: "team/d3",
        },
        {
          name: "Coaches and Staff",
          id: "coaches-and-staff",
          slug: "team/coaches-and-staff",
        },
        {
          name: "practice",
          id: "practice",
          slug: "practice",
        },
        {
          name: "schedule",
          id: "practice",
          slug: "practice",
        },
        {
          name: "results",
          id: "practice",
          slug: "practice",
        },
      ],
    },
    {
      name: "contact",
      id: "contact",
      slug: "contact",
    },
    {
      name: "donate",
      id: "donate",
      slug: "pay",
    },
  ];

  const navs = baseNavs.reduce<NavItem[]>((acc, nav) => {
    const newPages = dynamicPages.map((page) => {
      const mapPageToNav = {
        name: page.title,
        id: page.slug,
        slug: `${page.parent}/${page.slug}`,
        bg: page.Seo.ShareImage,
      };
      
      if (nav.name === page.parent) {
        nav.subMenus.push(mapPageToNav);
        return nav;
      }
      return nav;
    });
    return [...acc, ...newPages];
  }, []);

  const singleType = typeof type === "string";

  const getByType = (nav: NavItem) =>
    singleType ? nav.name === type : type.includes(nav.name);

  return {
    navs: type ? navs.filter(getByType) : navs,
    shortest: navs
      .sort((a, b) => a.subMenus?.length - b.subMenus?.length)
      .map((item) => item.subMenus?.length || 0)
      .filter((i) => i)[0],
  };
}

export default useNav;
