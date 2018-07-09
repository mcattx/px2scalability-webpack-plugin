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

const caseText = `a{color: red}; div{width: 750px};`

function Px2scalabilityWebpackPlugin (options) {
    this.options = Object.assign({}, defaultConfig, options)
}

Px2scalabilityWebpackPlugin.prototype.apply = (compiler) => {

    compiler.hooks.emit.tap('Px2scalabilityWebpackPlugin', compilation => {
        isDebug && console.log('====make====')
        px2scalability.init(caseText)
    })

    compiler.hooks.emit.tapAsync('Px2scalabilityWebpackPlugin', (compilation, callback) => {
        isDebug && console.log('====emit====')

    })

    compiler.hooks.done.tap('Px2scalabilityWebpackPlugin', () => {
        isDebug && console.log('====done====')
    })
}

module.exports = Px2scalabilityWebpackPlugin
