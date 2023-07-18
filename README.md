# 一个 Vite + Vue 3 + TS 的模板

## 模板内容

- CSS框架：[TailwindCSS](https://tailwindcss.com/)
- 组件库：[NaiveUI](https://www.naiveui.com/zh-CN/os-theme)
- 状态管理库：[pinia](https://pinia.vuejs.org/)
- 官方路由库：[vue-router](https://router.vuejs.org/zh/)
- 自动引入组件的插件：`unplugin-vue-components` 与 `unplugin-auto-import`
- 使编译后的文件为单个html的插件：[`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile)

## 使用方法

方式一：点击 [Use this template](https://github.com/laorange/vue3-ts-naiveui-tailwindcss-template/generate) 按钮，直接使用这个模板；

方式二：使用 `git clone` 命名，命令如下：

```
git clone https://github.com/laorange/vue3-ts-naiveui-tailwindcss-template.git
```

## 启动项目

> 笔者使用的包管理工具为`pnpm`，如果没有，请使用 `npm install --global pnpm` 安装，或自行改用 `npm`。

### (1) 安装依赖

```
pnpm install
```

### (2) 升级依赖（可选）

```
pnpm up --latest
```

### (3) 格式化代码

```
pnpm run format
```

### (4) 本地调试

```
pnpm run dev
```

### (5) 打包编译

```
pnpm run build
```

或者打包为单个html：

```
pnpm run build-single-file
```
