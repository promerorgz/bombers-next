import React from "react";
import Link from "next/link";
import Image from "../../common/Pic";
import { Box, LinkBox, Badge, Text, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { background } from "@chakra-ui/styled-system";
import ReactMarkdown from "react-markdown";
import { useBreakpointValue } from "@chakra-ui/media-query";

const ArticleCard = ({ article, styles, highlight }) => {
  const direction = useBreakpointValue({
    base: highlight ? "row" : "column",
    xs: "column",
    sm: "column",
    md: highlight ? "row" : "column",
    lg: highlight ? "row" : "column",
  });

  const imageHeight = {
    [`${highlight ? "min" : "max"}H`]: "250px",
  };
  return (
    <Link
      as={`/article/${article?.slug || "hello"}`}
      href="/article/[id]"
      m="16"
    >
      <LinkBox>
        <Flex
          minH="500px"
          maxH="500"
          // maxH="500px"
          direction={direction}
          borderWidth="1px"
          overflow="hidden"
          borderRadius="8px"
          borderColor="brand.400"
          cursor="pointer"
          bg="brand.black"
          sx={{
            ...styles,
            transition: "all .2s ease-in-out",
            _hover: {
              transform: "scale(1.05)",
              boxShadow: "0px 5px 10px #21212150",
            },
          }}
          bgGradient="gradient.main"
        >
          <Box
            backgroundImage={`${process.env.strapi}${article?.image?.url}`}
            flexGrow="1"
            {...imageHeight}
            backgroundPosition="center"
            backgroundSize="cover"
            minW="40%"
          ></Box>
          <Flex direction="column" p="4">
            <Box d="flex" alignItems="baseline" m={4}>
              {article?.category?.name && (
                <Badge
                  borderRadius="full"
                  px="2"
                  bg="brand.light"
                  color="brand.black"
                  mr="4"
                >
                  {article?.category?.name}
                </Badge>
              )}
              <Box
                color="brand.medium"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                {new Date(article?.publishedAt).toLocaleDateString()}
              </Box>
            </Box>

            <Flex
              alignItems="start"
              direction="column"
              justifyContent="flex-start"
              m={4}
            >
              <Box fontWeight="semibold" lineHeight="tight" maxW="100%">
                <Text
                  fontSize={highlight ? "2xl" : "xl"}
                  as="p"
                  fontWeight="bolder"
                  textTransform={highlight ? "uppercase" : "none"}
                  color="brand.light"
                  mb="4"
                >
                  {article?.title}
                </Text>
              </Box>
              <Box
                overflowY="scroll"
                maxH="350px"
                wordBreak="break-word"
                color="brand.light"
              >
                <ReactMarkdown>
                  {!highlight ? article?.description : article.content}
                </ReactMarkdown>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  );
};

export default ArticleCard;
