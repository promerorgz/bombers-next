module.exports = {
  pageExtensions: ["js", "jsx"],
  compiler: {
    styledComponents: true,
  },
  // largePageDataBytes: 135,
  env: {
    strapi: "https://bombers-backend.herokuapp.com",
  },
  images: {
    domains: ["bombers.s3.amazonaws.com"],
  },
};
