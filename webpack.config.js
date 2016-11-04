var path = require('path');
var CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app_bundle.js"
    },
    resolve: {
      extensions: ['', '.ts', '.js', '.scss']
    },
    resolveLoader: {
      modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.scss$/, exclude: /node_modules/, loader: 'raw-loader!sass-loader' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    devServer: {
        outputPath: path.join(__dirname, 'build'),
        contentBase: './dist'
    },
    plugins:[
        new CopyWebPackPlugin([
          {from: "assets",  to: "assets"},
          {from: "src/index.html",  to: "index.html"},
          {from: "README.md",  to: "help.md"}
        ])
    ]
};
