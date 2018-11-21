//webpack.config.base.js正式、生产和后期扩展模块的公共设置都放这里


//===============依赖文件====================
var path=require('path');

const createVueLoaderOptions = require('./vue-loader.config');



const isDev = process.env.NODE_ENV === 'development';  //在package设置的NODE_ENV变量可以用process.env访问的到






//===============配置====================

var config={
    target: "web",
    entry:path.join(__dirname,'../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/   //忽略掉这个目录
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },

}






module.exports=config;

