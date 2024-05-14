import { Box, Flex } from "@chakra-ui/react";
import styled, { StyledComponent } from "@emotion/styled";
import Link from "next/link";
import NavLogo from "../../../common/NavLogo";
import useNav from "../../../hooks/useNav";

type MenuItemProps = {
  theme: any;
  outlined?: boolean;
};

const MenuItem = styled(Box)`
  ${(props: MenuItemProps) => ({
    padding: props.outlined ? "4px" : "inherit",
    border: props.outlined ? "3px solid white" : "none",
    ...props.theme?.fonts?.menuItem,
  })}
  opacity: 0.75;
  :hover {
    opacity: 1;
  }
`;

const DesktopNav = () => {
  const { navs } = useNav();

  return (
    <Flex
      id="desktop-nav-container"
      bg="transparent"
      minH="100px"
      display={["none", "none", "flex", "flex"]}
      justifyContent="center"
      alignItems="center"
      px="16px"
      pb="8px"
    >
      <Flex justifyContent="center" maxW="1180px" w="100%" alignItems="center">
        <Box flex="1">
          <NavLogo color="brand.light" size="md" logoOnly />
        </Box>
        <Flex
          grow="1"
          flex="2"
          flexDir="row"
          width="100%"
          height="100%"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navs.map((nav) => {
            return (
              <Link
                key={nav.slug}
                style={{
                  textDecoration: "none",
                }}
                href={nav.slug}
              >
                <MenuItem className="desktop-menu-item">{nav.name}</MenuItem>
              </Link>
            );
          })}
        </Flex>
        <Flex
          grow="1"
          flex="1"
          flexDir="row"
          width="100%"
          height="100%"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            href="/pay"
          ></Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
