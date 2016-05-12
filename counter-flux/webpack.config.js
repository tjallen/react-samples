var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/scripts/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      title: 'eyyy a custom title!',
      template: 'app/index.hbs',
    }),
    new CleanWebpackPlugin(['build/*'], {
      verbose: true, 
      dry: false
    })
  ],
  
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      }
    ],
  },
  postcss: function () {
    return [
      require('autoprefixer'), 
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('postcss-extend'),
      require('postcss-nested'),
      require('postcss-mixins'),
    ];
  }
};
