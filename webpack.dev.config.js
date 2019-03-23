const path = require ("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        home: path.resolve(__dirname, "src/entries/home.js"),
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "js/[name].js"
    },
    //para elegir el puerto del servidor
    devServer:{
        inline: false,
        port: 9000,
    },
    module:{
        rules:[
            {
                //test: que tipo de archivo quiero reconoce,
                //case: que loader se va a encargar del archivo
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env","@babel/react"],
                            plugins: ['transform-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader:"url-loader",
                        options: {
                            //Condicion de que la imagen no puede ser mayor a 100.000 bits
                            //Si cumple la condicion, la imagen se convierte a base 64
                            //osea que la imagen se vuelve codigo puro
                            //Si no cumple la condicion lo que hara sera mandar la imagen a los assets
                            //y se enviara directamente como imagen y no como  codigo.
                            limit: 100000,
                            fallback: "file-loader",
                            name: "images/[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    }
}