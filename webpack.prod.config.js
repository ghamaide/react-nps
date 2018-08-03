var path = require('path');
var webpack = require('webpack');
var isProd = process.env.NODE_ENV === 'production' || null;

const externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
  },
  'prop-types': {
    root: 'PropTypes',
    commonjs2: 'prop-types',
    commonjs: 'prop-types',
    amd: 'prop-types',
  },
};

var config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-nps.js',
    sourceMapFilename: 'react-nps.sourcemap.js',
    library: 'ReactNps',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: externals,
};

if (isProd) {
  config.output.filename = 'react-nps.min.js';
  config.output.sourceMapFilename = 'react-nps.min.js';
  config.plugins = config.plugins ? config.plugins : [];
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['React', 'ReactDOM', 'ReactNps'],
      },
    }),
  );
}

module.exports = config;
