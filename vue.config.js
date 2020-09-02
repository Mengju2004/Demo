module.exports = {
    devServer: {
        proxy: {
            '/i': {
                target: 'https://imgchr.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}