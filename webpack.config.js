// entry -> output 
const path = require('path');

console.log(path.join(__dirname, 'public'));

// configuration details for webpack file
module.exports = {
    entry: './src/playground/higher-order-components.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    
    // loader lets you customize webpack by transforming, f.eks ES6 -> ES5
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};