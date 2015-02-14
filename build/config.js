var src = '../src/';
var dest = '../client/';
var jsFolder: src+'js/';

module.exports = {
	release: false, // set to true by passing `--dist` as a gulp argument
	
	src: src,
	dest: dest,
	
	js: {
		entries: [
			jsFolder+'Main.js',
			jsFolder+'states/Menu.js',
			jsFolder+'states/Play.js',
			jsFolder+'components/ComponentList.js'
		],
		destFile: 'main.js',
		all: jsFolder+'**/*.js',
		libs: jsFolder+'lib/*.js'
	},
	sass = {
		src: src+'sass/**/*.{sass,scss}',
		dest: dest
	},
	markup: {
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
	}
};
