# swc-loader

This module allows you to use SWC with webpack.

## Installation

```plaintext
# if you use npm
npm i -D @swc/core swc-loader

# if you use yarn
yarn add -D @swc/core swc-loader
```

## Usage

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        // `.swcrc` can be used to configure swc
        loader: "swc-loader"
      }
    }
  ]
}
```

### React Development

The [`jsc.transform.react.development`](/docs/configuration/compilation#jsctransformreactdevelopment) option is automatically set based on the [webpack `mode`](https://webpack.js.org/configuration/mode/).

### With babel-loader

When used with babel-loader, the parseMap option must be set to true.

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "swc-loader",
        options: {
          parseMap: true
        }
      }
    }
  ]
}
```
