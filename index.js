const fs = require('fs')
const Px2scalability = require('px2scalability')

let cssFileName = ''
let cssText = ''

const defaultConfig = {
    'env': 'production', // development || production
    'fileName': 'style'
}

function Px2scalabilityWebpackPlugin (options) {
    this.options = Object.assign({}, defaultConfig, options)
    // webpack存储变量
    this.webpackOptions = {};
    this.status = {}
}

function _getCSSFileName (name) {
    let length = name.length
    return name.substring(0, length - 4)
}

function _createFile (cssString, config) {
    let fileName = config.fileName || 'style'
    let outputPath = config.outputPath || './output'
    let suffix = config.suffix || 'rem'

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath)
    }

    fs.writeFile(`${outputPath}/${fileName}.${suffix}.css`, cssString, (err) => {
        if (err) {
            console.error(`px2scalability-webpack-plugin create ${fileName}.${suffix}.css failed.`)
        } else {
            console.log(`px2scalability-webpack-plugin create ${fileName}.${suffix}.css successfully.`)
        }
    })
}

Px2scalabilityWebpackPlugin.prototype.apply = (compiler) => {

    compiler.hooks.emit.tap('Px2scalabilityWebpackPlugin', (compilation, callback) => {
        for (let cssAssets in compilation.assets) {
            if (cssAssets.indexOf('.css') > -1) {
                cssFileName = cssAssets
                cssText = compilation.assets[cssAssets]["children"][0]["_value"]
                const px2scalability = new Px2scalability()
                let ins = px2scalability.init(cssText, 'vw2rem')
                let outputConfig = {
                    'fileName': _getCSSFileName(cssFileName),
                    'outputPath': compilation.outputOptions.path,
                    'suffix': 'rem'
                }
                _createFile(ins, outputConfig)
            }
        }
    })
}

module.exports = Px2scalabilityWebpackPlugin
