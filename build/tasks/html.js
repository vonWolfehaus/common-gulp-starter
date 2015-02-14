var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

var config = require('../config.js');
var util = require('../util/util.js');

gulp.task('html', function() {
	// util.copy(config.src+'normalize.css', config.dest+'normalize.css');
	gulp.src(config.src+'*.html')
		.pipe(preprocess({context: {DEV: !config.release, DIST: config.release}}))
		.pipe(gulp.dest(config.dest));
});