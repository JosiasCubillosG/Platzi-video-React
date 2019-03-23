// con -p en el package.json en la tarea correspondiente usa uglify para minificar el archivo js
const path = require ("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")


module.exports = (env) => {
    
    const plugins = [
        new ExtractTextPlugin("css/[name].[hash].css")
    ]
    
    if(env.NODE_ENV === "production"){
        plugins.push(
            new CleanWebpackPlugin(["dist"],{root: __dirname})
        )
    }
    
    return{

        mode: "production",
        entry: {
            home: path.resolve(__dirname, "src/entries/home.js"),
        },
        output:{
            //el path es para poner el archivo en el sistemas de archivos
            path: path.resolve(__dirname,"dist"),
            //El hash es importante para limpiar el cache de los navegadores
            //y cuando se cargue una nueva version, no cargue cosas viejas
            filename: "js/[name].[hash].js",
            //el publichPath es para que el navegador lea los archivos
            publicPath: path.resolve(__dirname,"dist") + "/",
            chunkFilename: "js/[id].[chunkhash].js",
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
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                //Solo necesitamos entender el css porque es para produccion
                                loader: "css-loader"
                            }   
                        ]                
                    })
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
                                limit: 10000,
                                fallback: "file-loader",
                                name: "images/[name].[hash].[ext]"
                            }
                        }
                    ]
                }
            ]
        },
        plugins
    }
}