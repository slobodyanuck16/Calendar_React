const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {
        entry: "./src/index.jsx",
        output: {
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ["babel-loader"],
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
            new CopyPlugin([{ from: "_redirects", to: "" }]),
            new MomentLocalesPlugin({
                localesToKeep: ["es-us", "ru"],
            }),
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devServer: {
            hot: true,
        },
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name].css",
            })
        );
    }

    return config;
};
