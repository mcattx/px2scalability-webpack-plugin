const Px2scalability = require('px2scalability')
const treeify = require('treeify')
const isDebug = true

const defaultConfig = {
    fileName: 'style'
}

const px2scalability = new Px2scalability({
    'env': 'prod',
    'outputPath': './output',
    'fileName': 'test'
})

const RawSourcecaseText = 'body {width: 640px}'

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
                console.log('====compilation====')
                console.log(treeify.asTree(compilation.assets[cssAssets]))
                console.log(compilation.assets[cssAssets]["children"][0])
                let RawSource = compilation.assets[cssAssets]["children"][0]["RawSource"]["_value"]
                console.log(RawSource)
                px2scalability.init(RawSource)
                console.log(treeify.asTree(compilation))
            }
        }
        // console.log('====chunks====')
        // console.log(compilation.chunks)
        // px2scalability.init(caseText)

        // callback()
    })

    compiler.hooks.done.tap('Px2scalabilityWebpackPlugin', (compilation) => {
        isDebug && console.log('====done====')
        console.log('====assets====')
        // console.log(treeify.asTree(compilation))
        console.log(compilation.hash)
    })
}

module.exports = Px2scalabilityWebpackPlugin
