const path = require('path');

module.exports = {
  mode: 'development',
  kit: {
    floc: true
  },
  entry: {
    index: './src/index.js',
    newProject: './src/new-project.js',
    storeProject: './src/store-project.js',
    createCard: './src/create-card.js',
    addTodos: './src/add-todos.js',
    createTodos: './src/create-todos.js',
    editTodos: './src/edit-todos.js',
    close: './src/close.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};