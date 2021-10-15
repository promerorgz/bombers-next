const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  env: {
    strapi:
      process.env.NODE_ENV === "production"
        ? "https://bombers-backend.herokuapp.com"
        : "http://localhost:1339",
  },
});
