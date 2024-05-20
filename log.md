#### file-loader
```js
const path = require('path')
module.exports = {
  entry: "./index.js",
  module:{
    rules:[
      {
        test:/\.(jpe?g|png|gif)$/i,
        use:{
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'imgs/'
          }
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

#### url-loader
> return data-url

```js
const path = require('path')
module.exports = {
  entry: "./index.js",
  module:{
    rules:[
      {
        test:/\.(jpe?g|png|gif)$/i,
        use:{
          loader:'url-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'imgs/'
          }
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```

#### mode
```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```
#### limit 
```js
module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            limit: 258342,
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```

#### style-loader,css-loader
> loader执行术训，从后往前，从下往上
```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            limit: 238342,
          },
        },
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

```