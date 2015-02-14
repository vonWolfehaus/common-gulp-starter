var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

var config = require('../config.js');
var tools = require('../util/tools.js');

gulp.task('html', function() {
	// tools.copy(config.src+'normalize.css', config.dest+'normalize.css');
	gulp.src(config.src+'*.html')
		.pipe(preprocess({context: {DEV: !config.release, DIST: config.release}}))
		.pipe(gulp.dest(config.dest));
});