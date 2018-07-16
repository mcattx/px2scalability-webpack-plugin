# px2scalability-webpack-plugin

> 中文文档 [传送门](./README-zh.md)

A webpack plugin for [px2scalability](https://github.com/titancat/px2scalability)

**Note: Please use with the [px2scalability-loader](https://github.com/titancat/px2scalability-loader)**

## webpack-config 

```
// support webpack 4
module.exports = (env, options) => {
    // ...
    plugins: [
        new Px2scalabilityWebpackPlugin({
            mode: options.mode
        })
    ]
}
```

## Example

### Pre processing:

One raw stylesheet: `index.scss`

```
.selector {
  width: 750px;
  height: 75px; 
  font-size: 15px;
  border: 1px solid #ddd; /*no*/
}
```

### After processing:

The plugin will create two css file:

vw version: `index.0b4bc3579d5b57363002.css`

```
.selector {
  width: 100vw;
  height: 10vw; 
  font-size: 2vw;
  border: 1px solid #ddd; /*no*/
}
```

rem version: `index.0b4bc3579d5b57363002.rem.css`

```
.selector {
  width: 10rem;
  height: 1rem; 
  font-size: .2rem;
  border: 1px solid #ddd; /*no*/
}
```

## Options

```
new Px2scalabilityWebpackPlugin({
    'mode': 'production', // development || production
    'suffix': 'rem'
})
```

- mode : The plugin creates file only in the mode is set production
- suffix : File suffix