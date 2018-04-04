const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      reducer: 'src/reducers/reducer.js',
      store  : 'src/example.js',
      List   : 'src/components/List.js',
      Note   : 'src/components/Note.js',
      NoteForm : 'src/components/NoteForm.js',
      action : 'src/action.js'
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