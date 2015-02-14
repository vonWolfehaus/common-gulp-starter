var gulp = require('gulp');
var cached = require('gulp-cached');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');

gulp.task('lint', function() {
	return gulp.src(config.js.all)
		.pipe(cached('hinting'), {optimizeMemory:true})
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'))
		.on('error', handleErrors)
		.on('end', function() {
			// console.log('               Done linting');
		});
});