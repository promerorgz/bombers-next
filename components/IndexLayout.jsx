import { Flex } from "@chakra-ui/react";

const IndexLayout = ({ items }) => {
  console.log({ items });
  return (
    <Flex height="100%">
      <Flex direction="column">
        {items.map((item) => {
          return <div>{item.name}</div>;
        })}
      </Flex>
      <Flex direction="column">
        {items.map((item) => {
          return <div>{item.name}</div>;
        })}
      </Flex>
    </Flex>
  );
};

export default IndexLayout;
