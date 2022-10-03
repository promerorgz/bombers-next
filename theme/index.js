// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";
import Heading from "./Heading";
import Tabs from "./Tabs";
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
      superblack: "#000",
      black: "#212121",
      medium: "#404040",
      meta: "#999",
      light: "#E2E2E2",
      white: "#fff",
      bg: "#f8f8f8",
    },
    gray: {
      light: "#303030",
      main: "#212121",
      dark: "#181818",
    },
    gradient: {
      main: "linear-gradient(90deg, rgba(24,24,24,1) 3%, rgba(56,56,56,1) 37%, rgba(53,53,53,1) 85%)",
      caption:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(170,170,170,1) 8%, rgba(33,33,33,1) 100%)",
      regular: "linear-gradient(90deg, #212121 0, #404040)",
    },
    shadow: {
      1: "box-shadow: 0px 4px 4px 0px #00000040",
    },
  },
  fonts: {
    header: {
      fontWeight: "bold",
      fontFamily: "Big Shoulders Display",
      fontSize: "xl",
      color: "brand.black",
    },
  },
});
