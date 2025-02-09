const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader', // Вставляет стили в DOM
                  'css-loader', // Интерпретирует @import и url() как import/require() и будет обрабатывать их
                  'sass-loader' // Компилирует Sass в CSS
                ]
              }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    devServer: {
        static: {
            directory: 'src',
        },
        compress: false,
        hot: true,
        watchFiles: ['src/*'],
        port: 9000
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    mode: 'development'
};