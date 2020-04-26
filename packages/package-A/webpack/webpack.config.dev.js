const common = require('./webpack.config');

module.exports = {
    ...common,
    mode: 'development',
    devtool: 'source-map',
};
