var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

var config = require('../config.js');

gulp.task('sass', function() {
	config.release = !!argv.dist;
	return gulp.src(config.sass.entry)
		.pipe(gulpif(!config.release, sourcemaps.init({loadMaps: true})))
		.pipe(sass({
			outputStyle: config.release ? 'compressed' : 'nested'
		}))
		// .on('error', regularHandler)
		.pipe(gulpif(!config.release, sourcemaps.write('./')))
		.pipe(gulp.dest(config.dest));
});