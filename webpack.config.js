const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {
  return {
    entry: {
      index: './src/index.tsx',
      vendor: ['react', 'react-dom'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.jsx', '.ts', '.js', '.json'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  };
};
