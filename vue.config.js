module.exports={
    devServer:{
      port: 8001,
      open: false,
      proxy:{
        '/api':{
          target:'https://uncle9.top',
          changeOrigin:true,
          ws:true,
        },
        '/douban':{
          target:'https://api.douban.com',
          changeOrigin:true,
          pathRewrite:{
            '^/douban':'',
          }
        }
      }
    }
  }