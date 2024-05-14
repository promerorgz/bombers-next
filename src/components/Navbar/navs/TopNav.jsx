import { Flex, HStack } from "@chakra-ui/react";
import LoginButton from "src/common/LoginButton";
import Socials from "../../../common/Socials";

const TopNav = () => {
  return (
    <HStack
      minH={["50px", "75px", "50px", "50px"]}
      maxH="100px"
      bg="gradient.regular"
      flexGrow="2"
      justifyContent="center"
      id="topbar"
      display={["none", "none", "flex", "flex"]}
      alignItems="center"
    >
      <Flex w="100%" mx={8} justifyContent="space-between" maxW="1180px">
        <Socials />
        <LoginButton />
      </Flex>
    </HStack>
  );
};

export default TopNav;
