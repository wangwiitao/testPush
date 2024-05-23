### module

#### file-loader

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "file-loader",
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

#### url-loader

> return data-url

```js
const path = require("path");
module.exports = {
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

> loader 执行术训，从后往前，从下往上

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

### plugins

#### css modules

seprate

#### htmwebpackplugin

#### clean webpack plugin

```js
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

```

#### when without output filename

when no output filename figured, use the entry key, the default is main

```js
entry: {
  main: "index.js";
}
equals;

entry: "index.js";
entry: "[name].js";
```
#### publicPath
```markdown
if use script from cdn, use publicPath as the host.
```

### devtool:source map
- none
- eval-source-map 
- inline-source-map不生成额外sourcemap文件，生成base64编码在脚本中

`cheap 能定位到行，定位不到列`

`module 不仅自己业务代码，还管第三方模块内容`

`eval 通过eval形式在代码中生成，并不额外生成source map文件`

### devserver
```bash
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
```

### 请求转发 proxy
- target
- pathRewrite

### 热更新HMR
