const path = require('path');

module.exports = {
    mode: 'development', // ou 'production',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node'
};
