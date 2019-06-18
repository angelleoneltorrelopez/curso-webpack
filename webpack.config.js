const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js', //archivo principal
  output: {
    path: __dirname + '/build', //direccion y nombre de carpeta salida
    filename: 'bundle.js' // nombre del archivo generado
  },

  devServer: {
    port: 5000 //configurar puerto
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader },//plugin crea un archivo aparte de css
          { loader: 'css-loader' },
        {loader: 'sass-loader'}],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ //plugin add archivo html
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({ // plubin salida css
      filename: 'bundle.css'
    })
  ]
}
