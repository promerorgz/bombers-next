import {
  Badge,
  Box,
  Flex,
  LinkBox,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { toLower } from "lodash";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import formatDate from "utils/formatDate";

const ArticleCard = ({
  article,
  styles,
  href,
  highlight = false,
  isDesktop,
}) => {
  const direction = useBreakpointValue({
    base: "row",
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
  });

  return (
    <Link
      as={`/articles/${toLower(article.category?.name)}/${
        toLower(article?.slug) || "hello"
      }`}
      href={`${href || "/articles/"}[category]/[id]`}
      m="16"
    >
      <LinkBox>
        <Flex
          direction={direction}
          minH="350px"
          maxH={highlight ? "500px" : "350px"}
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
            className="image-container"
            backgroundImage={article?.image?.url}
            flexGrow="1"
            backgroundPosition="center"
            backgroundSize="cover"
            minW="50%"
          ></Box>
          <Flex direction="column">
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
                {formatDate(article?.publishedAt, "long")}
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
              {
                <Box
                  overflowY="scroll"
                  maxH="350px"
                  wordBreak="break-word"
                  color="brand.light"
                >
                  <ReactMarkdown>
                    {!highlight ? article?.description : article?.content}
                  </ReactMarkdown>
                </Box>
              }
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  );
};

export default ArticleCard;
