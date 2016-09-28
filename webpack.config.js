module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/app.bundle.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }
        ]
    }
};