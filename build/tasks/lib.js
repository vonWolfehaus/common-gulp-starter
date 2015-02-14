var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;

var config = require('../config.js');

gulp.task('lib', function() {
	var dist = config.release = !!argv.dist;
	return gulp.src(config.js.libs)
		.pipe(concat('lib.js'))
		.pipe(gulpif(!dist, sourcemaps.init({loadMaps: true})))
		.pipe(gulpif(dist, uglify()))
		.pipe(gulpif(!dist, sourcemaps.write('./')))
		.pipe(gulp.dest(config.dest));
});