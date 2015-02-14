var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

var config = require('../config.js');
var tools = require('../util/tools.js');

gulp.task('html', function() {
	// always copy out normalize to the destination
	tools.copy(config.html.src+'/normalize.css', config.html.dest+'normalize.css');
	// preprocess for ifdefs
	gulp.src(config.html.src)
		.pipe(preprocess({context: {DEV: !config.release, DIST: config.release}}))
		.pipe(gulp.dest(config.html.dest));
});