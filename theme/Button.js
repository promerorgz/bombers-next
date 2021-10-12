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
      border: "2px solid",
      borderColor: "brand.light",
      color: "brand.light",
    },
    solid: {
      bg: "brand.medium",
      color: "brand.light",
    },
    rounded: {
      borderRadius: 12,
    },
    "&:hover": {
      textDecoration: "none",
      color: "brand.dark",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export default Button;
