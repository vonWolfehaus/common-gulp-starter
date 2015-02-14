var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var tools = require('../util/tools.js');

gulp.task('sass', function() {
	config.release = !!argv.dist;
	
	// always copy out normalize to the destination
	tools.copy(config.sass.cssLib, config.sass.dest);
	
	return gulp.src(config.sass.src)
		.pipe(gulpif(!config.release, sourcemaps.init({loadMaps: true})))
		.pipe(sass({
			outputStyle: config.release ? 'compressed' : 'nested'
		}))
		.on('error', handleErrors)
		.pipe(gulpif(!config.release, sourcemaps.write('./')))
		.pipe(gulp.dest(config.dest));
});
