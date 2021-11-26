module.exports = {
  minifySvg: false,
  recognizeSelfClosing: true,
  lowerCaseAttributeNames: false,
  plugins: [require("posthtml-include")({ root: "src" }), require("posthtml-expressions")({})],
};
