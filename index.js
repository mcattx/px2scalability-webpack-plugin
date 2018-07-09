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
                let RawSource = compilation.assets[cssAssets]["children"][0]["_value"]
                console.log(RawSource)
                console.log(typeof(RawSource))
                px2scalability.init(RawSource)
                console.log(compilation)
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
        try {
            console.log('====compilation.compilation====')
            console.log(compilation.compilation)
        } catch (e) {

        }

        try {
            console.log('====compilation.options====')
            console.log(compilation.compilation.options)
        } catch (e) {

        }
        
        console.log(compilation.hash)
    })
}

module.exports = Px2scalabilityWebpackPlugin


// Stats: {
//     compilation:
//      Compilation {
//        compiler:
//         Compiler {
//           _pluginCompat: [Object],
//           hooks: [Object],
//           name: undefined,
//           parentCompilation: undefined,
//           outputPath: '/Users/cat/projects/huiju/tech/vw/dist',
//           outputFileSystem: [Object],
//           inputFileSystem: [Object],
//           recordsInputPath: undefined,
//           recordsOutputPath: undefined,
//           records: [Object],
//           fileTimestamps: Map {},
//           contextTimestamps: Map {},
//           resolverFactory: [Object],
//           resolvers: [Object],
//           options: [Object],
//           context: '/Users/cat/projects/huiju/tech/vw',
//           requestShortener: [Object],
//           running: true,
//           watchFileSystem: [Object],
//           dependencies: undefined,
//           _lastCompilationFileDependencies: [Object],
//           _lastCompilationContextDependencies: [Object] },

//        options:
//         { entry: [Array],
//           output: [Object],
//           module: [Object],
//           plugins: [Array],
//           devServer: [Object],
//           devtool: 'eval-source-map',
//           mode: 'development',
//           context: '/Users/cat/projects/huiju/tech/vw',
//           cache: true,
//           target: 'web',
//           node: [Object],
//           performance: false,
//           optimization: [Object],
//           resolve: [Object],
//           resolveLoader: [Object] },
//        outputOptions:
//         { path: '/Users/cat/projects/huiju/tech/vw/dist',
//           filename: '[name].[hash].js',
//           chunkFilename: '[name].[hash].js',
//           webassemblyModuleFilename: '[modulehash].module.wasm',
//           library: '',
//           hotUpdateFunction: 'webpackHotUpdate',
//           jsonpFunction: 'webpackJsonp',
//           chunkCallbackName: 'webpackChunk',
//           globalObject: 'window',
//           devtoolNamespace: '',
//           libraryTarget: 'var',
//           pathinfo: true,
//           sourceMapFilename: '[file].map[query]',
//           hotUpdateChunkFilename: '[id].[hash].hot-update.js',
//           hotUpdateMainFilename: '[hash].hot-update.json',
//           crossOriginLoading: false,
//           jsonpScriptType: false,
//           chunkLoadTimeout: 120000,
//           hashFunction: 'md4',
//           hashDigest: 'hex',
//           hashDigestLength: 20,
//           devtoolLineToLine: false,
//           strictModuleExceptionHandling: false },
//        bail: undefined,
//        profile: undefined,
//        performance: false,
//        mainTemplate:
//         MainTemplate {
//           _pluginCompat: [Object],
//           outputOptions: [Object],
//           hooks: [Object],
//           requireFn: '__webpack_require__' },
//        chunkTemplate:
//         ChunkTemplate {
//           _pluginCompat: [Object],
//           outputOptions: [Object],
//           hooks: [Object] },
//        hotUpdateChunkTemplate:
//         HotUpdateChunkTemplate {
//           _pluginCompat: [Object],
//           outputOptions: [Object],
//           hooks: [Object] },
//        runtimeTemplate: RuntimeTemplate { outputOptions: [Object], requestShortener: [Object] },
//        moduleTemplates: { javascript: [Object], webassembly: [Object] },
//        semaphore:
//         Semaphore {
//           available: 100,
//           waiters: [],
//           _continue: [Function: bound _continue] },
//        entries: [ [Object] ],
//        _preparedEntrypoints: [ [Object] ],
//        entrypoints: Map { 'main' => [Object] },
//        chunks: [ [Object] ],
//        chunkGroups: [ [Object] ],
//        namedChunkGroups: Map { 'main' => [Object] },
//        namedChunks: Map { 'main' => [Object] },
//        modules:
//         [ [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object],
//           [Object] ],
//        _modules:
//         Map {
//           'multi /Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/index.js?http://localhost:9090 ./src/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/index.js?http://localhost:9090' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/webpack/hot sync nonrecursive /^\\.\\/log$/' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_url@0.11.0@url/url.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/socket.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/overlay.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js??ref--5!/Users/cat/projects/huiju/tech/vw/src/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_punycode@1.4.1@punycode/punycode.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_url@0.11.0@url/util.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/hot/emitter.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/hot/log.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/buildin/module.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/buildin/global.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js??ref--5!/Users/cat/projects/huiju/tech/vw/src/detect.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_loglevel@1.6.1@loglevel/lib/loglevel.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_strip-ansi@3.0.1@strip-ansi/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/decode.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/encode.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_events@1.1.1@events/events.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_sockjs-client@1.1.4@sockjs-client/dist/sockjs.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_ansi-html@0.0.7@ansi-html/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_extract-text-webpack-plugin@4.0.0-beta.0@extract-text-webpack-plugin/dist/loader.js??ref--4-0!/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!/Users/cat/projects/huiju/tech/vw/src/index.scss?px2vw=true&width=750' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!/Users/cat/projects/huiju/tech/vw/src/index.scss?px2vw=true&width=750' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/xml-entities.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/html4-entities.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/html5-entities.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/lib/urls.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_ansi-regex@2.1.1@ansi-regex/index.js' => [Object],
//           '/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js' => [Object] },
//        cache:
//         { children: [Object],
//           'mmulti /Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/index.js?http://localhost:9090 ./src/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/index.js?http://localhost:9090': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/webpack/hot sync nonrecursive /^\\.\\/log$/': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_url@0.11.0@url/url.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/socket.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack-dev-server@3.1.4@webpack-dev-server/client/overlay.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js??ref--5!/Users/cat/projects/huiju/tech/vw/src/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_punycode@1.4.1@punycode/punycode.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_url@0.11.0@url/util.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/hot/emitter.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/hot/log.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/buildin/module.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_webpack@4.15.1@webpack/buildin/global.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js??ref--5!/Users/cat/projects/huiju/tech/vw/src/detect.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_loglevel@1.6.1@loglevel/lib/loglevel.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_strip-ansi@3.0.1@strip-ansi/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/decode.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_querystring-es3@0.2.1@querystring-es3/encode.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_events@1.1.1@events/events.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_sockjs-client@1.1.4@sockjs-client/dist/sockjs.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_ansi-html@0.0.7@ansi-html/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_extract-text-webpack-plugin@4.0.0-beta.0@extract-text-webpack-plugin/dist/loader.js??ref--4-0!/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!/Users/cat/projects/huiju/tech/vw/src/index.scss?px2vw=true&width=750': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!/Users/cat/projects/huiju/tech/vw/src/index.scss?px2vw=true&width=750': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/xml-entities.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/html4-entities.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_html-entities@1.2.1@html-entities/lib/html5-entities.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_style-loader@0.21.0@style-loader/lib/urls.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_ansi-regex@2.1.1@ansi-regex/index.js': [Object],
//           'm/Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js': [Object],
//           chunkmain: [Object],
//           relativePaths: [Object] },
//        records:
//         { 'html-webpack-plugin for "index.html"': [Array],
//           'extract-text-webpack-plugin node_modules/_extract-text-webpack-plugin@4.0.0-beta.0@extract-text-webpack-plugin/dist node_modules/_css-loader@0.28.11@css-loader/index.js!node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!src/index.scss?px2vw=true&width=750': [Array],
//           modules: [Object],
//           chunks: [Object] },
//        additionalChunkAssets: [],
//        assets:
//         { 'main.4f498483c531168efbbc.js': [Object],
//           'css/main.4f498483c531168efbbc.css': [Object],
//           'index.html': [Object] },
//        errors: [],
//        warnings: [],
//        children: [ [Object], [Object] ],
//        dependencyFactories:
//         Map {
//           [Function: WebAssemblyImportDependency] => [Object],
//           [Function: WebAssemblyExportImportedDependency] => [Object],
//           [Function: MultiEntryDependency] => [Object],
//           [Function: SingleEntryDependency] => [Object],
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => NullFactory {},
//           [Function: LoaderDependency] => [Object],
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => NullFactory {},
//           [Object] => [Object],
//           [Function: ContextElementDependency] => [Object],
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => [Object],
//           [Object] => [Object] },
//        dependencyTemplates:
//         Map {
//           'hash' => '',
//           [Object] => ConstDependencyTemplate {},
//           [Object] => HarmonyExportDependencyTemplate {},
//           [Object] => HarmonyInitDependencyTemplate {},
//           [Object] => HarmonyImportSideEffectDependencyTemplate {},
//           [Object] => HarmonyImportSpecifierDependencyTemplate {},
//           [Object] => HarmonyExportDependencyTemplate {},
//           [Object] => HarmonyExportDependencyTemplate {},
//           [Object] => HarmonyExportSpecifierDependencyTemplate {},
//           [Object] => HarmonyExportImportedSpecifierDependencyTemplate {},
//           [Object] => HarmonyAcceptDependencyTemplate {},
//           [Object] => HarmonyAcceptImportDependencyTemplate {},
//           [Object] => AMDRequireDependencyTemplate {},
//           [Object] => ModuleDependencyTemplateAsRequireId {},
//           [Object] => AMDRequireArrayDependencyTemplate {},
//           [Object] => ContextDependencyTemplateAsRequireCall {},
//           [Object] => AMDDefineDependencyTemplate {},
//           [Object] => UnsupportedDependencyTemplate {},
//           [Object] => LocalModuleDependencyTemplate {},
//           [Object] => ModuleDependencyTemplateAsId {},
//           [Object] => ContextDependencyTemplateAsRequireCall {},
//           [Object] => ModuleDependencyTemplateAsId {},
//           [Object] => ContextDependencyTemplateAsId {},
//           [Object] => RequireResolveHeaderDependencyTemplate {},
//           [Object] => RequireHeaderDependencyTemplate {},
//           [Object] => RequireIncludeDependencyTemplate {},
//           [Object] => NullDependencyTemplate {},
//           [Object] => RequireEnsureDependencyTemplate {},
//           [Object] => ModuleDependencyTemplateAsRequireId {},
//           [Object] => ImportDependencyTemplate {},
//           [Object] => ImportEagerDependencyTemplate {},
//           [Object] => ImportDependencyTemplate {},
//           [Object] => ContextDependencyTemplateAsRequireCall {} },
//        childrenCounters:
//         { 'html-webpack-plugin for "index.html"': 1,
//           'extract-text-webpack-plugin /Users/cat/projects/huiju/tech/vw/node_modules/_extract-text-webpack-plugin@4.0.0-beta.0@extract-text-webpack-plugin/dist /Users/cat/projects/huiju/tech/vw/node_modules/_css-loader@0.28.11@css-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_px2scalability-loader@0.0.2@px2scalability-loader/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js!/Users/cat/projects/huiju/tech/vw/node_modules/_sass-loader@7.0.3@sass-loader/lib/loader.js!/Users/cat/projects/huiju/tech/vw/src/index.scss?px2vw=true&width=750': 1 },
//        usedChunkIds: null,
//        usedModuleIds: null,
//        fileTimestamps: Map {},
//        contextTimestamps: Map {},
//        compilationDependencies: Set {},
//        _buildingModules: Map {},
//        _rebuildingModules: Map {},
//        fullHash: '4f498483c531168efbbca5a7fdc999c7',
//        hash: '4f498483c531168efbbc',
//        fileDependencies:
//         SortableSet {
//           '/Users/cat/projects/huiju/tech/vw/.postcssrc.js',
         
//           '/Users/cat/projects/huiju/tech/vw/src/index.html',
//           '/Users/cat/projects/huiju/tech/vw/src/index.js',
//           '/Users/cat/projects/huiju/tech/vw/src/index.scss',
//           _sortFn: undefined,
//           _lastActiveSortFn: undefined,
//           _cache: undefined,
//           _cacheOrderIndependent: undefined },
//        contextDependencies:
//         SortableSet {
//           '/Users/cat/projects/huiju/tech/vw/node_modules/webpack/hot',
//           _sortFn: undefined,
//           _lastActiveSortFn: null,
//           _cache: undefined,
//           _cacheOrderIndependent: undefined },
//        missingDependencies:
//         SortableSet {
//           _sortFn: undefined,
//           _lastActiveSortFn: null,
//           _cache: undefined,
//           _cacheOrderIndependent: undefined } },
//     hash: '4f498483c531168efbbc',
//     startTime: 1531151112083,
//     endTime: 1531151115970 }


