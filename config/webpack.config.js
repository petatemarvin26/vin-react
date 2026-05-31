const TsPathPlugin = require('tsconfig-paths-webpack-plugin');
const TsErrorPlugin = require('fork-ts-checker-webpack-plugin');

const {TS_FILE, CSS_FILE, SVG_FILE} = require('./constants');
const {resolver} = require('./utils');

/**
 *
 * @param {object} env
 * @returns {import('webpack').Configuration}
 */
module.exports = (env) => {
  return {
    mode: 'production',
    target: 'web',
    entry: {
      index: {
        import: resolver('src/index.ts'),
        filename: './index.js'
      },
      components: {
        import: resolver('src/components/index.ts'),
        filename: './components/index.js'
      },
      floating: {
        import: resolver('src/floating/index.ts'),
        filename: './floating/index.js'
      },
      utils: {
        import: resolver('src/utils/index.ts'),
        filename: './utils/index.js'
      }
    },
    output: {
      path: resolver('lib'),
      library: {
        type: 'module'
      }
    },
    module: {
      rules: [
        {
          test: TS_FILE,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            configFile: resolver('config/.babelrc')
          }
        },
        {
          test: CSS_FILE,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  namedExport: false,
                  exportLocalsConvention: (n) => n,
                  localIdentName: '[hash:10]_[local]'
                }
              }
            }
          ]
        },
        {
          test: SVG_FILE,
          use: ['@svgr/webpack', 'url-loader']
        }
      ]
    },
    experiments: {
      outputModule: true
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom'
    },
    plugins: [new TsErrorPlugin()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsPathPlugin({
          configFile: resolver('tsconfig.json')
        })
      ]
    }
  };
};
