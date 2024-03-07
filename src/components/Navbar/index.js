import { Box } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { DesktopNav, MobileNav, TopNav } from "./navs";

const Nav = ({ ...props }) => {
  return (
    <Box className={styles["nav-container"]} {...props}>
      <TopNav />
      <MobileNav />
      <DesktopNav />
    </Box>
  );
};

export default Nav;
