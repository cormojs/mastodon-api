module.exports = {
    entry: "./src/mastodon.js",
    output: {
      filename: "bundle.js",
      path: __dirname
    },
  
    resolve: {
      modules: ["node_modules"],
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".js", ".json"]
    },
  
    module: {
      rules: [

      ]
    },
    node: {
      "fs": "empty"
    }
  };
  