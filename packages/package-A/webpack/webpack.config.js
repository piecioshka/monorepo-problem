const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pkgRoot = path.join(__dirname, '..');

module.exports = {
    entry: path.join(pkgRoot, 'src', 'index.js'),
    output: {
        path: path.join(pkgRoot, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
};
