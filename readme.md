## Set up react project from scratch

_How to set up a basic react project using javascript/typescript, babel and webpack from scratch_

#### Create a react project from scratch

1.  Initialize npm project

    -   ```bash
        npm init -y
        ```

2.  Install react and react dom

    -   ```bash
        npm install react react-dom
        ```

3.  Install babel js transpiler

    -   ```bash
        npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
        ```

4.  Create a .babelrc file

    -   ```json
        {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
        }
        ```

5.  Install webpack

    -   ```bash
        npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader
        ```

6.  Create a webpack config file

    -   ```javascript
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const path = require("path");

        module.exports = {
            mode: "development",
            entry: "./src/index.js",
            output: {
                filename: "bundle.js",
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                        },
                    },
                    {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader"],
                    },
                ],
            },
            resolve: {
                extensions: [".js", ".jsx"],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                }),
            ],
            devServer: {
                static: {
                    directory: path.join(__dirname, "dist"),
                },
                hot: true,
                open: true,
            },
        };
        ```

7.  Create a public/index.html file for the main html file for your application
8.  Create an index.js file inside the src folder, this is the main entry point of the application, root element will be rendered using this

    -   ```javascript
        import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App";

        ReactDOM.render(<App />, document.getElementById("root"));
        ```

9.  Create an App.js file, for the main component

    -   ```javascript
        import React from "react";
        const App = () => {
            return <div>Hello, world!</div>;
        };
        export default App;
        ```

10. Set up some npm scripts in package.json for serving the application

    -   ```json
          "scripts": {
          "start": "webpack serve --mode development",
          "build": "webpack --mode production"
          }
        ```

11. Run the application using npm start

#### Optional? Add typscript

12. Install typescript

    -   ```bash
              npm install --save-dev typescript
        ```

13. create tsconfig

    -   ```bash
          tsc --init
        ```
    -   ```json
        {
            "compilerOptions": {
                "target": "es2015",
                "module": "commonjs",
                "strict": true,
                "esModuleInterop": true,
                "skipLibCheck": true,
                "forceConsistentCasingInFileNames": true
            },
            "$schema": "https://json.schemastore.org/tsconfig",
            "display": "Recommended"
        }
        ```

14. Install types

    -   ```bash
          npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
        ```

15. Install bable typescript preset

    -   ```bash
        npm install @babel/preset-typescript --save-dev
        ```

16. Update the babelrc

    -   ```json
        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
            ]
        }
        ```

17. Install tsloader

    -   ```bash
          npm install --save-dev ts-loader
        ```

18. Update webpack.config.js rules to have ts-loader for the typescript files

    -   ```javascript
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const path = require("path");

        module.exports = {
            mode: "development",
            entry: "./src/index.tsx",
            output: {
                filename: "bundle.js",
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"],
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: ["ts-loader"],
                    },
                    {
                        test: /\.(css|scss)$/,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                        use: ["file-loader"],
                    },
                ],
            },
            resolve: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                }),
            ],
            devServer: {
                static: {
                    directory: path.join(__dirname, "dist"),
                },
                hot: true,
                open: true,
            },
        };
        ```

19. ```bash
    npm start
    ```

#### Optional? convert webpack.config.js to webpack.config.ts

20. Modify webpack.config.js for typescript

    -   ```typescript
        import path from "path";
        import webpack from "webpack";
        import "webpack-dev-server";
        import HtmlWebpackPlugin from "html-webpack-plugin";
        const config: webpack.Configuration = {
            mode: "development",
            entry: "./src/index.tsx",
            output: {
                filename: "bundle.js",
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"],
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: ["ts-loader"],
                    },
                    {
                        test: /\.(css|scss)$/,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                        use: ["file-loader"],
                    },
                ],
            },
            resolve: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                }),
            ],
            devServer: {
                static: {
                    directory: path.resolve(__dirname, "dist"),
                },
                hot: true,
                open: true,
            },
        };

        export default config;
        ```

-   Install @babel/register
    -   ```bash
          npm install --save-dev @babel/register
        ```
