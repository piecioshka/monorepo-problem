const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const projRoot = path.join(__dirname, '..', '..', '..');
const pkgRoot = path.join(__dirname, '..');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(pkgRoot, 'src', 'index.js'),
    output: {
        path: path.join(pkgRoot, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        alias: {
            '@app/package-a': path.join(projRoot, 'packages', 'package-a'),
            '@app/package-b': path.join(projRoot, 'packages', 'package-b'),
        }
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
};
