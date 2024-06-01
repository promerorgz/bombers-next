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
      name: "Latest",
      id: "articles",
      slug: "articles",
    },
    {
      name: "Schedule",
      id: "schedule",
      slug: "schedule",
    },
    {
      name: "Club",
      id: "club",
      slug: "club",
      subMenus: [
        {
          name: "History",
          id: "history",
          slug: "club/history",
          bg: "/static/legends_3.jpeg",
        },
        {
          name: "Board",
          id: "board",
          slug: "club/board",
          bg: "",
        },
        {
          name: "Youth Rugby",
          id: "youth-rugby",
          slug: "club/youth-rugby",
          bg: "/static/jets_mark.jpg",
        },
        // {
        //   name: "bombers career center",
        //   id: "youth-rugby",
        //   slug: "club/career-center",
        //   bg: "",
        // },
      ],
    },

    {
      name: "Team",
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
          name: "Practice",
          id: "practice",
          slug: "practice",
        },
      ],
    },
    {
      name: "Contact",
      id: "contact",
      slug: "contact",
    },
    {
      name: "Donate",
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
