import { fetchAPI } from "./api";
import { useState, useEffect } from "react";

const useNav = () => {
  const [more, setMore] = useState([]);

  useEffect(() => {
    fetchAPI("/pages", process.env.NODE_ENV === "development")
      .then((value) => {
        setMore(value);
      })
      .catch((err) => console.error(err));
  }, []);

  return {
    navs: [
      // { name: "home", id: "/", slug: "home" },
      // {
      //   name: "about",
      //   id: "about",
      //   slug: "about",
      // },
      {
        name: "articles",
        id: "articles",
        slug: "articles",
      },
      // {
      //   name: "schedule",
      //   id: "schedule",
      //   slug: "schedule",
      // },
      {
        name: "team",
        id: "team",
        slug: "team",
      },
      {
        name: "contact",
        id: "contact",
        slug: "contact",
      },

      {
        name: "club",
        id: "club",
        slug: "club",
        subMenus: [
          {
            name: "Golf",
            id: "golf",
            slug: "golf",
          },
          {
            name: "donate",
            id: "donate",
            slug: "donate",
          },
        ],
      },

      {
        name: "more",
        id: "more",
        slug: "",
        hide: !more.length,
      },
    ],
    subMenus: more,
  };
};

export default useNav;
