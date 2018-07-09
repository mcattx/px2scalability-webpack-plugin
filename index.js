const Px2scalability = require('px2scalability')
const isDebug = true

const defaultConfig = {
    fileName: 'style'
}

const px2scalability = new Px2scalability({
    'env': 'prod',
    'outputPath': './output',
    'fileName': 'test'
})

const caseText = 'body {width: 640px}'

function Px2scalabilityWebpackPlugin (options) {
    this.options = Object.assign({}, defaultConfig, options)
    // webpack存储变量
    this.webpackOptions = {};
    this.status = {}
}

Px2scalabilityWebpackPlugin.prototype.apply = (compiler) => {

    compiler.hooks.emit.tap('Px2scalabilityWebpackPlugin', (compilation, callback) => {
        // let cssFileList = []
        isDebug && console.log('====emit====')
        console.log('====assets====')
        console.log(compilation.assets)
        for (let cssAssets in compilation.assets) {
            if (cssAssets.indexOf('.css') > -1) {
                // cssFileList.push(cssAssets)
                console.dir(compilation.assets[cssAssets])
                console.log(typeof(compilation.assets[cssAssets]))
                console.log(Object.prototype.toString.call(compilation.assets[cssAssets]))
                // console.log(compilation.assets[cssAssets]["ConcatSource"])
                // console.log(compilation.assets[cssAssets]["ConcatSource"]["children"][0])
                // console.log(compilation.assets[cssAssets]["ConcatSource"]["children"][0]["RawSource"])
                // console.log(compilation.assets[cssAssets]["ConcatSource"]["children"][0]["RawSource"]["_value"])
            }
        }
        // console.log('====chunks====')
        // console.log(compilation.chunks)
        px2scalability.init(caseText)

        // callback()
    })

    compiler.hooks.done.tap('Px2scalabilityWebpackPlugin', (compilation) => {
        isDebug && console.log('====done====')
        console.log('====assets====')
        console.log(compilation.assets)
    })
}

module.exports = Px2scalabilityWebpackPlugin
