const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: { app: [path.resolve(__dirname, './index.js')] },
    module: {
        rules: [{
           test: /\.(js|jsx)$/,
           use: ['babel-loader'],
           exclude: "/node_modules/", 
        }]
    },
    output: { 
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
        modules: [
            'node_modules',
            './src'
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 4001,
        server: {
            type: 'https'
        },
        client: {
            overlay: false
        },
        compress: true,
        hot: true, 
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
}