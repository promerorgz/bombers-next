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
    strapi: "https://bombers-backend.herokuapp.com",
    // process.env.NODE_ENV === "production"
    //  "http://localhost:1339",
  },
});
