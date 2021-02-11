const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '/',
    transpileDependencies: [],
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    },
    productionSourceMap: false
};
