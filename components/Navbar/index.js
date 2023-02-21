import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Drawer from "../../common/Drawer";
import NavLink from "../../common/NavLink";
import useNav from "../../hooks/useNav";
import DesktopNav from "./DesktopNav";
import styles from "./Navbar.module.scss";
import TopNav from "./TopNav";

const Nav = ({ ...props }) => {
  const { navs, subMenus } = useNav();
  const [showSub, setShowSub] = useState(false);
  const onClose = () => {
    setShowSub(false);
  };

  return (
    <Box className={styles["nav-container"]} {...props}>
      <TopNav navs={navs} />
      <DesktopNav navs={navs} />
      {showSub && (
        <Drawer placement="right" onClose={onClose} show={showSub} size="md">
          {subMenus?.length &&
            subMenus?.map((sub) => (
              <NavLink nav={sub} id={sub.title} onClick={onClose} />
            ))}
        </Drawer>
      )}
    </Box>
  );
};

export default Nav;
