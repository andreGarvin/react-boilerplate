const { resolve } = require('path');

const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entryPath = resolve(`${__dirname}/app/src`);
const outPath = resolve(`${__dirname}/dist`);

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
]

// the clean options to use
let cleanOptions = {
    verbose: true
}

module.exports = {
    entry: resolve(`${entryPath}/index.js`),
    output: {
        path: outPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: entryPath,
                loader: 'babel-loader',
                query: {
                    presets: [
                        [
                            'env',
                            {
                                targets: {
                                    node: '6.11.2',
                                },
                            },
                        ],
                        'react',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
};