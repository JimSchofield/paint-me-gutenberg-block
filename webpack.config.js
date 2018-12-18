const path = require("path");

module.exports = [
    // Config for regular blocks
    {
        entry: "./assets/src/index.js",
        output: {
            path: path.resolve(__dirname, "./assets/dist"),
            filename: "build.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        stats: {
            colors: true
        },
        externals: {
            react: "React"
        }
    },
    // Config for view scripts
    {
        entry: './assets/src/index.view.js',
        output: {
            path: path.resolve(__dirname, "assets/dist"),
            filename: "build.view.js"
        },
        module: {
            rules: [
                {
                    test: /.js/,
                    loader: "babel-loader"
                }
            ]
        },
        stats: {
            colors: true
        },
        externals: {
            react: "React",
            'react-dom': 'ReactDOM'
        }
    }
];
