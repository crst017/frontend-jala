const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

const prodConfig = {
    mode: 'production',
    output: {
        filename: 'app.[fullhash].js',
        path: path.join(__dirname + '/..', 'prod')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[fullhash].css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
    },
};

module.exports = merge(
    commonConfig,
    prodConfig
);