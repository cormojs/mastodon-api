module.exports = {
    entry: "./src/mastodon.js",
    output: {
      filename: "bundle.js",
      path: __dirname + "/lib"
    },
  
    resolve: {
      modules: ["node_modules"],
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".js", ".json"]
    },
    files: "./lib/bundle.js",
  
    module: {
      rules: [

      ]
    },
    node: {
      "fs": "empty"
    }
  };
  