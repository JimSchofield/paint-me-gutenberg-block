const path = require("path");

module.exports = {
    entry: "./assets/src/index.js",
    output: {
        path: path.resolve(__dirname, "./assets/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
