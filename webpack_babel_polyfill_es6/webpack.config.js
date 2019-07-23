const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options:{
                    "presets": [
                        ["@babel/preset-env",{
                            useBuiltIns: 'usage'
                        }]
                    ]
                }
            }]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'es6转换',
            filename: 'index.html'
        })
    ]
}