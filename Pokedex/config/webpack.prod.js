const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

const devConfig = {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.join(__dirname + '/..', 'prod')
    }
};

module.exports = merge(
    commonConfig,
    devConfig
);