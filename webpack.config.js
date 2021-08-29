const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [new CompressionPlugin()],
};
module.exports = {
    plugins: [
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        include: /\/includes/,
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        exclude: /\/excludes/,
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        algorithm: "gzip",
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        algorithm(input, compressionOptions, callback) {
          return compressionFunction(input, compressionOptions, callback);
        },
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        compressionOptions: { level: 1 },
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        filename: "[path][base].gz",
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        filename(pathData) {
          // The `pathData` argument contains all placeholders - `path`/`name`/`ext`/etc
          // Available properties described above, for the `String` notation
          if (/\.svg$/.test(pathData.file)) {
            return "assets/svg/[path][base].gz";
          }
  
          return "assets/js/[path][base].gz";
        },
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        deleteOriginalAssets: true,
      }),
    ],
  };
  module.exports = {
    plugins: [
      new CompressionPlugin({
        exclude: /.map$/
        deleteOriginalAssets: 'keep-source-map',
      }),
    ],
  };