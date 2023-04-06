import { Flex, HStack } from "@chakra-ui/react";
import LoginButton from "common/LoginButton";
import Socials from "../../../common/Socials";

const TopNav = () => {
  return (
    <HStack
      minH={["50px", "75px", "50px", "50px"]}
      maxH="100px"
      bg="gradient.regular"
      flexGrow="2"
      justifyContent="flex-start"
      id="topbar"
      display={["none", "none", "flex", "flex"]}
    >
      <Flex w="100%" mx={8} justifyContent="space-between">
        <Socials />
        <LoginButton />
      </Flex>
    </HStack>
  );
};

export default TopNav;
