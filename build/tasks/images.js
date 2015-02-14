var gulp = require('gulp');
var cached = require('gulp-cached');
var imagemin = require('gulp-imagemin');

var config = require('../config.js').images;

gulp.task('images', function() {
	return gulp.src(config.src)
		.pipe(cached('images'), {optimizeMemory:true})
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(config.dest));
});
