// 导入模块
const path = require("path");
// 打包index.html文件的插件 
const htmlWebpackPlugin=require("html-webpack-plugin")
// 只解构赋值我需要的VueLoaderPlugin模块
const { VueLoaderPlugin } = require('vue-loader')
// 热更新模块
const webpack=require('webpack')

// 导出模块
module.exports = {
  // 配置模式  因为不知道所以写的none
  mode: 'none',
  // 打包入口
  entry: path.join(__dirname, "./src/main.js"),
  // entry: ["@babel/polyfill", "/src/main.js"],//舍弃的@babel/polyfill 如果要用 上面的注释这个取消即可

  // 打包出口
  output: {
    // 文件路径  这里必须是绝对路径
    path: path.join(__dirname, "./dist/"),
    // 文件名
    filename: "bundle.js",
  },
// 配置第三方模块的使用
  externals:{
    //key 就是包名  value就是全局第三方插件导出的接口名，在main.js要导入的是包名而不是第三方接口名
    jquery:'jQuery',
    vue:'Vue',
    'vue-router':'VueRouter' ,
    axios:'axios'
},
  //想 加载css 模块 需要安装loader 
// npm install --save-dev style-loader css-loader
// 并·配置下面的
module: {
    rules: [
      {
        // 加载css
        //  css-loader的作用是把css文件转换为js模块
        //  style-loader的作用是动态创建style节点将转换后的css样式插入到head中
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // 加载图片
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // 加载less文件
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      // 加载vue单文件组件模块  use下 如有options 就写{} 没有就写[]
      {
        test: /.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        //当加载js文件模块时 使用babel-loader将es6转码为es5
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,//排除掉node_modules的和bower_components代码
        use: {
          loader: 'babel-loader',//使用babel-loader模块转换  下面的babel-preset-env是所有阶段的转码规则都有 不需要从新安装不同的转码规则 参考 ecmascript6入门
          options: {
            cacheDirectory:true ,//加快babel打包速度  效果没看出来
            presets: [
              [
                '@babel/preset-env'//这个不能改成 env缩写 会报错
                // 代替 @babel/polyfill的  core-js 如果要用 82-97 注释即可
                ,              
              { 
                useBuiltIns:'usage',// usage和entry都可以 但是usage表示按需加载 entry都加载
                // "debug": true,//加这个 会有很多提示？？
                corejs:{
                //core-js的版本
                version: 3 
                },
                //需要兼容的浏览器
                targets:{
                    chrome:'60',
                    firefox:'60',
                    ie:'9',
                    safari:'10',
                    edge:'17'
                }
            }
              ]
            ],
            // 这个是解决es6新增的class 类导致的代码重复的  搞完变大了！！！擦 原因是又增加了模块 但是代码量没多少
            "plugins": [
              "@babel/plugin-transform-runtime"
              
            ] 
         
          }
        }
    },
  
    ],
   
  },
   // 第一步 安装 npm i -D html-webpack-plugin
  // 该插件的作用：将index.html打包到输出目录output对应的文件所属目录 我这里是bundle.js文件的目录
  // 也就是说bundle.js这个出口文件在哪，那么index.html就去哪
  // 通过这个插件会自动添加<script src="./dist/bundle.js"></script> 这行代码 在index.html中 
  plugins:[
    new htmlWebpackPlugin({
      template:'./index.html',
      title: '这是我设置的titile'
    })
    // 添加VueLoaderPlugin 来时.vue的规则生效
  ,  new VueLoaderPlugin,
    // 热更新
  new webpack.HotModuleReplacementPlugin()

],
// 热更新
optimization: {
  moduleIds: 'named'
},
  // webpack -server 自动编译  配置
  devServer: {
    // 配置webpack-dev-server 的www目录
    static: './',

    // 热更新
    hot:true
    
  },

};



