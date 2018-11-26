# 用于统计前端项目的代码的行数



1. 安装

> npm install countrow --save-dev

2. 使用
> `// 在项目跟路径创建一个js文件, 如main.js`
> `// 复制如下内容:`
>
> `const countrow = require('countrow')`
>
> `// 默认不统计node_modules 如需统计请将第二个参数设为true`
> `countrow('./', false).then((result) => {`
>
> `    console.log(result.rows, result.fileCount) // rows表示代码总行数, fileCount表示文件数`
>
> `})`

> `// 在控制台执行命令 如: node ./main.js`



