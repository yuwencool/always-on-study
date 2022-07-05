/**
 * 此处为VUE项目中的代理服务器配置
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    pages: {
        index: {
            //入口
            entry: 'src/main.js'
        }
    },
    // transpileDependencies: true,
    //开启服务器代理
    //这里是第一种配置方式，只配置一个代理服务器的时候采用
    devServer: {
        proxy: 'http://open.api.tianyancha.com' //被代理的服务器
    },

    //下面为配置多个代理服务器的时候需要采用的方式
    devServer: {
        proxy: {
            // '/api'是请求前缀，请求前缀在应用时要紧跟端口号
            '/api': {
                target: '<url>',
                //下面是一个特别重要的配置项
                //匹配所有以/api开头的字符串，并且重写为空，这是为了保证服务器收到的路径是正确的
                pathRewrite: {"^/api": ""},
                ws: true, //用于支持WebSocket
                changeOrigin: true //
            },
            '/foo': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            }
        }
    }
})