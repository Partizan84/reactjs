const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
        publicPath: '/static/build/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname,'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                            },
                        ],
                    ],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname,'./index.html'),
                filename: 'index.html',
            },
        ),
    ],
};