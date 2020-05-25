//entry point 

const path = require('path');
//console.log(path.join(__dirname,'public'));
module.exports = {
    entry: './src/app.js',
    output: {
        //absolute path
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },

    //setup the loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  //RE to test file ends with .js extension
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
        contentBase: path.join(__dirname,'public')
    }
};