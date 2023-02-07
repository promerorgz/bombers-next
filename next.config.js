module.exports = {
  pageExtensions: ["js", "jsx"],
  compiler: {
    styledComponents: true,
  },
  env: {
    strapi: "https://bombers-backend.herokuapp.com",
  },
  images: {
    domains: ["bombers.s3.amazonaws.com"],
  },
};
