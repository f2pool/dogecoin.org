// TODO: change siteMetadata
module.exports = {
  pathPrefix: "/dogecoin.org",
  siteMetadata: {
    name: "dogecoin.org",
    title: "dogecoin.org",
    description: `dogecoin.org`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    { resolve: "gatsby-plugin-react-svg", options: { rule: { include: /assets/ } } },
  ],
}
