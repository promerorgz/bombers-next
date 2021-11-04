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
      highlight: "tomato",
      superblack: "#000",
      black: "#212121",
      medium: "#404040",
      light: "#E2E2E2",
      white: "#fff",
    },
    gray: {
      light: "#303030",
      main: "#212121",
      dark: "#181818",
    },
    gradient: {
      main:
        "linear-gradient(90deg, rgba(24,24,24,1) 3%, rgba(56,56,56,1) 37%, rgba(53,53,53,1) 85%)",
    },
    shadow: {
      1: "box-shadow: 0px 4px 4px 0px #00000040",
    },
  },
});
