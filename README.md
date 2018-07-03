# 用于统计前端项目的代码的行数



1. 安装

> npm install countrow --save-dev

2. 使用

> `const countrow = require('countrow')`
>
> `countrow('./', false /*默认不统计node_modules 如需统计将此参数传true*/).then((result) => {`
>
> `console.log(result.rows, result.fileCount)`
>
> `})`

