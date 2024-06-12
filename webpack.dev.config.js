const path = require('path')

module.exports = {
  entry: './src/home/index.tsx',
  mode: 'development',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 1208,
  },
}
