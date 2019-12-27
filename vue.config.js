let webpack = require('webpack');
module.exports = {
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true, //配置自动启动浏览器 
        proxy: {
            '/app': {
                target: 'http://47.96.25.221:10102/', //对应自己的接口
                changeOrigin: true,//是否跨域
                ws: true,//是否适用websockets
            },
        }
    },
    productionSourceMap: false,
}