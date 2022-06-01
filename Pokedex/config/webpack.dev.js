const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.join(__dirname + '/..', 'dev')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};

module.exports = merge(
    commonConfig,
    devConfig
);

