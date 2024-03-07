const Button = {
  // The styles all button have in common
  baseStyle: {
    color: "brand.light",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: 0, // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    default: {
      fontSize: "md",
      px: 2, // <-- px is short for paddingLeft and paddingRight
      py: 2,
    },
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    expandy: {
      color: "white",
      textDecoration: "none",
      borderRadius: "60px",
      height: "32px",
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      overflow: "hidden",
      width: "auto",
      maxWidth:
        "32px" /** I'm animating max-width because width needs to be auto, and auto can't be animated **/,
      "-webkit-transition": "max-width 0.5s",
      transition: "max-width 0.5s",
      // _hover: {
      //   maxWidth: "400px",
      // },
      ".icon": {
        fontSize: "16px",
        marginRight: "15px",
        padding: "0px 8px",
        display: "flex",
        alignItems: "center",
      },
      ".text": {
        whiteSpace: "nowrap",
        paddingRight: "15px",
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "brand.light",
      color: "brand.light",
    },
    solid: {
      borderRadius: 5,
      backgroundColor: "brand.highlight",
      color: "brand.black",
      size: "xs",
    },
    menu: {
      textTransform: "capitalize",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "ghost",
  },
};

export default Button;
