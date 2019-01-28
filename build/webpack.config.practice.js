//===============依赖文件====================
var path=require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
var ExtractPlugin=require('extract-text-webpack-plugin'); //不是js的东西单独打包出来
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const VueLoaderPlugin = require('vue-loader/lib/plugin');




var defaultPluins=[  //这里是正式和开发环境都需要加载的插件
    new webpack.DefinePlugin({ //vue、react会根据不同环境去选择打包方式，如果是开发模式会包含很多注释以及提示信息，如果在正式环境没必要提示。
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.html')  //指定一个模板
    }),
    new VueLoaderPlugin(),  //Vue-loader在15.x之后都需要加载这个
];


const devServer = {
    port: 8002,
    host: '0.0.0.0',//好处是 127.0.0.1或者localhost或者在别电脑访问ip都可以访问到
    overlay: {
        errors: true, //webpack编译过程出错都显示到网页上
    },
    hot: true//默认修改前端文件时，页面会刷新有闪烁效果，并且之前操作的数据也不会保留不方便测试。如果希望保留之前的数据，并只刷新修改的那部分组件而且页面没有刷新闪烁效果，这里需要设置
}


let config




//===============配置====================


//判断开发环境 还是 正式环境
config = merge(baseConfig, {
    entry:path.join(__dirname,'../practice/index'), //我们写的js
    devtool: '#cheap-module-eval-source-map',//默认webpack编译出来页面内容都在js里面不方便用浏览器的审核元素去调试样式，如果希望像常规一样去调试，需设置这里。
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "vue-style-loader!css-loader!postcss-loader"
            }
        ]
    },
    devServer,
    resolve:{
        alias:{
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js') //import Vue from 'vue'默认引入的是vue.runtime.xx.js文件，有runtime的不能使用template,
        }
    },
    plugins: defaultPluins.concat([  //hot: true ，依赖的模块
        new webpack.HotModuleReplacementPlugin(), //热更新模块
        //  new webpack.NoEmitOnErrorsPlugin()  //4.x废弃

    ])
})



module.exports=config;

