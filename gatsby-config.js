module.exports = {
  pathPrefix: "/dogecoin.org",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    { resolve: "gatsby-plugin-react-svg", options: { rule: { include: /assets/ } } },
  ],
}
