import React from "react";
import Link from "next/link";
import Image from "../../common/Pic";
import { Box, LinkBox, Badge, Text, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { background } from "@chakra-ui/styled-system";
import ReactMarkdown from "react-markdown";

const ArticleCard = ({ article, styles, highlight }) => {
  return (
    <Link
      as={`/article/${article.slug || "hello"}`}
      href="/article/[id]"
      m="16"
    >
      <LinkBox>
        <Flex
          minH="500px"
          direction={highlight ? "row" : "column"}
          maxW="8xl"
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
            backgroundImage={`http://localhost:1339${article.image.url}`}
            flexGrow="1"
            minH="300px"
            backgroundPosition="center"
            backgroundSize="cover"
          ></Box>
          <Flex direction="column" p="4">
            <Box d="flex" alignItems="baseline" m={4}>
              <Badge
                borderRadius="full"
                px="2"
                bg="brand.light"
                color="brand.black"
                mr="4"
              >
                {article.category.name}
              </Badge>
              <Box
                color="brand.medium"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                {new Date(article.publishedAt).toLocaleDateString()}
              </Box>
            </Box>

            <Flex
              alignItems="start"
              direction="column"
              justifyContent="flex-start"
              m={4}
            >
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                overflowY="scroll"
                whiteSpace="nowrap"
              >
                <Text
                  fontSize={highlight ? "2xl" : "xl"}
                  as="h1"
                  fontWeight="bolder"
                  textTransform={highlight ? "uppercase" : "none"}
                  color="brand.light"
                  textOverflow="ellipsis"
                  overflowY="scroll"
                  whiteSpace="nowrap"
                >
                  {article.title}
                </Text>
              </Box>
              <Box overflowY="scroll" color="brand.light">
                <ReactMarkdown>{article.description}</ReactMarkdown>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  );
};

export default ArticleCard;
