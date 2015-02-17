var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');
var tools = require('../util/tools.js');

gulp.task('sass', function() {
	config.release = !!argv.dist;
	
	tools.copy(config.sass.cssLib, config.sass.dest);
	
	var so = { outputStyle: config.release ? 'compressed' : 'nested' };
	tools.merge(so, config.sass.settings);
	
	return gulp.src(config.sass.src)
		.pipe(gulpif(!config.release, sourcemaps.init()))
		.pipe(sass(so))
		.on('error', handleErrors)
		.pipe(autoprefixer('last 3 version'))
		.pipe(gulpif(!config.release, sourcemaps.write('./')))
		.pipe(gulp.dest(config.dest));
});
