const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode : "development",
    devServer : {
        port: 8081,
    },
    plugins : [
        new ModuleFederationPlugin({
            name : "products",  //ESTE NOMBRE DEBE COINCIDIR CON EL NOMBRE QUE SE PONE EN EL CONTAINER "products@httpXXXXXXX.js"
            filename: "remoteEntry.js",
            exposes : {
                "./ProductsIndex": "./src/bootstrap"  //cambia de index a bootstrap por el tema de la funcion de mount
            },
            shared : ['faker']
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};