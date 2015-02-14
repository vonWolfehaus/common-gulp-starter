var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

var config = require('../config.js');

gulp.task('watch', function() {
	config.release = !!argv.dist;
	if (!config.release) {
		// watchify covers code
		gulp.watch(config.html.src+'index.html', ['html']);
		gulp.watch(config.sass.src, ['sass']);
	}
});