



module.exports = (isDev) => {
    return {
        preserveWhitepace: true,  //true时，过滤掉html中多余的空格
        extractCSS: !isDev,  //true时，vue放弃使用自己的方法去处理css，而是用webpack引入的处理css模块的方法
        // cssModules: {  // (感觉这东西没什么用)
        //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',  //结果是：class="client-layout--header-xxxx"
        //     camelCase: true  //调用<diy :class="$style.mainStyle"></diy>    .main-style{}
        // },
        // hotReload: false, // false时，关闭热更新(修改样式还会有热更新效果那时因为样式使用的是vue-style-loader去实现的)
    }
}