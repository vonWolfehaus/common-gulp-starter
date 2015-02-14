var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var preprocess = require('gulp-preprocess');
var argv = require('yargs').argv;
var riotify = require('riotify');

var config = require('../config.js');

gulp.task('code', ['lint'], function() {
	if (dist) {
		var stream = browserify(config.browserify)
			.transform(riotify)
			.bundle()
			.on('error', browserifyHandler)
			.pipe(source(config.js.destFile))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest(config.dest));
		
		stream.on('end', function() {
			console.log('               Done building');
		});
	}
	else {
		var bundler = browserify(config.browserifyDebug)
		bundler.transform(riotify);
		
		bundler = watchify(bundler);
		
		bundler.on('update', bundle); // on any dep update, runs the bundler
		
		function bundle() {
			console.log('               Bundling '+config.js.destFile+' started');
			return bundler.bundle()
				.on('error', browserifyHandler)
				.pipe(source(config.js.destFile))
				.pipe(buffer())
				.pipe(sourcemaps.init({loadMaps: true}))
				.pipe(preprocess())
				.pipe(sourcemaps.write('./'))
				.pipe(gulp.dest(config.dest))
				.on('end', function() {
					var d = new Date();
					var t = ' at ';
					if (d.getHours() > 12) t += d.getHours() - 12;
					t += ':'+d.getMinutes();
					if (d.getHours() > 12) t += 'pm';
					else t += 'am';
					t += ' '+d.getSeconds()+'s';
					console.log('               Updated '+config.js.destFile+t);
				});
		}
		
		bundle(); // and bundle immediately
	}
});