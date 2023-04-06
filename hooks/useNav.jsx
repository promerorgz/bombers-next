import { fetchAPI } from "../lib/api";
import { useState, useEffect } from "react";

const useNav = (type = null) => {
  const [more, setMore] = useState([]);

  useEffect(() => {
    fetchAPI("/pages")
      .then((value) => {
        setMore(value);
      })
      .catch((err) => console.error(err));
  }, []);

  const navs = [
    {
      name: "articles",
      id: "articles",
      slug: "articles",
    },
    {
      name: "club",
      id: "club",
      slug: "club",
      subMenus: [
        {
          name: "history",
          id: "history",
          slug: "history",
        },
        {
          name: "board",
          id: "board",
          slug: "board",
        },
        {
          name: "bombers career center",
          id: "youth-rugby",
          slug: "career-center",
        },
        {
          name: "youth rugby",
          id: "youth-rugby",
          slug: "youth-rugby",
          subMenus: [
            {
              name: "sharks",
              id: "sharks",
              slug: "sharks",
            },
          ],
        },
      ],
    },

    {
      name: "team",
      id: "team",
      slug: "team",
      subMenus: [
        {
          name: "Home",
          id: "team",
          slug: "team",
        },
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
      name: "more",
      id: "more",
      slug: "",
      hide: false,
      subMenus: [
        ...more,
        {
          name: "Golf",
          id: "golf",
          slug: "golf",
        },
        {
          name: "donate",
          id: "donate",
          slug: "pay",
        },
      ],
    },
  ];

  return type
    ? navs.find((nav) => nav.name === type)
    : {
        navs,
        subMenus: more,
      };
};

export default useNav;
