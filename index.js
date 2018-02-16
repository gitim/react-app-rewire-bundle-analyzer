const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function rewireBundleAnalyzer(config) {
  config.plugins.push(rewireBundleAnalyzer())

  return config
}

module.exports = rewireBundleAnalyzer
