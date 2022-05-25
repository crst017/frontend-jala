const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dev')
        // path: path.join(__dirname, 'prod')
    }
}


// const path = require('path');

// module.exports = {
//     mode: 'none',
//     // entry: './src/index.js',
//     entry: {
//         app: './src/index.js'
//     },
//     output: {
//         // filename: 'bundle.js'
//         filename: '[name].js',
//         path: path.join(__dirname, 'build')
//     }
// }