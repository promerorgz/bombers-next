import { Box } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { DesktopNav, MobileNav, TopNav } from "./navs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Nav = ({ ...props }) => {
  useGSAP(() => {
    gsap.to(".main-nav-bar", {
      scrollTrigger: ".scrollable",
    });
  }, []);
  return (
    <Box className={`${styles["nav-container"]} main-nav-bar`} {...props}>
      {/* <TopNav /> */}
      <MobileNav />
      <DesktopNav />
    </Box>
  );
};

export default Nav;
