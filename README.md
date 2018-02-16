# react-app-rewire-bundle-analyzer

Add [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin to your [create-react-app](https://github.com/facebookincubator/create-react-app) via [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Installation

```
yarn add --dev react-app-rewire-bundle-analyzer
```

OR

```
npm install --save-dev react-app-rewire-bundle-analyzer
```

## Usage
In your react-app-rewired configuration:
```js
/* config-overrides.js */

const rewireBundleAnalyzer = require('react-app-rewire-bundle-analyzer');

module.exports = function override(config, env) {
    // ...
    config = rewireBundleAnalyzer(config, env);
    // ...
    return config;
}
```
