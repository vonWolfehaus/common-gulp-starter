var gulp = require('gulp');
var cached = require('gulp-cached');
var imagemin = require('gulp-imagemin');

var config = require('../config.js');

gulp.task('images', function() {
	return gulp.src(config.images.src)
		.pipe(cached('images'), {optimizeMemory:true})
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(config.images.dest));
});
