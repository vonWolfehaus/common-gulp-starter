var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

var config = require('../config.js');

gulp.task('html', function() {
	// preprocess for ifdefs
	gulp.src(config.html.src)
		.pipe(preprocess({context: {DEV: !config.release, DIST: config.release}}))
		.pipe(gulp.dest(config.html.dest));
});