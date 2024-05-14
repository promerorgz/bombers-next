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
    outline: {
      borderRadius: 5,
      borderColor: "brand.highlight",
      color: "brand.highlight",
      size: "xs",
      backgroundColor: "none",
      _hover: {
        color: "#212121",
        textDecoration: "none",
        backgroundColor: "brand.highlight",
      },
    },
    solid: {
      borderRadius: 5,
      backgroundColor: "brand.highlight",
      color: "brand.black",
      size: "xs",
      _hover: {
        color: "#212121",
        textDecoration: "none",
      },
    },
    menu: {
      textTransform: "capitalize",
    },
  },
  // The default size and variant values
  defaultProps: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    size: "md",
    variant: "solid",
  },
};

export default Button;
