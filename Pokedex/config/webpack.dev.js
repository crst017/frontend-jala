const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

const devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.join(__dirname + '/..', 'dev')
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
            },
        ],
    }
};

module.exports = merge(
    commonConfig,
    devConfig
);

