const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./assets/src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "images"
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "webfonts"
                    }
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./assets/src/index.html",
            filename: "index.html"
        })
    ]
}