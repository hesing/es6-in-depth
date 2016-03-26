module.exports = {
    entry: './public/src/main.js',
    output: {
        path: 'public/webpackbuild',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }]
    }
}
