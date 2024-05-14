import { extendTheme } from "@chakra-ui/react";
import Heading from "./Heading";
import Button from "./Button";
// 2. Extend the theme to include custom colors, fonts, etc
export default extendTheme({
  components: {
    Button,
    Heading,
  },
  styles: {
    html: {
      height: "100vh",
      width: "100%",
    },
  },
  colors: {
    brand: {
      highlight: "#f8cf2c",
      black: "#000",
      dark: "#212121",
      medium: "#404040",
      meta: "#999",
      lightSecondary: "#d3d3d3",
      light: "#E2E2E2",
      white: "#fff",
      bg: "#f8f8f8",
    },
    gradient: {
      main: "linear-gradient(90deg, rgba(24,24,24,1) 3%, rgba(56,56,56,1) 37%, rgba(53,53,53,1) 85%)",
      caption:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(170,170,170,1) 8%, rgba(33,33,33,1) 100%)",
      regular: "linear-gradient(90deg, #212121 0, #404040)",
      background: `linear-gradient(
        90deg,
        var(--chakra-colors-brand-black) 0,
        var(--chakra-colors-brand-dark) 20%,
        var(--chakra-colors-brand-medium) 60%
        var(--chakra-colors-brand-light) 80%
      );`,
    },
    shadow: {
      1: "box-shadow: 0px 4px 4px 0px #00000040",
    },
  },
  fonts: {
    header: {
      fontWeight: "bold",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "xl",
      color: "brand.black",
    },
    menuItem: {
      fontWeight: 600,
      transitionProperty: `var(--chakra-transition-property-common)`,
      transitionDuration: `var(--chakra-transition-duration-normal)`,
      color: `var(--chakra-colors-brand-light)`,
      height: `var(--chakra-sizes-10)`,
      minWidth: `var(--chakra-sizes-10)`,
      fontSize: `var(--chakra-fontSizes-md)`,
      paddingInlineStart: `var(--chakra-space-6)`,
      paddingInlineEnd: ` var(--chakra-space-6)`,
      paddingTop: `var(--chakra-space-4)`,
      paddingBottom: `var(--chakra-space-4)`,
      fontFamily: `Montserrat`,
      textTransform: "capitalize",
    },
  },
});
