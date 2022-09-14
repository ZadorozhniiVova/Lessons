// const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/mixins.scss")],
    },
  },
};
