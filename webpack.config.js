module.exports = {
    entry  : './src/app.js',
    output : {
        path     : __dirname,
        filename : './dist/app.bundle.js'
    },
    module : {
        loaders: [ {
            test   : /.js$/,
            loader : 'babel-loader'
        }
        ]
    }
};