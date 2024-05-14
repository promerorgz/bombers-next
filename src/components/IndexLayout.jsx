import { Flex, SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Card from "../common/Card";

const IndexLayout = ({ items }) => {
  return (
    <SimpleGrid
      h="100%"
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={[0, 0, 5, 10]}
      m={[0, 0, 8, 16]}
    >
      {items.map((item) => {
        return (
          <Card
            key={`${item.slug}`}
            radius="8px"
            id={`${item.name}-card`}
            as={item.url}
            link={`/${item.slug}/[slug]`}
            styles={{
              minHeight: "370px",
              height: "auto",
              maxWidth: "300px",
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "gray",
            }}
            bg={item.bg || "/static/logos/white_logo.png"}
            border="1px solid #e2e2e2"
          >
            <Box
              style={{
                background: `linear-gradient(
    185deg,rgba(0,0,0,0) 20%,rgba(0,0,0,.9) 80%)`,
                height: "70%",
                zIndex: 98,
                width: "100%",
                position: "absolute",
                overflow: "hidden",
                bottom: 0,
                verticalAlign: "baseline",
                display: "flex",
              }}
            >
              <Flex
                id="text-content"
                p="0 0 16px 20px"
                direction="column"
                w="100%"
                alignSelf="flex-end"
              >
                <Heading
                  m={0}
                  color="brand.white"
                  fontWeight="bold"
                  textTransform="uppercase"
                  wordSpacing="6px"
                  fontSize="2em"
                >
                  {item.name}
                </Heading>
              </Flex>
            </Box>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default IndexLayout;
