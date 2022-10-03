import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Drawer from "../../common/Drawer";
import NavLink from "../../common/NavLink";
import useNav from "../../lib/useNav";
import useBp from "../../theme/useBp";
import DesktopNav from "./DesktopNav";
import styles from "./Navbar.module.scss";
import TopNav from "./TopNav";

const Nav = ({ ...props }) => {
  const { navs, subMenus } = useNav();
  const [isDesktop] = useBp();
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);

  const handleCheck = () => {
    setShowSub(!showSub);
  };
  const handleMenuOpen = () => setIsOpen(true);
  const onClose = () => {
    setShowSub(false);
    setIsOpen(false);
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
