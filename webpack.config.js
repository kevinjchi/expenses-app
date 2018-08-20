// entry -> output 
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log(path.join(__dirname, 'public'));

// configuration details for webpack file
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
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
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        }, 
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};