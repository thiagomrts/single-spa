const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mc",
    projectName: "react-multiples",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ['react-router-dom'],
  });
};
