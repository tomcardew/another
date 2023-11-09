const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './dist/index.js',  // Your main script
    output: {
        filename: 'another.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ]
};