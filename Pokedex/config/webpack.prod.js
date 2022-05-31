const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.join(__dirname + '/..', 'prod')
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            }
        ],
    },
    plugins: [
        // new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
};

module.exports = merge(
    commonConfig,
    devConfig
);