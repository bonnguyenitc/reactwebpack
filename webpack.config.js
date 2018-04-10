const path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: ['script-loader!jquery/dist/jquery.min.js',
          'script-loader!foundation-sites/dist/js/foundation.min.js',
          './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      reducer: 'src/reducers/reducer.js',
      store  : 'src/store.js',
      action : 'src/action.js',
      HomePage : 'src/components/HomePage.js',
      Account : 'src/components/Account.js',
      Main : 'src/components/Main.js',
      Nav : 'src/components/Nav.js',
      Transaction : 'src/components/Transaction.js',
      SignIn  :'src/components/SignIn.js',
      AccountInfo : 'src/components/AccountInfo.js',
      Notification : 'src/components/Notification.js'
    }
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.js?$/,
        exclude: /node_modules/
      }
    ]
  }
};