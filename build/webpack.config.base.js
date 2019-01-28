//webpack.config.base.js正式、生产和后期扩展模块的公共设置都放这里


//===============依赖文件====================
var path=require('path');

const createVueLoaderOptions = require('./vue-loader.config');



const isDev = process.env.NODE_ENV === 'development';  //在package设置的NODE_ENV变量可以用process.env访问的到






//===============配置====================

var config={
    mode:process.env.NODE_ENV,  //webpack 4.x必填，只接受 'development' 或 'production'
    target: "web",
    entry:path.join(__dirname,'../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            // {
            //     test: /\.(vue|js|jsx)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     enforce: 'pre'   //预处理，以上3种格式，要先经过eslint处理后才让给其他模块处理
            // },
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

