const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(ROOT_PATH, 'public/index.html'),
  filename: 'index.html',
});

module.exports = {
    entry: path.resolve(ROOT_PATH, 'src/index.js'),
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [htmlPlugin],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'development',
}

