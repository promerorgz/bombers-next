import React from "react";
import Layout from "../src/common/Layout";

const Fof = () => {
  return (
    <Layout
      seo={{
        metaTitle: "Oops! Page does not exist",
      }}
      header="Page not found"
      mainBg="#fff"
      cover={{
        full: true,
        url: "/static/coach_pic1.jpeg",
      }}
    >
      404: This is obviously not the page you are looking for...
    </Layout>
  );
};

export default Fof;
