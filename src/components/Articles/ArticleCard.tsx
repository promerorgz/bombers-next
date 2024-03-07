import { Badge, Box, Flex, LinkBox, Text } from "@chakra-ui/react";
import { toLower } from "lodash";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const ArticleCard = ({ article, href }) => {
  const link = `/articles/${toLower(article.category?.name)}/${toLower(
    article?.uid
  )}`;

  const linkHref = `${href || "/articles/"}[category]/[id]`;

  return (
    <Link as={link} href={linkHref}>
      <LinkBox>
        <Flex
          transition={`all .2s ease-in-out`}
          direction={["column", "column", "row"]}
          m={8}
          p={[0, 0, 2, 4]}
          minH="350px"
          maxH="350px"
          borderWidth="1px"
          overflow="hidden"
          borderColor="brand.lightSecondary"
          cursor="pointer"
          _hover={{
            transform: `scale(1.05)`,
          }}
          bg="brand.light"
          borderRadius={8}
        >
          <Box
            className="image-container"
            backgroundImage={article?.image?.url}
            flexGrow="1"
            backgroundPosition="center"
            backgroundSize="cover"
            minW="30%"
            maxW={["container.xl", "100%", "30%"]}
          ></Box>
          <Flex direction="column">
            <Box display="flex" alignItems="baseline" m={4} textAlign="start">
              <Box fontWeight="semibold" lineHeight="tight" maxW="100%">
                <Flex
                  alignItems="start"
                  direction="column"
                  justifyContent="flex-start"
                  m={4}
                >
                  <Text
                    fontSize={["md", "xl"]}
                    as="p"
                    fontWeight="bolder"
                    textTransform={"none"}
                    color="brand.dark"
                    mb="4"
                  >
                    {article?.title}
                  </Text>
                  <Box
                    overflowY="scroll"
                    maxH="350px"
                    wordBreak="break-word"
                    color="brand.dark"
                    fontFamily="sans-serif"
                    fontWeight="light"
                    fontSize="sm"
                    w="100%"
                    display={["none", "none", "block"]}
                  >
                    <ReactMarkdown>{article?.description}</ReactMarkdown>
                  </Box>
                </Flex>
              </Box>
              {article?.category?.name && (
                <Badge bg="brand.medium" color="brand.light" mx="4">
                  {article?.category?.name}
                </Badge>
              )}
            </Box>
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  );
};

export default ArticleCard;
