const path = require('path');

module.exports = {
  mode: 'production',
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
           {
              loader: 'image-webpack-loader',
              options: {
               bypassOnDebug: true, // webpack@1.x
               disable: true, // webpack@2.x and newer
            },
          },
         ],
       },
    ],
  },
};
