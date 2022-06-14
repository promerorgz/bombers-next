import ReactMarkdown from "react-markdown";
import React from "react";
import gfm from "remark-gfm";

const Mdx = (props) => {
  return (
    <ReactMarkdown
      linkTarget="_blank"
      transformImageUri={(uri) => uri}
      plugins={[gfm]}
    >
      {props.children}
    </ReactMarkdown>
  );
};

export default Mdx;
