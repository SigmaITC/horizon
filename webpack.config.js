const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin= require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor:[
            '@cycle/dom',
            '@cycle/run',
            'rxjs',
            'sanctuary',
            'xstream'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    /(node_modules|bower_components)/
                ],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('postcss-import-url'),
                                    require('postcss-custom-media'),
                                    require('postcss-cssnext'),
                                    require('cssnano'),
                                    require('postcss-reporter')
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(['public/*.js', 'public/*.css']),

        new ExtractTextPlugin('app.css'),

        new webpack.HashedModuleIdsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })

        /*new workboxPlugin({
            globDirectory: 'public',
            globPatterns: [
                'manifest.json',
                '*.html',
                'assets/*.{js,css}',
                'images/*.{gif,jpg,jpeg,png,svg}'
            ],
            swDest: path.join('.', 'sw.js'),
        })*/
    ],
    devtool: 'eval-source-map'
};
