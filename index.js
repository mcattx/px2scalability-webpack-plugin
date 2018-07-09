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
        
        isDebug && console.log('====emit====')
        console.log('====assets====')
        console.log(compilation.assets)
        console.log('====chunks====')
        console.log(compilation.chunks)
        console.log('====chunkGroups====')
        console.log(compilation.chunkGroups)
        console.log('====namedChunkGroups====')
        console.log(compilation.namedChunkGroups)
        px2scalability.init(caseText)

        callback()
    })

    compiler.hooks.done.tap('Px2scalabilityWebpackPlugin', () => {
        isDebug && console.log('====done====')
    })
}

module.exports = Px2scalabilityWebpackPlugin
