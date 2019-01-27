const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'index': path.resolve(__dirname, 'ts/index.ts'),
        'pages/page2': path.resolve(__dirname, 'ts/pages/page2.ts'),
        // ページが増えたらここに追記
    },
    output: {
        path: path.resolve(__dirname, '../resources/static'),
        filename: '[name].js',
        publicPath: '/' // webpack-dev-server等が使うディレクトリ この場合、../resources/staticが/となる
    },
    module: {
        rules: [
            // ts -> ES2015 -> babel -> ES5
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["source-map-loader"],
                enforce: "pre",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/',
                    },
                }, ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // import TypeScript and JavaScript without extentions
    resolve: {
        extensions: [
            '.ts', '.js'
        ],
    },
    plugins: [
        new CleanWebpackPlugin('static', {
            root: path.resolve(__dirname, '../resources/static'),
            verbose: true,
            dry: false,
        }),
    ],
}
