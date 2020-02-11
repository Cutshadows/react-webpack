const path =require('path');
const HtmlWebPackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/',
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test:/\.(jpg|png|gif|svg)$/,
                use:[{
                    'loader':'file-loader',
                    options:{
                        name:'assets/[hash].[ext]'
                        //name:'assets/[hash].jpg'
                    }
                }]
            }
        ]
    },//agregar configuracion para aceptar rutas
    devServer:{
        historyApiFallback:true,
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/inde.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        })
    ]
}