# px2scalability-webpack-plugin

> English [doc](./README.md)

一个 [px2scalability](https://github.com/titancat/px2scalability) 的 webpack 插件

**注意: 请务必配合 [px2scalability-loader](https://github.com/titancat/px2scalability-loader) 一起使用！**

## webpack-config 

```
// 暂时只支持 webpack 4+ 
module.exports = (env, options) => {
    // ...
    plugins: [
        new Px2scalabilityWebpackPlugin({
            mode: options.mode
        })
    ]
}
```

## 例子

### 处理前:

原始样式文件: `index.scss`

```
.selector {
  width: 750px;
  height: 75px; 
  font-size: 15px;
  border: 1px solid #ddd; /*no*/
}
```

### 处理后:

插件会生成两个样式文件:

vw 版本: `index.0b4bc3579d5b57363002.css`

```
.selector {
  width: 100vw;
  height: 10vw; 
  font-size: 2vw;
  border: 1px solid #ddd; /*no*/
}
```

rem 版本: `index.0b4bc3579d5b57363002.rem.css`

```
.selector {
  width: 10rem;
  height: 1rem; 
  font-size: .2rem;
  border: 1px solid #ddd; /*no*/
}
```

## 可选项

```
new Px2scalabilityWebpackPlugin({
    'mode': 'production', // development || production
    'suffix': 'rem'
})
```

- mode : 仅在 `mode` 被设为 `production` 的时候插件才会生成文件
- suffix : 生成的文件名后缀。假如传入 `test`，生成的样式文件就是 `index.test.css`