const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
const { devtool } = require('../source-maps');

const mode = 'development';
module.exports = {
    mode: mode,
    entry: {
        bundle: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenhash].js',
        clean: true,
    },
    devtool: 'source-map', // helps you trace errors back to the original source code module
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080, // the port webpack-dev-server listens to
        open: {
            app: {
                name: 'Google Chrome'
            }
        }, // open the page in browser
        hot: true,   //  HMR means that when you change something in your code, it doesn't refresh the whole page, just the part that was changed.
        compress: true, // enable gzip compression
        historyApiFallback: true, // This option enables support for serving HTML5 History API fallback responses.

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    mode === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    mode === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/i,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // keeps the original filename of the image file
                },
            },
        ]
    },
    performance: {
        hints: "warning",
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
    },
    // Add the plugin to the plugins array
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new MiniCssExtractPlugin()
    ]

}