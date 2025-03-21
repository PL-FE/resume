## 这是一份在线简历

* http://resume.pl-fe.cn

本项目基于 [@ Cong Min](https://github.com/mcc108/resume) 进行重构, 增强如下功能：

- [x] 使用 pnpm
- [x] 升级为 Webpack5
- [x] 使用 flex 替代 float
- [x] 自动生成最近更新时间
- [x] Github Action + Docker 自动部署

------

前提: 已安装`nodejs` `npm`

1. `npm i` 安装依赖
2. **开发**：命令行运行 `npm run dev` 开启调试服务器
3. 编辑 `/src/index.html` 文件实时调试
4. **生产**：命令行运行 `npm run build` 进行打包
5. 浏览器打开 `/index.html` 进行预览

> chrome浏览器 - "打印" - 另存为 PDF - 设置无边距 - 勾选背景图形 - 即可导出.
