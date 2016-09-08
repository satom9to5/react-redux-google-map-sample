module.exports = {
  /* ビルドの起点となるファイルの設定 */
  entry: './front/index.jsx',
  /* 出力されるファイルの設定 */
  output: {
    path: 'public/js/lib', // 出力先のパス
    filename: 'bundle.js' // 出力先のファイル名
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  /* ソースマップをファイル内に出力させる場合は以下を追加 */
  devtool: 'inline-source-map',
  module: {
    /* loaderの設定 */
    loaders: [
      {
        test: /\.jsx$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: "babel", // 使用するloader
        query: {
          presets: ["es2015", "stage-0", "react"],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loaders: ["style", "css?modules"],
      }
    ]
  }
};
