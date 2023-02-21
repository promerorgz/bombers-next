/* eslint-disable import/no-anonymous-default-export */
export const colors = [
  "highlight",
  "superblack",
  "black",
  "medium",
  "light",
  "white",
  "bg",
];

const color = colors.reduce((acc, color) => {
  return { ...acc, [color]: `var(--chakra-colors-brand-${color})` };
}, {});

export default {
  color,
};
