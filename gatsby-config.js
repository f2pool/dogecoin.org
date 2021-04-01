module.exports = {
  pathPrefix: "",
  // pathPrefix: "/dogecoin.org",
  // assetPrefix: "https://dogecoinorg.github.io/dogecoin.org/",
  siteMetadata: {
    name: "dogecoin.org",
    title: "dogecoin.org",
    description: `dogecoin.org`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    { resolve: "gatsby-plugin-react-svg", options: { rule: { include: /assets/ } } },
  ],
}
