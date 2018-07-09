
const isDebug = false

const defaultConfig = {
    fileName: 'style'
}

function Px2scalabilityWebpackPlugin (options) {
    this.options = Object.assign({}, defaultConfig, options)
}

Px2scalabilityWebpackPlugin.prototype.apply = (compiler) => {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.plugin('emit', function(compilation, callback) {
        console.log("This is an example plugin!!!");
        console.log(compilation)
        // 功能完成后调用 webpack 提供的回调。
        callback();
    });

    compiler.hooks.make.tap('Px2scalabilityWebpackPlugin', compilation => {
        isDebug && console.log('====make====')
    })

    compiler.hooks.emit.tapasync('Px2scalabilityWebpackPlugin', (compilation, callback) => {
        isDebug && console.log('====emit====')

    })

    compiler.hooks.done.tap('Px2scalabilityWebpackPlugin', () => {
        isDebug && console.log('====done====')
    })
}

Px2scalabilityWebpackPlugin.prototype.printChunkName = 

module.exports = Px2scalabilityWebpackPlugin
