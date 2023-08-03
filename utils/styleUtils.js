const mediaQuery = (is, size) => {
  const breakpoints = {
    mobileS: 321,
    mobileM: 376,
    mobileL: 425,
    tablet: 767,
    laptop: 1024,
    laptopL: 1441,
  };

  const width = breakpoints[size];

  return {
    gt: `@media (minWidth: ${width}px)`,
    lt: `@media (maxWidth: ${width}px)`,
    eq: `@media (width: ${width}px)`,
  }[is];
};

const media = {
  breakpoint: (is, size) => mediaQuery(is, size),
  mobileOnly: ["block", "block", "none", "none"],
};

export default media;
