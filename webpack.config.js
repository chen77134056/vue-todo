//===============依赖文件====================
var path=require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';  //在package设置的NODE_ENV变量可以用process.env访问的到






//===============配置====================

var config={
    target: "web",
    entry:path.join(__dirname,'src/index.js'),
    output: {
        filename: "bundle.js",
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
              test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
            }
        ],
        loaders:[
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ //vue、react会根据不同环境去选择打包方式，如果是开发模式会包含很多注释以及提示信息，如果在正式环境没必要提示。
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}



//判断开发环境 还是 正式环境
if(isDev){
  config.devtool = '#cheap-module-eval-source-map', //默认webpack编译出来页面内容都在js里面不方便用浏览器的审核元素去调试样式，如果希望像常规一样去调试，需设置这里。
  config.devServer={
      port: 8001,
      host: '0.0.0.0',  //好处是 127.0.0.1或者localhost或者在别电脑访问ip都可以访问到
      overlay: {
          errors: true  //webpack编译过程出错都显示到网页上
      },
      hot: true, //默认修改前端文件时，页面会刷新有闪烁效果，并且之前操作的数据也不会保留不方便测试。如果希望保留之前的数据，并只刷新修改的那部分组件而且页面没有刷新闪烁效果，这里需要设置
  }
  config.plugins.push(  //hot: true ，依赖的模块
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
  )
}



module.exports=config;

