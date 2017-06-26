const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            }
        })
    ]
};