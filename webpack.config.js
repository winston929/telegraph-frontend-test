const path = require( "path" );
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "app.bundle.js"
	},
	plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: "src/fonts", to: "fonts" },
			{ from: "src/img", to: "img" }
		  ],
		}),
	]
};
