process.env.NODE_ENV = 'production' ;

const webpack = require('webpack') ;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin ;
const webpackConfigProd = require('react-scripts/config/webpack.config')('production') ;

webpackConfigProd.plugins.push( new BundleAnalyzerPlugin({
    analyzerMode : 'static',
    reportFilename : 'bundle-report.html',
    openAnalyzer : false,
    generateStatsFile : true,
    statsFilename : 'bundle-stats.json'
})) ;

webpack(webpackConfigProd, (err, stats) => {
    if( err || stats.hasErrors() ) {
        console.error(err)
    }
}) ;




