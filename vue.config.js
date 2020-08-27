module.exports =  {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://task.1stm.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/': '/'
                }
            }
        }
    }
}
