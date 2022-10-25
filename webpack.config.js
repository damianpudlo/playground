const path = require('path')
//const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

//const nonCTFilesRegex = /.*node_modules([\\/])((?!commercetools-adyen-integration-notification([\\/])src).)*$/;

module.exports = {
  context: __dirname,
  entry: './src/index.ts',
 // externals: [nodeExternals()],
  module: {
    rules: [
      {
        // exclude: _ => {
        //   console.log('TS exclude', _, typeof _)
        //   return /node_modules/.test(_) && !/node_modules\/commercetools-adyen-integration-notification/.test(_);
        // },
        //include: [
          //path.resolve('node_modules', 'commercetools-adyen-integration-notification', 'src')
        //],
        test: /.*\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      },
      // {
      //   test: /.*\.js$/,
      //   // exclude: _ => {
      //   //   console.log('JS exclude', _, typeof _)
      //   //   return /node_modules/.test(_) && !/node_modules\/commercetools-adyen-integration-notification/.test(_);
      //   // },
      //   include: [
      //    // path.resolve('node_modules', 'commercetools-adyen-integration-notification', 'src')
      //   ],
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: 'defaults' }]
      //       ]
      //     }
      //   }
      // }
    ]
  },
  // node: {
  //   __dirname: false
  // },
  resolve: {
    //symlinks: false,
    extensions: ['.ts', '.js'],
    plugins: [
      // new TsconfigPathsPlugin({
      //   baseUrl: './src'
      // }),

    ]
  },
  output: {
    //filename: '[name].[hash].js',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    //chunkFilename: '[name].[chunkhash].bundle.js',

    publicPath: '/dist/'
  },
  target: ['node'],
}
