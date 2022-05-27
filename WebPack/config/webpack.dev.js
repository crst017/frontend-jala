const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const loader = require('sass-loader');

const devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.join(__dirname + '/..', 'dev')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

module.exports = merge(
    commonConfig,
    devConfig
);

