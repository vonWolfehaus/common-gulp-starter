var src = '../src/';
var dest = '../www/';
var jsFolder: src+'js/';

module.exports = {
	js: {
		entries: [
			jsFolder+'main.js'
		],
		destFile: 'main.js',
		all: jsFolder+'**/*.js',
		libs: jsFolder+'lib/*.js'
	},
	sass = {
		src: src+'style/**/*.{sass,scss}',
		dest: dest
	},
	html: {
		src: src+'htdocs/**',
		dest: dest
	},
	images: {
		src: src+'images/**',
		dest: dest+'images'
	},
	browserify: {
		entries: js.entries,
		debug: false,
		paths: ['./node_modules', jsFolder], // allows you to omit './' when requiring local modules
		extensions: ['.jsx', '.tag'],
		noparse: js.libs,
		// exclude: js.libs,
	},
	browserifyDebug: {
		entries: js.entries,
		debug: true,
		paths: ['./node_modules', jsFolder], // allows you to omit './' when requiring local modules
		extensions: ['.jsx', '.tag'],
		noparse: js.libs,
		// exclude: js.libs,
		cache: {}, packageCache: {}, fullPaths: true // required by watchify
	},
	release: false, // set to true by passing `--dist` as a gulp argument
	src: src,
	dest: dest
};
