
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
dalian-aipport-inspection

Description(项目描述)

北京坊 (微信公众号)

Software Architecture（软件架构）

- 基于vuecli@3.x脚手架创建的整套项目详细描述如下：
- 整体前端框架: vue
- 整体ui框架： cube-ui
- 状态管理: vuex 
- css开发使用：sass预处理器
- 前后端交互发送请求：axios
- 微信原生api调用: weixin-js-sdk
- 其它详细配置请查看package.json及项目代码 

environment(环境)

- 测试环境及开发环境配置参数查阅文件：.env.dev、.env.development、.env.official、.env.production
- 测试接口地址前缀： 
- 测试环境站点地址：  
- 正式环境地址前缀： 未上线（暂缺）
- 正式环境站点地址： 未上线（暂缺） 

Installation & run(安装及运行)

代码拉取到本地后安装及运行命令（基于node npm, 若未安装请先安装node npm, 推荐版本最新稳定版）：

    1. npm install

    2.  npm run start||npm run dev (测试环境本地开发测试)
        npm run build (正式环境发布打包)
        若基于vuecli@2.x脚手架搭建，微信服务号项目，运行指令一般为：npm start;
    	发布打包指令一般为：npm run build; 
    	具体对应环境需修改: /src/api/accessPath.js 或者 /static/path.js 下相关环境配置变量参数

- 测试运行指令成功后：相应查看地址会在命令工具窗口提示，服务号项目请打开微信开发者工具后输入地址查看；
- 打包运行指令成功后：生成的相应发布代码位置：/dist 
