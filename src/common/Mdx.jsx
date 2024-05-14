import ReactMarkdown from "react-markdown";
import React from "react";
import gfm from "remark-gfm";
import Link from "next/link";
import { Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FormatMd } from "./styles";

const Mdx = (props) => {
  const formatText = ({ node, ...props }) => {
    const size = {
      1: "xl",
      2: "lg",
      3: "md",
      4: "sm",
      5: "xs",
    };
    return (
      <Heading
        my="8"
        as={node.tagName}
        size={size[props.level]}
        {...props}
      ></Heading>
    );
  };

  const format = ({ node, ...props }) => (
    <FormatMd as={node.tagName} {...props} />
  );

  return (
    <ReactMarkdown
      linkTarget="_blank"
      transformImageUri={(uri) => uri}
      remarkPlugins={[gfm]}
      components={{
        a: ({ node, ...props }) => (
          <Link passHref href={props.href} legacyBehavior>
            <ChakraLink
              {...props}
              sx={{
                color: "var(--chakra-colors-messenger-400)",
              }}
            ></ChakraLink>
          </Link>
        ),
        h1: formatText,
        h2: formatText,
        h3: formatText,
        h4: formatText,
        h5: formatText,
        p: ({ node, ...props }) => (
          <Text {...props} as={node.tagName} mb="8"></Text>
        ),
        em: ({ node, ...props }) => (
          <Text
            {...props}
            as={node.tagName}
            color="brand.medium"
            sx={{ fontWeight: "bolder" }}
          ></Text>
        ),
        strong: ({ node, ...props }) => (
          <Text
            {...props}
            as={node.tagName}
            color="brand.superblack"
            sx={{ fontWeight: "bolder", fontSize: "inherit" }}
          ></Text>
        ),
        ol: format,
        ul: format,
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};

export default Mdx;
