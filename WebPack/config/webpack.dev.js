const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
// const path = require('path');

const devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.join(__dirname + '/..', 'dev')
    }
};

module.exports = merge(
    commonConfig,
    devConfig
);

