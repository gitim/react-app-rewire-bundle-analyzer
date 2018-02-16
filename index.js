const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function rewireBundleAnalyzer(config) {
  config.plugins.push(new BundleAnalyzerPlugin())

  return config
}

module.exports = rewireBundleAnalyzer
