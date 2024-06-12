const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000, // Convert images < 100kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
}
