const path = require('path');
const transform = require('ts-transform-paths').default;

const is_prod = process.env.NODE_ENV === 'production';
const TS_FILES = /\.(ts|tsx)$/;
const STYLE_FILES = /\.(s?css)$/;

const resolver = (dirpath) => {
  return path.resolve(__dirname, dirpath);
};

// TODO: webpack bundling has issue cant resolve module
const entry = {
  index: './src/index.ts',
  'components/index': './src/components/index.ts',
  'utils/index': './src/utils/index.ts'
  // components: {
  //   import: './src/components/index.ts',
  //   filename: 'components/index.js'
  // },
  // utils: {
  //   import: './src/utils/index.ts',
  //   filename: 'utils/index.js'
  // }
};
const output = {
  path: resolver('lib'),
  filename: '[name].js',
  library: {type: 'module'}
};
const experiments = {
  outputModule: true
};
const resolve = {
  extensions: ['.ts', '.tsx'],
  alias: {
    components: resolver('src/components'),
    utils: resolver('src/utils')
  }
};

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry,
  output,
  experiments,
  resolve,
  module: {
    rules: [
      {
        test: TS_FILES,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => transform()
          }
        }
      },
      {
        test: STYLE_FILES,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

const webpack = () => {
  if (is_prod) {
    config.mode = 'production';
  }
  return config;
};

module.exports = webpack;
