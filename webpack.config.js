const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: "index.html",
  //     template: path.join(__dirname, "src", "index.html")
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css"
  //   })
  // ]
}
